import styles from "./ScrollDownButton.module.scss";

const ScrollDownButton = (props) => {
  return (
    <div className={styles.scroll_down} style={props.scrollDirection === "scrolled top" && !props.burgerNavIsOpen ? {display: "flex"} : {display: "none"}}>
      <div className={styles.scroll_down__chevron}></div>
      <div className={styles.scroll_down__chevron}></div>
      <div className={styles.scroll_down__chevron}></div>
    </div>
  );
};

export default ScrollDownButton;
