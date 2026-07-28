import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Ensures every route change (e.g. clicking any "Contact" link/button)
 * starts at the top of the new page instead of preserving the previous
 * scroll position, which could otherwise land the user near the bottom
 * of the target page.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}
