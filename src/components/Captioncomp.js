import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import styles from "../styles/captionstyle.module.css";

const CaptionComp = (props) => {
  return (
    <div className={styles.caption}>
      <AiOutlinePlus
        onClick={() => props.showHandler(true)}
        className={styles.plus}
      />
      <h4>{props.title}</h4>
    </div>
  );
};

export default CaptionComp;
