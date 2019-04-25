import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

class About extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle} current={null}>
        <SEO title="About" lang="ja" />
        <article>
          <header class="p-article__header">
            <h1 class="p-article__title">2019 素材置き場</h1>
          </header>
          <div className="p-article__body">
            <h1>アンケート</h1>
            <p>
              <small>2019.4.26</small>
            </p>
            <a href="https://forms.gle/jzSU6Qy1iGDEsWVq7" target="_blank" rel="noopener noreferrer">
              2019 Webデザインアンケート
            </a>
          </div>
        </article>
      </Layout>
    );
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
