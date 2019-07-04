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
        <SEO title="2019 素材置き場" lang="ja" />
        <article>
          <header className="p-article__header">
            <h1 className="p-article__title">2019 素材置き場</h1>
          </header>
          <div className="p-article__body">
            <section className="p-document-section">
              <h1>課題提出</h1>

              <p>
                <small>2019.7.4</small>
              </p>
              <ul>
                <li>
                  <a
                    href="/samples/webdesign_2019_work_format.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    課題のフォーマット、提出方法(PDF)
                  </a>
                </li>
                <li>
                  <a href="/samples/template/x18000.zip" target="_blank" rel="noopener noreferrer">
                    提出テンプレートサンプル(ZIP)
                  </a>
                </li>
              </ul>
            </section>
            <section className="p-document-section">
              <h1>課題制作</h1>

              <p>
                <small>2019.5.29</small>
              </p>
              <a href="/samples/webdesign_2019_work.pdf" target="_blank" rel="noopener noreferrer">
                提出課題内容(PDF)
              </a>
              <h4>【参考】</h4>
              <ul>
                <li>
                  <a
                    href="https://x-ten.2018.sakairyuta.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    2018年 前期 Webデザイン - X展
                  </a>
                </li>
                <li>
                  <a
                    href="https://mp.sakairyuta.com/works/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    2018年 後期モーションプランニング
                  </a>
                </li>
              </ul>
            </section>
            <section className="p-document-section">
              <h1>アンケート</h1>
              <p>
                <small>2019.4.26</small>
              </p>
              <a
                href="https://forms.gle/jzSU6Qy1iGDEsWVq7"
                target="_blank"
                rel="noopener noreferrer"
              >
                2019 Webデザインアンケート
              </a>
            </section>
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
