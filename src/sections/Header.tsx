import React from 'react';
import styled from 'styled-components';
import { PrimaryPageTitle, SecondaryPageTitle } from '../styles/PageTitleStyles';
import { ColoredElement } from '../styles/ColoredElement';
import { Color, ButtonSize } from '../styles/const/config';
import SocialPanel from '../components/SocialPanel';
import AboutMe from '../components/AboutMe';
import { Button } from '../styles/UI/Button';
import { StyledHeader } from '../styles/Header';
import { MediaQuery } from '../styles/const/media';

const StyledButton = styled(Button)`
	&&& {
		transition: 0.1s ease-out;
		box-shadow: 0px 3px 6px #000000a6;
		margin-top: 50px;

		&:hover {
			box-shadow: 0px 0px 6px #000000a6;
			transform: translateY(1px);
		}
	}
`;

const Header = () => {
	return (
		<StyledHeader>
			<PrimaryPageTitle>
				<ColoredElement color={Color.ACCENT}>Hello. </ColoredElement>My name's{' '}
				<ColoredElement color={Color.ACCENT}>Erwin Heba</ColoredElement>
			</PrimaryPageTitle>
			<SecondaryPageTitle>
				I'm{' '}
				<ColoredElement color={Color.ACCENT}>
					<b>Front Developer</b>
				</ColoredElement>{' '}
				with several years of experience
			</SecondaryPageTitle>
			<AboutMe />
			<SocialPanel />
			<StyledButton size={ButtonSize.BIG}>KEEP GOING</StyledButton>
		</StyledHeader>
	);
};

export default Header;
