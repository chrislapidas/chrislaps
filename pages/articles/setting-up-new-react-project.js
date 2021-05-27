import Article from "../../components/Article";
import ArticleImg from "../../components/ArticleImg";
import styles from "../../styles/Article.module.scss";
import Code from "../../components/Code";

export default function SettingUpNewReackProject() {
  return (
    <Article id="0">
      <article>
        <div className={styles.contentDiv}>
          In this article, we will create a basic React application and install
          some useful tools that most people would want in their project
          including routing, Sass, and Typescript.
        </div>
        <div className={styles.contentDiv}>
          <h2>Create React App</h2>
        </div>
        <div className={styles.contentDiv}>
          First let's start by running the create react app command in the
          terminal, moving into the project, and running it:
        </div>
        <div className={styles.contentDiv}>
          <Code>
            npx create-react-app my-app
            <br />
            cd my-app
            <br />
            npm start
          </Code>
        </div>
        <div className={styles.contentDiv}>
          Now let's open up our browser and open <b>http://localhost:3000/</b>.
          We should see a screen that looks like this:
        </div>
        <div className={styles.contentDiv}>
          <ArticleImg src="../react-1.png" width="50%"></ArticleImg>
        </div>

        <div className={styles.contentDiv}>
          Now that we've got our basic React app up and running, lets add some
          basic dependencies that most projects will be able to utilize. Let's
          start with Typescript:
        </div>

        <div className={styles.contentDiv}>
          <Code>
            npm install --save typescript @types/node @types/react
            @types/react-dom
          </Code>
        </div>

        <div className={styles.contentDiv}>And now let's add Sass:</div>

        <div className={styles.contentDiv}>
          <Code>npm install node-sass --save</Code>
        </div>

        <div className={styles.contentDiv}>
          And for one last installation, routing:
        </div>

        <div className={styles.contentDiv}>
          <Code>npm install react-router-dom</Code>
        </div>
      </article>
    </Article>
  );
}
