import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import ThemeContext from '../context/ThemeContext';

class Navigation extends React.Component {
  toggle() {
    return this.props.toggleDrawer();
  }
  render() {
    const { current } = this.props;
    return (
      <ThemeContext.Consumer>
        {(context) => (
          <StaticQuery
            query={navQuery}
            render={(data) => {
              const posts = data.allMarkdownRemark.edges;
              const { isShowDrawer, toggleDrawer } = context;
              return (
                <div className={`c-posts-nav ${isShowDrawer ? 'is-show' : ''}`}>
                  <button
                    className={`c-posts-nav__toggle ${isShowDrawer ? 'is-show' : ''}`}
                    type="button"
                    onClick={() => {
                      toggleDrawer();
                    }}
                  >
                    <span />
                  </button>

                  <nav className="c-posts-nav__nav">
                    <Link className="c-posts-nav__top" to={`/`}>
                      INDEX
                    </Link>
                    <div className="c-posts-nav__list">
                      {posts.map(({ node }, index) => {
                        const number = `00${index + 1}`.slice(-2);
                        const title = node.frontmatter.title || node.fields.slug;
                        const isCurrent = current && current.id === node.id;
                        //サンプルファイル
                        const samplesListBlock = ((samples) => {
                          if (!samples || samples.length === 0) return;
                          const _samples = samples.filter((ex) => {
                            return ex.file && ex.title;
                          });
                          if (_samples.length === 0) return;
                          return <i className="c-posts-nav__exercise-icon">EX</i>;
                        })(node.frontmatter.samples);
                        // console.log(node.frontmatter);
                        return (
                          <Link
                            className={`c-posts-nav__item ${isCurrent ? 'is-current' : ''}`}
                            to={node.fields.slug}
                            key={node.fields.slug}
                          >
                            <span className="c-posts-nav__index">{number}</span>
                            <div>{title}</div>
                            {samplesListBlock}
                          </Link>
                        );
                      })}
                    </div>
                    {/* <Link className="c-posts-nav__static-page" to={`/documents/`}>
                      2019 素材置き場
                    </Link> */}
                  </nav>
                </div>
              );
            }}
          />
        )}
      </ThemeContext.Consumer>
    );
  }
}
export default Navigation;

export const navQuery = graphql`
  query navQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            tags
            samples {
              file
              title
            }
          }
        }
      }
    }
  }
`;
