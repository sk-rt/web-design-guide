import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

class About extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return <Layout location={this.props.location} title={siteTitle} current={null}></Layout>;
  }
}

export default About;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
