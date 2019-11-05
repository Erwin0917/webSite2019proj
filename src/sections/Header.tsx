import React from 'react';
import styled from 'styled-components';
import { PrimaryPageTitle, SecondaryPageTitle } from '../styles/PageTitleStyles';
import { ColoredElement } from '../styles/utils/coloredElement';
import { Color } from '../styles/general/config';

import mainBackground from '../assets/img/Background.png';
import SocialPanel from '../components/SocialPanel';
import { AboutMe } from '../styles/AboutMeStyles';

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
				width several years of experience
			</SecondaryPageTitle>

			<SocialPanel />

			<AboutMe>
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
				labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
				et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
				ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
			</AboutMe>

			<button>KEEP GOING</button>
		</StyledHeader>
	);
};

export default Header;
