import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'

function useKeyPress(targetKey) {
  return false;
}
export default function KeyPressDemo() {
  const isEnterPressed = useKeyPress("Enter");
  const isEscapePressed = useKeyPress("Escape");
  return <div>
      <h2>useKeyPress Demo</h2>
      <p>Press Enter or Escape</p>
      <p>Enter: {isEnterPressed ? "Pressed" : "Released"}</p>
      <p>Escape: {isEscapePressed ? "Pressed" : "Released"}</p>
    </div>;
}
export { useKeyPress };
