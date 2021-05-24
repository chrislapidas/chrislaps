import styles from "../styles/Code.module.scss";

const Code = ({ children }) => {
  return (
    <div className={"elevation-2 " + styles.code}>
      <code>{children}</code>
    </div>
  );
};

export default Code;
