import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'

function useMediaQuery(query) {
  return false;
}
export default function MediaQueryDemo() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  return <div>
      <h2>useMediaQuery Demo</h2>
      <p>Mobile viewport: {isMobile ? "Yes" : "No"}</p>
      <p>Prefers dark mode: {prefersDark ? "Yes" : "No"}</p>
    </div>;
}
export { useMediaQuery };
