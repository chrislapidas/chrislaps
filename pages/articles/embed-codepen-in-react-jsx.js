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
          <h2>Install Dependencies</h2>
        </div>

        <div className={styles.contentDiv}>
          First we need to install the react-codepen-embed dependency:
        </div>

        <div className={styles.contentDiv}>
          <Code>npm install --save react-codepen-embed</Code>
        </div>

        <div className={styles.contentDiv}>
          <h2>Get Username and Hash</h2>
        </div>

        <div className={styles.contentDiv}>
          Next let's hop over to Codepen and grab the username and hash
          associated with our pen. The easiest way to do this is to open your
          pen in the browser and check out the url, it should look something
          like this:
        </div>

        <div className={styles.contentDiv}>
          <b>https://codepen.io/clapidas/pen/PoppvOx</b>
        </div>

        <div className={styles.contentDiv}>
          The "username" is simply your username which can be seen right after
          the "codepen.io/" in the url, and the hash is the last part after the
          last slash (in this case "Poppv0x").
        </div>

        <div className={styles.contentDiv}>
          <h2>Add Codepen Component to JSX</h2>
        </div>

        <div className={styles.contentDiv}>
          Now we can head back over to our React project and create the embedded
          Codepen. Import the following into your react component file:
        </div>

        <div className={styles.contentDiv}>
          <Code>import Codepen from "react-codepen-embed";</Code>
        </div>

        <div className={styles.contentDiv}>
          Then go ahead and create the following wherever you want to create
          your embedded Codepen:
        </div>

        <div className={styles.contentDiv}>
          <Code>
            &lt;Codepen <br />
            &nbsp; &nbsp; hash=&quot;PoppvOx&quot; <br />
            &nbsp; &nbsp; user=&quot;clapidas&quot; <br />
            &nbsp; &nbsp; loader=&#123;() =&gt;
            &lt;div&gt;Loading...&lt;/div&gt;&#125; <br />
            /&gt;
          </Code>
        </div>

        <div className={styles.contentDiv}>
          And that's it! A simple, easy way to embed your Codepen in React JSX.
        </div>
      </article>
    </Article>
  );
}
