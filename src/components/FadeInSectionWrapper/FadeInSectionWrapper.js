import { useState, useEffect, useRef } from "react";
import styles from "./FadeInSectionWrapper.module.scss";

const FadeInSectionWrapper = ({
  fadeBottomToTop,
  fadeInRightSide,
  fadeInLeftSide,
  delay,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.4,
      }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`${
        !isVisible
          ? fadeBottomToTop
            ? styles.fade_bottom_to_top
            : fadeInLeftSide
            ? styles.fade_left_to_right
            : fadeInRightSide
            ? styles.fade_right_to_left
            : ""
          : isVisible && styles.fadeInVisible
      }`}
      style={isVisible ? { transitionDelay: `${delay}` } : {}}
    >
      {children}
    </div>
  );
};

export default FadeInSectionWrapper;
