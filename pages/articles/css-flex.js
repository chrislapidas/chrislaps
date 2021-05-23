import Article from "../../components/Article";
import Codepen from "react-codepen-embed";

export default function CssFlexBeginnersGuide() {
  return (
    <Article id="0">
      <article>content here</article>

      <Codepen
        hash="PoppvOx"
        user="clapidas"
        loader={() => <div>Loading...</div>}
      />
    </Article>
  );
}
