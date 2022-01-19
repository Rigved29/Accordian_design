import React, { useState } from "react";
import styles from "../styles/homestyle.module.css";
import ContentComp from "../components/Contentcomp";
import CaptionComp from "../components/Captioncomp";

const Home = () => {
  const [showone, setShowOne] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const [showThree, setShowThree] = useState(false);
  const [showFour, setShowFour] = useState(false); //using useState() for opening and closing of ContentComp

  return (
    <>
      <main className={styles.homepage}>
        <section className={styles.section1}>
          <h2>Several windows stacked on each other</h2>
          <p>
            The accordian is a graphical control element comprising a vertically
            stacked list of items,such as labels or thumbnails.
          </p>
        </section>
        <section className={styles.section2}>
          {!showone ? (
            <CaptionComp showHandler={setShowOne} title="Why this term?" />
          ) : (
            <ContentComp closeHandler={setShowOne} title="Why this term?" />
          )}
          {!showTwo ? (
            <CaptionComp
              showHandler={setShowTwo}
              title="When to use accordian Components?"
            />
          ) : (
            <ContentComp
              closeHandler={setShowTwo}
              title="When to use accordian Components?"
            />
          )}
          {!showThree ? (
            <CaptionComp
              showHandler={setShowThree}
              title="How can it be defined?"
            />
          ) : (
            <ContentComp
              closeHandler={setShowThree}
              title="How can it be defined?"
            />
          )}
          {!showFour ? (
            <CaptionComp
              showHandler={setShowFour}
              title="When to use accordian components?"
            />
          ) : (
            <ContentComp
              closeHandler={setShowFour}
              title="When to use accordian components?"
            />
          )}
        </section>
      </main>
    </>
  );
};

export default Home;
