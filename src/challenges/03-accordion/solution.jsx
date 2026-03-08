import { useState } from "react";
export default function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggle = (index) => {
    setExpandedIndex((prev) => prev === index ? null : index);
  };
  return <div>
      {items.map((item, index) => <div key={index}>
          <h3>
            <button
    aria-expanded={expandedIndex === index}
    onClick={() => toggle(index)}
    style={{ width: "100%", textAlign: "left", padding: "12px", cursor: "pointer" }}
  >
              {item.title}
            </button>
          </h3>
          {expandedIndex === index && <div role="region" style={{ padding: "12px" }}>
              {item.content}
            </div>}
        </div>)}
    </div>;
}
