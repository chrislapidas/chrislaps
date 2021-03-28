const Article = ({ title, date, tags, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h4>{date}</h4>
      <div>{tags}</div>
      <div>{children}</div>
    </div>
  );
};

export default Article;
