import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

class Link extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle} current={null}>
        <SEO title="参照リンク" lang="ja" />
        <article>
          <header className="p-article__header">
            <h1 className="p-article__title">参照リンク</h1>
          </header>
          <div className="p-article__body">
            <section className="p-document-section">
              <h2>MDN </h2>
              <p>
                FirefoxのMozillaが作っているWeb上の無料の資料。
                <br />
                Webに関連する技術が、網羅的かつ正確な内容で記載されています。
              </p>
              <a
                href="https://developer.mozilla.org/ja/docs/Web/HTML"
                target="_blank"
                rel="noopener noreferrer"
              >
                developer.mozilla.org
              </a>
            </section>
            <section className="p-document-section">
              <h2>Chat GPT </h2>
              <p>
                テキストベースのチャット型AI。
                <br />
                プログラミング・Web系の言語に特化したAIではないですが十分優秀です。簡易な内容なら間違いも少なく解答してくれます。
              </p>
              <a href="https://chat.openai.com/chat" target="_blank" rel="noopener noreferrer">
                chat.openai.com
              </a>
            </section>
            <section className="p-document-section">
              <h2>Zenn</h2>
              <p>日本発のエンジニアのための情報共有コミュニティサイト</p>
              <a href="https://zenn.dev/" target="_blank" rel="noopener noreferrer">
                zenn.dev
              </a>
            </section>
            <section className="p-document-section">
              <h2>Qiita</h2>
              <p>日本発のエンジニアのための情報共有コミュニティサイト</p>
              <a href="https://qiita.com/" target="_blank" rel="noopener noreferrer">
                qiita.com
              </a>
            </section>
          </div>
        </article>
      </Layout>
    );
  }
}

export default Link;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
