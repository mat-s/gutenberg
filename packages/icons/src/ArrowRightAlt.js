
/**
 * WordPress dependencies
 */
import { Path, SVG } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { getIconClassName } from '../icon-class';

export default function ArrowRightAlt( { size = 20, className, ariaPressed, ...props } ) {
	const iconClass = getIconClassName( 'arrow-right-alt', className, ariaPressed );
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
			<Path d="M2 11V9h12l-4-4 1-2 7 7-7 7-1-2 4-4H2z" />
		</SVG>
	);
}