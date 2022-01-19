import React from "react";
import { AiOutlineMinus } from "react-icons/ai";
import styles from "../styles/compstyle.module.css";

//This is component for the tab that opens on clicking on "+" in homePage

const ContentComp = (props) => {
  return (
    <section className={styles.comp}>
      <div className={styles.caption}>
        <AiOutlineMinus
          onClick={() => props.closeHandler(false)}
          className={styles.icon}
        />
        <h4>{props.title}</h4>
      </div>
      <div className={styles.para}>
        <p>
          Several windows are stacked on each other.All of them are "shaded" ,
          so only their captions are visible.If one of them is clicked,to make
          it active, it is "unshaded" or "maximized". Other windows in accordian
          are displaced around top or bottom edge.
        </p>

        <button>Learn more</button>
      </div>
    </section>
  );
};

export default ContentComp;
