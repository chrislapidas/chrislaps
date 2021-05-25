import Article from "../../components/Article";
import styles from "../../styles/Article.module.scss";
import Code from "../../components/Code";

export default function SettingUpNewReackProject() {
  return (
    <Article id="0">
      <article>
        <div className={styles.contentDiv}>content here</div>
        <div className={styles.contentDiv}>
          <Code>import Codepen from "react-codepen-embed";</Code>
        </div>
      </article>
    </Article>
  );
}
