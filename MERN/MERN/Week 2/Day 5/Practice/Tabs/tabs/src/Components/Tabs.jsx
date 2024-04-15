import React from "react";
import { useState } from "react";
const Tabs = (props) => {
  const { tabs } = props;
  const [content, setContent] = useState(tabs[0].content);
  const clickedTab = (index) => setContent(tabs[index].content);
  return (
    <div>
      <nav>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          {tabs.map((t, i) => (
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
                onClick={() => clickedTab(i)}
              >
                {t.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <p>{content}</p>
    </div>
  );
};

export default Tabs;
