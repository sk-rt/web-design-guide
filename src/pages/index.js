import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle} current={null}>
        <SEO title="All posts" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

        {posts.map(({ node }, index) => {
          const tagList = node.frontmatter.tags.map((tag, index) => <span key={index}>{tag}</span>);
          const number = `00${index + 1}`.slice(-2);
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <article key={node.fields.slug} className="p-post-item">
              <Link className="p-post-item__link" to={node.fields.slug}>
                <div className="p-post-item__index">{number}</div>
                <div
                  className="p-post-item__featured-image"
                  style={{
                    backgroundImage: `url(/featured/${node.frontmatter.featuredImage})`
                  }}
                />
                <div className="p-post-item__content">
                  <div>
                    <h3>{title}</h3>
                    <p>{node.frontmatter.excerpt}</p>
                    <div className="c-tag-list">{tagList}</div>
                  </div>
                </div>
              </Link>
            </article>
          );
        })}
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            excerpt
            featuredImage
          }
        }
      }
    }
  }
`;
