import * as React from 'react';
import PageWrapper from '../layouts';
import { graphql } from 'gatsby';
import Header from '../sections/Header';
import PageBorder from '../components/PageBorder';

interface IndexPageProps {
	data: {
		site: {
			siteMetadata: {
				title: string;
			};
		};
		myPage: {
			technologieses: [{ id: number; technology: string }];
		};
	};
}

export default class extends React.Component<IndexPageProps, {}> {
	constructor(props: IndexPageProps, context: any) {
		super(props, context);
	}

	public render() {
		return (
			<PageWrapper>
				<PageBorder>
					<Header />
				</PageBorder>
			</PageWrapper>
		);
	}
}

export const myQuery = graphql`
	query IndexQuery {
		site {
			siteMetadata {
				title
			}
		}
		myPage {
			technologieses {
				id
				technology
			}
		}
	}
`;
