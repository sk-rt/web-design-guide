import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm, scale } from '../utils/typography';
import { element } from 'prop-types';

class BlogPostTemplate extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const post = data.markdownRemark;
    const { previous, next } = this.props.pageContext;
    const tagList = post.frontmatter.tags.map((tag, index) => <span key={index}>{tag}</span>);
    //サンプルファイル
    const sampleListBlock = (samples => {
      if (!samples || samples.length === 0) return;
      return (
        <div className="p-post-examples">
          <p>コードサンプル</p>
          {samples.map((sample, index) => {
            return (
              <a href={`/samples/${sample.file}`} key={index}>
                {sample.title}
              </a>
            );
          })}
        </div>
      );
    })(post.frontmatter.samples);
    return (
      <Layout location={this.props.location} title={siteTitle} current={post}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <header className="p-article__header">
          <h1 className="p-article__title">{post.frontmatter.title}</h1>
          <p className="p-article__tags c-tag-list">{tagList}</p>
        </header>
        {sampleListBlock}
        <div className="p-article__body" dangerouslySetInnerHTML={{ __html: post.html }} />
        <ul className="p-post__nav">
          <li className="p-post__nav-item is-prev">
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li className="p-post__nav-item is-next">
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }

    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        excerpt
        samples {
          title
          file
        }
      }
    }
  }
`;
