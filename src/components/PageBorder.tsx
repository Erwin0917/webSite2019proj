import React, { ReactChildren } from 'react';
import styled from 'styled-components';

const StyledPageBorder = styled.div`
	position: relative;
	height: 100vh;
	padding: 20px;

	.pageBorder {
		position: absolute;
		background-color: white;
	}

	.pageBorder--top {
		top: 0;
		left: 0;
		width: 100%;
		height: 20px;
	}

	.pageBorder--bottom {
		bottom: 0;
		left: 0;
		width: 100%;
		height: 20px;
	}

	.pageborder--right {
		right: 0;
		top: 0;
		width: 20px;
		height: 100vh;
	}

	.pageBorder--left {
		left: 0;
		top: 0;
		width: 20px;
		height: 100vh;
	}
`;

type Props = {
	children: ReactChildren | JSX.Element;
};

const PageBorder = (props: Props) => {
	return (
		<StyledPageBorder>
			<div className='pageBorder pageBorder--top'></div>
			<div className='pageBorder pageBorder--bottom'></div>
			<div className='pageBorder pageBorder--left'></div>
			<div className='pageBorder pageBorder--right'></div>
			{props.children}
		</StyledPageBorder>
	);
};

export default PageBorder;
