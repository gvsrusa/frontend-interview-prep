import { useState } from "react";
const positionStyles = {
  top: { bottom: "100%", left: "50%", transform: "translateX(-50%)", marginBottom: "8px" },
  bottom: { top: "100%", left: "50%", transform: "translateX(-50%)", marginTop: "8px" },
  left: { right: "100%", top: "50%", transform: "translateY(-50%)", marginRight: "8px" },
  right: { left: "100%", top: "50%", transform: "translateY(-50%)", marginLeft: "8px" }
};
export default function Tooltip({ text, position = "top", children }) {
  const [visible, setVisible] = useState(false);
  return <div
    style={{ position: "relative", display: "inline-block" }}
    onMouseEnter={() => setVisible(true)}
    onMouseLeave={() => setVisible(false)}
    onFocus={() => setVisible(true)}
    onBlur={() => setVisible(false)}
  >
      {children}
      {visible && <div
    role="tooltip"
    style={{
      position: "absolute",
      ...positionStyles[position],
      padding: "6px 12px",
      backgroundColor: "#1f2937",
      color: "white",
      borderRadius: "4px",
      fontSize: "14px",
      whiteSpace: "nowrap",
      pointerEvents: "none",
      zIndex: 1e3
    }}
  >
          {text}
        </div>}
    </div>;
}
