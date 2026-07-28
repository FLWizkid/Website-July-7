import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Ensures every route change (e.g. clicking any "Contact" link/button)
 * starts at the top of the new page instead of preserving the previous
 * scroll position, which could otherwise land the user near the bottom
 * of the target page.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Honor anchor links (e.g. /catalog#xr-modules): scroll to the target
      // element once it has rendered.
      const el = document.getElementById(hash.slice(1));
      if (el) {
        // "instant" bypasses the global CSS smooth-scroll so deep links land
        // on the section immediately.
        el.scrollIntoView({ behavior: "instant" as ScrollBehavior, block: "start" });
        return;
      }
    }
    // "instant" (not "auto") is required: the site sets `scroll-behavior:
    // smooth` globally, and "auto" would inherit that, causing a slow visible
    // glide to the top after every page change.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return null;
}
