import { Color } from './../const/config';
import styled from 'styled-components';
import { ButtonSize } from '../const/config';

type IButton = {
	size: ButtonSize;
};

export const Button = styled.button<IButton>`
	background-color: ${Color.ACCENT};
	font-size: ${({ size }) => (size === ButtonSize.BIG ? '28px' : '22px')};
	color: ${Color.PRIMARY_TEXT};
	border: 0;
	padding: 10px 25px;
	margin: 10px;
	cursor: pointer;
`;
