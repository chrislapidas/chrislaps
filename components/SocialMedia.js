import styles from "../styles/SocialMedia.module.scss";
import React, { useState } from "react";

const SocialMedia = ({ href, src }) => {
  const [hovered, setHovered] = useState(false);
  const mouseEnter = () => setHovered(true);
  const mouseLeave = () => setHovered(false);

  return (
    <a href={href} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <img
        className={[
          styles.socialMediaIcon,
          hovered ? styles.socialMediaIconHovered : "",
        ].join(" ")}
        src={src}
      ></img>
    </a>
  );
};

export default SocialMedia;
