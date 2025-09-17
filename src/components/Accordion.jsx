import "./Accordion.css";
import { useState } from "react";
import accordionData from "./data";

export default function Accordion() {
  const [selected, setSelected] = useState(null);

  function handleSelection(getSelectedId) {
    setSelected(getSelectedId === selected ? null : getSelectedId);
  }

  return (
    <div className="wrapper">
      <div className="accordion">
        {accordionData &&
          accordionData.length &&
          accordionData.map((accordionItem) => {
            return (
              <div className="accordion-item" key={accordionItem.id}>
                <h2
                  className="accordion-heading"
                  id={`accordion-heading-${accordionItem.id}`}
                >
                  <button
                    className="accordion-button"
                    id={`accordion-button-${accordionItem.id}`}
                    aria-expanded="false"
                    aria-controls={`accordion-panel-${accordionItem.id}`}
                    onClick={() => {
                      handleSelection(accordionItem.id);
                    }}
                  >
                    {accordionItem.title}
                    <span>+</span>
                  </button>
                </h2>
                {selected === accordionItem.id ? (
                  <div
                    className="accordion-content-container"
                    id={`accordion-item-${accordionItem.id}`}
                    role="region"
                    aria-labelledby={`accordion-heading-${accordionItem.id}`}
                    aria-hidden={selected ? "true" : "false"}
                  >
                    <p className="accordion-content">{accordionItem.content}</p>
                  </div>
                ) : (
                  <div hidden>No content here. Sorry!</div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}
