import Article from "../../components/Article";
import Code from "../../components/Code";
import Codepen from "react-codepen-embed";
import styles from "../../styles/Article.module.scss";

export default function CodepenReact() {
  return (
    <Article id="1">
      <article>
        <div className={styles.contentDiv}>
          <a href="https://codepen.io/"> Codepen</a> is a really handy tool for
          quickly testing out HTML, CSS, and JS concepts while being able to
          share them with others easily. They provide easy ways to embed a small
          codepen container into your HTML to show your work in a isolated
          interactive development environment, but they don't have a quick easy
          way to embed within React's version of HTML - JSX. Here we're going to
          use the{" "}
          <a href="https://www.npmjs.com/package/react-codepen-embed">
            react-codepen-embed
          </a>{" "}
          library to quickly and easily embed our codepen in JSX.
        </div>
        <div className={styles.contentDiv}>
          Here's an example of the embedded codepen box:
        </div>

        <div className={styles.contentDiv}>
          <Codepen
            hash="PoppvOx"
            user="clapidas"
            loader={() => <div>Loading...</div>}
          />
        </div>

        <div className={styles.contentDiv}>
          First we need to install the react-codepen-embed dependency:
        </div>

        <div className={styles.contentDiv}>
          <Code>
            <code>npm install --save react-codepen-embed</code>
          </Code>
        </div>
      </article>
    </Article>
  );
}
