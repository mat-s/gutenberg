/**
 * External dependencies
 */
import { cond, matchesProperty, omit } from 'lodash';

/**
 * WordPress dependencies
 */
import { NavigableMenu, KeyboardShortcuts } from '@wordpress/components';
import { Component, createRef } from '@wordpress/element';
import { focus } from '@wordpress/dom';
import { ESCAPE } from '@wordpress/keycodes';

class NavigableToolbar extends Component {
	constructor() {
		super( ...arguments );

		this.focusToolbar = this.focusToolbar.bind( this );
		this.restoreFocus = this.restoreFocus.bind( this );

		this.switchOnKeyDown = cond( [
			[ matchesProperty( [ 'keyCode' ], ESCAPE ), this.restoreFocus ],
		] );
		this.toolbar = createRef();
	}

	componentDidMount() {
		NavigableToolbar.registry.set( this.props.scopeId, this );

		if ( this.props.focusOnMount ) {
			this.focusToolbar();
		}
	}

	componentWillUnmount() {
		NavigableToolbar.registry.delete( this.props.scopeId );
	}

	/**
	 * Shifts focus to the first tabbable element within the toolbar container,
	 * if one exists.
	 */
	focusToolbar() {
		const tabbables = focus.tabbable.find( this.toolbar.current );
		if ( ! tabbables.length ) {
			return;
		}

		// Track the original active element prior to shifting focus, so that
		// focus can be returned if the user presses Escape while in toolbar.
		//
		// [TODO]: Currently, to support "stepping down" through multiple
		// navigable toolbars, the assigned value is only cleared after
		// pressing Escape. If the user manually shifts focus away and later
		// returns to press Escape, it will still (wrongly) use the earlier-
		// assigned value.
		this.activeElementBeforeFocus = document.activeElement;

		tabbables[ 0 ].focus();
	}

	/**
	 * Restores focus to the active element at the time focus was
	 * programattically shifted to the toolbar, if one exists.
	 */
	restoreFocus() {
		if ( this.activeElementBeforeFocus ) {
			this.activeElementBeforeFocus.focus();
			delete this.activeElementBeforeFocus;
		}
	}

	render() {
		const {
			children,
			// Disable reason: NavigableMenu will pass through props received
			// to its rendered element. Avoid including NavigableToolbar's
			// `scopeId` in destructured props.
			/* eslint-disable no-unused-vars */
			scopeId,
			/* eslint-enable no-unused-vars */
			...props
		} = this.props;

		return (
			<NavigableMenu
				orientation="horizontal"
				role="toolbar"
				ref={ this.toolbar }
				onKeyDown={ this.switchOnKeyDown }
				{ ...omit( props, [
					'focusOnMount',
				] ) }
			>
				{ children }
			</NavigableMenu>
		);
	}
}

NavigableToolbar.registry = new Map;

NavigableToolbar.KeybindScope = class extends Component {
	constructor() {
		super( ...arguments );

		this.focusToolbar = this.focusToolbar.bind( this );
	}

	/**
	 * Invokes `focusToolbar` on the `NavigableToolbar` instance corresponding
	 * to the scope's own `scopeId` prop, if one exists.
	 */
	focusToolbar() {
		const toolbar = NavigableToolbar.registry.get( this.props.scopeId );
		if ( toolbar ) {
			toolbar.focusToolbar();
		}
	}

	render() {
		return (
			<KeyboardShortcuts
				bindGlobal
				ignoreChildHandled
				eventName="keydown"
				shortcuts={ {
					'alt+f10': this.focusToolbar,
				} }
				{ ...omit( this.props, [ 'scopeId' ] ) }
			/>
		);
	}
};

export default NavigableToolbar;
