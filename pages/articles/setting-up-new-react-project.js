import Article from "../../components/Article";
import ArticleImg from "../../components/ArticleImg";
import ArticleDiv from "../../components/ArticleDiv";
import styles from "../../styles/Article.module.scss";
import Code from "../../components/Code";

export default function SettingUpNewReackProject() {
  return (
    <Article id="1">
      <article>
        <ArticleDiv>
          In this article, we will create a basic React application and install
          some useful tools that most people would want in their project
          including routing, Sass, and Typescript.
        </ArticleDiv>
        <ArticleDiv>
          <h2>Create React App</h2>
        </ArticleDiv>
        <ArticleDiv>
          First let's start by running the create react app command in the
          terminal, moving into the project, and running it:
        </ArticleDiv>
        <ArticleDiv>
          <Code>
            npx create-react-app my-app
            <br />
            cd my-app
            <br />
            npm start
          </Code>
        </ArticleDiv>
        <ArticleDiv>
          Now let's open up our browser and open <b>http://localhost:3000/</b>.
          We should see a screen that looks like this:
        </ArticleDiv>
        <ArticleDiv>
          <ArticleImg src="../react-1.png" width="50%"></ArticleImg>
        </ArticleDiv>

        <ArticleDiv>
          Now that we've got our basic React app up and running, lets add some
          basic dependencies that most projects will be able to utilize. Let's
          start with Typescript:
        </ArticleDiv>

        <ArticleDiv>
          <Code>
            npm install --save typescript @types/node @types/react
            @types/react-dom
          </Code>
        </ArticleDiv>

        <ArticleDiv>And now let's add Sass:</ArticleDiv>

        <ArticleDiv>
          <Code>npm install node-sass --save</Code>
        </ArticleDiv>

        <ArticleDiv> And for one last installation, routing:</ArticleDiv>

        <ArticleDiv>
          <Code>npm install react-router-dom</Code>
        </ArticleDiv>

        <ArticleDiv>
          You're now ready to write your first React application! There are a
          nearly endless amount of ideas you can implement in React, so be
          creative and have fun!
        </ArticleDiv>
      </article>
    </Article>
  );
}
