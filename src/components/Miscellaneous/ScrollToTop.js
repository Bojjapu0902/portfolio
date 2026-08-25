import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * React Router preserves scroll position between route changes.
 * This resets it so navigating to a project always starts at the top.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.lenis && typeof window.lenis.scrollTo === "function") {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
