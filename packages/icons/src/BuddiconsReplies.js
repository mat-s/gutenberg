
/**
 * WordPress dependencies
 */
import { Path, SVG } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { getIconClassName } from '../icon-class';

export default function BuddiconsReplies( { size = 20, className, ariaPressed, ...props } ) {
	const iconClass = getIconClassName( 'buddicons-replies', className, ariaPressed );
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
			<Path d="M17.54 10.29c1.17 1.17 1.17 3.08 0 4.25-1.18 1.17-3.08 1.17-4.25 0l-.34-.52c0 3.66-2 4.38-2.95 4.98-.82-.6-2.95-1.28-2.95-4.98l-.34.52c-1.17 1.17-3.07 1.17-4.25 0-1.17-1.17-1.17-3.08 0-4.25 0 0 1.02-.67 2.1-1.3C3.71 7.84 3.2 6.42 3.2 4.88c0-.34.03-.67.08-1C3.53 5.66 4.47 7.22 5.8 8.3c.67-.35 1.85-.83 2.37-.92H8c-1.1 0-2-.9-2-2s.9-2 2-2v-.5c0-.28.22-.5.5-.5s.5.22.5.5v.5h2v-.5c0-.28.22-.5.5-.5s.5.22.5.5v.5c1.1 0 2 .9 2 2s-.9 2-2 2h-.17c.51.09 1.78.61 2.38.92 1.33-1.08 2.27-2.64 2.52-4.42.05.33.08.66.08 1 0 1.54-.51 2.96-1.36 4.11 1.08.63 2.09 1.3 2.09 1.3zM8.5 6.38c.5 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm3-2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-2.3 5.73c-.12.11-.19.26-.19.43.02.25.23.46.49.46h1c.26 0 .47-.21.49-.46 0-.15-.07-.29-.19-.43-.08-.06-.18-.11-.3-.11h-1c-.12 0-.22.05-.3.11zM12 12.5c0-.12-.06-.28-.19-.38-.09-.07-.19-.12-.31-.12h-3c-.12 0-.22.05-.31.12-.11.1-.19.25-.19.38 0 .28.22.5.5.5h3c.28 0 .5-.22.5-.5zM8.5 15h3c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-3c-.28 0-.5.22-.5.5s.22.5.5.5zm1 2h1c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5s.22.5.5.5z" />
		</SVG>
	);
}