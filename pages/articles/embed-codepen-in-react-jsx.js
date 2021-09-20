import Article from "../../components/Article";
import ArticleDiv from "../../components/ArticleDiv";
import Code from "../../components/Code";
import Codepen from "react-codepen-embed";
import styles from "../../styles/Article.module.scss";

export default function CodepenReact() {
  return (
    <Article id="2">
      <article>
        <ArticleDiv>
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
        </ArticleDiv>
        <ArticleDiv>Here's an example of the embedded codepen box:</ArticleDiv>

        <ArticleDiv>
          <Codepen
            hash="PoppvOx"
            user="clapidas"
            loader={() => <div>Loading...</div>}
          />
        </ArticleDiv>

        <ArticleDiv>
          <h2>Install Dependencies</h2>
        </ArticleDiv>

        <ArticleDiv>
          First we need to install the react-codepen-embed dependency:
        </ArticleDiv>

        <ArticleDiv>
          <Code>npm install --save react-codepen-embed</Code>
        </ArticleDiv>

        <ArticleDiv>
          <h2>Get Username and Hash</h2>
        </ArticleDiv>

        <ArticleDiv>
          Next let's hop over to Codepen and grab the username and hash
          associated with our pen. The easiest way to do this is to open your
          pen in the browser and check out the url, it should look something
          like this:
        </ArticleDiv>

        <ArticleDiv>
          <b>https://codepen.io/clapidas/pen/PoppvOx</b>
        </ArticleDiv>

        <ArticleDiv>
          The "username" is simply your username which can be seen right after
          the "codepen.io/" in the url, and the hash is the last part after the
          last slash (in this case "Poppv0x").
        </ArticleDiv>

        <ArticleDiv>
          <h2>Add Codepen Component to JSX</h2>
        </ArticleDiv>

        <ArticleDiv>
          Now we can head back over to our React project and create the embedded
          Codepen. Import the following into your react component file:
        </ArticleDiv>

        <ArticleDiv>
          <Code>import Codepen from "react-codepen-embed";</Code>
        </ArticleDiv>

        <ArticleDiv>
          Then go ahead and create the following wherever you want to create
          your embedded Codepen:
        </ArticleDiv>

        <ArticleDiv>
          <Code>
            &lt;Codepen <br />
            &nbsp; &nbsp; hash=&quot;PoppvOx&quot; <br />
            &nbsp; &nbsp; user=&quot;clapidas&quot; <br />
            &nbsp; &nbsp; loader=&#123;() =&gt;
            &lt;div&gt;Loading...&lt;/div&gt;&#125; <br />
            /&gt;
          </Code>
        </ArticleDiv>

        <ArticleDiv>
          And that's it! A simple, easy way to embed your Codepen in React JSX.
        </ArticleDiv>
      </article>
    </Article>
  );
}
