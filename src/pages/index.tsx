import * as React from 'react'
import PageWrapper from '../layouts'


interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

export default class extends React.Component<IndexPageProps, {}> {

  constructor(props: IndexPageProps, context: any) {
    super(props, context)
  }

  public render() {
    return (
      <PageWrapper>
        <h1>Hi people</h1>
        <p>
          Welcome to your new{' '}
          <strong>{this.props.data.site.siteMetadata.title}</strong> site.
        </p>
        <p>Init dev branch</p>
      </PageWrapper>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
