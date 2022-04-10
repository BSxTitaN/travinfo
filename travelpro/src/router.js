import {  useLocation } from "react-router-dom";
import { useMemo } from "react";


export function useRouter() {
    const location = useLocation();
    // Return our custom router object
    // Memoize so that a new object is only returned if something changes
    return useMemo(() => {
      return {
        // For convenience add push(), replace(), pathname at top level
        pathname: location.pathname,
        // Merge params and parsed query string into single "query" object
        // so that they can be used interchangeably.
        // Example: /:topic?sort=popular -> { topic: "react", sort: "popular" }
        // Include match, location, history objects so we have
        // access to extra React Router functionality if needed.
        location,
      };
    }, [location]);
  }