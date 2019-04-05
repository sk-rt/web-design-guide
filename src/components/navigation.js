import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

class Navigation extends React.Component {
  toggle() {
    console.log('CLICK', this.props);
    return this.props.toggleDrawer();
  }
  render() {
    const { isShowDrawer, current } = this.props;

    return (
      <StaticQuery
        query={navQuery}
        render={data => {
          const posts = data.allMarkdownRemark.edges;
          return (
            <div className={`c-posts-nav ${isShowDrawer ? 'is-show' : ''}`}>
              <button
                className={`c-posts-nav__toggle ${isShowDrawer ? 'is-show' : ''}`}
                type="button"
                onClick={() => {
                  this.toggle();
                }}
              >
                <span />
              </button>

              <nav
                className="c-posts-nav__nav"
                onClick={() => {
                  this.toggle();
                }}
              >
                <Link className="c-posts-nav__top" to={`/`}>
                  INDEX
                </Link>
                <div className="c-posts-nav__list">
                  {posts.map(({ node }, index) => {
                    const number = `00${index + 1}`.slice(-2);
                    const title = node.frontmatter.title || node.fields.slug;
                    const isCurrent = current && current.id === node.id;
                    return (
                      <Link
                        className={`c-posts-nav__item ${isCurrent ? 'is-current' : ''}`}
                        to={node.fields.slug}
                        key={node.fields.slug}
                      >
                        <span className="c-posts-nav__index">{number}</span>
                        <div>{title}</div>
                      </Link>
                    );
                  })}
                </div>
              </nav>
            </div>
          );
        }}
      />
    );
  }
}
export default Navigation;

export const navQuery = graphql`
  query navQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            tags
          }
        }
      }
    }
  }
`;