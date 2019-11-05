import { Color } from './general/config';
import styled from 'styled-components';

export const AboutMeStyles = styled.p`
	position: relative;
	max-width: 800px;
	line-height: 1.4;
	font-size: 2rem;
	/* text-shadow: 0px 3px 6px rgba(0, 0, 0, 1); */
	margin: 40px 0;
	/* box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.15); */
	/* background-color: rgba(0, 0, 0, 0.15); */
	padding: 5px;
	color: ${Color.DARK_TEXT};

	&::before {
		content: '';
		position: absolute;
		width: 110%;
		height: 115%;
		left: 0;
		top: 0;
		background-color: white;
		z-index: -1;
		transform: rotate3D(2, 3, 2, -5deg) translate(-20px, -10px);
		transform-origin: left bottom;
		box-shadow: inset 0px 0px 8px 4px rgba(0, 0, 0, 0.45);
	}
`;
