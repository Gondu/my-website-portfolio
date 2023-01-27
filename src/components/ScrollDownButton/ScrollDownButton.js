import styles from "./ScrollDownButton.module.scss";
import { useState, useEffect } from "react";

const ScrollDownButton = (props) => {
	const [scrolledTop, setScrolledTop] = useState(true);
	useEffect(() => {
  	console.log("scrolledTop0", scrolledTop);
		// let lastScrollY = window.pageYOffset;
		let ticking = false;
		console.log("initial ticking false");

		const updateScroll = () => {
			const currentScrollY = window.pageYOffset;
			if (currentScrollY > 0) {
				setScrolledTop(false);
				console.log("not top");
			} else {
				setScrolledTop(true);
				console.log("top");
			}
			console.log("ticking false");
			ticking = false;
		}

		const onScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(updateScroll);
				console.log("ticking true");
				ticking = true;
			}
		};

		// This eventlistener onScroll gets called every time theres a scroll event firing, so when the document view has been scrolled.
		window.addEventListener("scroll", onScroll);
  	console.log("scrolledTop", scrolledTop);
		return () => window.removeEventListener("scroll", onScroll);
	}, [scrolledTop]);

  return (
    <div className={styles.scroll_down} style={scrolledTop && !props.burgerNavIsOpen ? {display: "flex"} : {display: "none"}}>
      <div className={styles.scroll_down__chevron}></div>
      <div className={styles.scroll_down__chevron}></div>
      <div className={styles.scroll_down__chevron}></div>
    </div>
  );
};

export default ScrollDownButton;
