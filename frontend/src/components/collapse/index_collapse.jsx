import { useState } from "react";
import "./style_collapse.css";
import Chevron from "../chevron/index_chevron";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="title-collapse" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <Chevron direction="up" rotated={isOpen} />
      </div>
      <div className={`content-collapse ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export default Collapse;
