import styles from "./ScrollDownButton.module.scss";
import { useEffect, useState } from "react";

const ScrollDownButton = (props) => {
  const [homeGlitchWritingFinished, setHomeGlitchWritingFinished] =
    useState(false);

  useEffect(() => {
    setTimeout(() => setHomeGlitchWritingFinished(true), 6500);
  }, []);

  return (
    <>
      {homeGlitchWritingFinished && (
        <div
          className={styles.scroll_down}
          style={
            props.scrollDirection === "scrolled top" && !props.burgerNavIsOpen
              ? { display: "flex" }
              : { display: "none" }
          }
        >
          <div className={styles.scroll_down__chevron}></div>
          <div className={styles.scroll_down__chevron}></div>
          <div className={styles.scroll_down__chevron}></div>
        </div>
      )}
    </>
  );
};

export default ScrollDownButton;
