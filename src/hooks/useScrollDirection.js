import {useState, useEffect} from "react";

const useScrollDirection = () => {
    const [scrollDir, setScrollDir] = useState("scrolled top");

    useEffect(() => {
      // You can increase the threshold if you don't want to immediately calculate a new page offset
      const threshold = 0;
      let lastScrollY = window.pageYOffset;
      let ticking = false;

      const updateScrollDir = () => {
        const scrollY = window.pageYOffset;
        if (Math.abs(scrollY - lastScrollY) < threshold) {
          ticking = false;
          return;
        }
        setScrollDir(scrollY > lastScrollY ? "scrolling down" : scrollY === 0 ? "scrolled top" : "scrolling up");
        lastScrollY = scrollY > 0 ? scrollY : 0;
        ticking = false;
      };
    
      const onScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(updateScrollDir);
          ticking = true;
        }
      };
    
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDir]);
    
    return [scrollDir];
  }

  export default useScrollDirection;