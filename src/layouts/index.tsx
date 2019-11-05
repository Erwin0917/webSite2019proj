import * as React from 'react';
import Helmet from 'react-helmet';

import { GlobalStyles } from '../styles/general/GlobalStyles';

interface PageWrapperProps extends React.HTMLProps<HTMLDivElement> {
	children: any;
}

const PageWrapper = (props: PageWrapperProps) => {
	return (
		<div>
			<GlobalStyles />
			<Helmet
				title='Erwin Heba page'
				meta={[
					{ name: 'description', content: 'Portfolio page' },
					{
						name: 'keywords',
						content: 'front end developer, javascript developer, web developer, portfolio, new technologies'
					}
				]}
			/>
			<div>{props.children}</div>
		</div>
	);
};

export default PageWrapper;
