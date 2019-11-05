import styled from 'styled-components';
import { Color } from './const/config';

import mainBackground from '../assets/img/Background.png';

export const StyledHeader = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background: url(${mainBackground});
	background-position: center;
	background-size: cover;
	height: calc(100vh - 40px);
	width: calc(100% - 40px);
	padding: 25px;
	color: ${Color.PRIMARY_TEXT};
`;
