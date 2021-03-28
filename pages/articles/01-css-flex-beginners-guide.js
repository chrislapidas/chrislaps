import Article from "../../components/Article";

export default function CssFlexBeginnersGuide() {
  const title = "CSS Flex Beginner's Guide";
  const date = "September 21, 2020";
  const tags = ["CSS", "Flex"];
  return (
    <Article title={title} date={date} tags={tags}>
      <article>content here</article>
    </Article>
  );
}
