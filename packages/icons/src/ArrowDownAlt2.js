
/**
 * WordPress dependencies
 */
import { Path, SVG } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { getIconClassName } from '../icon-class';

export default function ArrowDownAlt2( { size = 20, className, ariaPressed, ...props } ) {
	const iconClass = getIconClassName( 'arrow-down-alt-2', className, ariaPressed );
	return (
		<SVG
			aria-hidden
			role="img"
			focusable="false"
			className={ iconClass }
			xmlns="http://www.w3.org/2000/svg"
			width={ size }
			height={ size }
			viewBox="0 0 20 20"
			{ ...props }
		>
			<Path d="M5 6l5 5 5-5 2 1-7 7-7-7z" />
		</SVG>
	);
}