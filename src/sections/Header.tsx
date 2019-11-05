import React from 'react';
import styled from 'styled-components';
import { PrimaryPageTitle, SecondaryPageTitle } from '../styles/PageTitleStyles';
import { ColoredElement } from '../styles/utils/coloredElement';
import { Color } from '../styles/general/config';
import SocialPanel from '../components/SocialPanel';
import AboutMe from '../components/AboutMe';

import mainBackground from '../assets/img/Background.png';

const StyledHeader = styled.div`
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

			<button>KEEP GOING</button>
		</StyledHeader>
	);
};

export default Header;
