import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
	background-color: black;
	height: 1150px;
`;

const Header = () => {
	return <StyledHeader className='header'></StyledHeader>;
};

export default Header;
