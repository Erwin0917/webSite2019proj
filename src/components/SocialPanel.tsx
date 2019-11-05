import React from 'react';
import { SocialPanelStyles } from '../styles/SocialPanelStyles';

import githubIcon from '../assets/img/github-original.svg';
import linkedinIcon from '../assets/img/linkedin-original.svg';

const SocialPanel = () => {
	return (
		<SocialPanelStyles>
			<b>You can find me here:</b>
			<a
				className='SocialPanel__icon'
				href='https://github.com/Erwin0917'
				style={{ backgroundImage: `url(${githubIcon})` }}></a>
			<a
				className='SocialPanel__icon'
				href='https://www.linkedin.com/in/erwin-heba/'
				style={{ backgroundImage: `url(${linkedinIcon})` }}></a>
		</SocialPanelStyles>
	);
};

export default SocialPanel;
