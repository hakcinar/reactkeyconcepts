import { useState } from "react";
import Header from "./components/Header";
import ShowConcepts from "./components/ShowConcepts";
import Tabbutton from "./components/Tabbutton";
import { EXAMPLES } from "./data";

function App() {
  const [selectedType, setSelectedType] = useState("");
  const handleSelect = (selectedButton) => {
    setSelectedType(selectedButton);
  };
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ShowConcepts />
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <Tabbutton
              onSelect={() => handleSelect("components")}
              label="Componenets"
              isSelected={selectedType === "components"}
            ></Tabbutton>
            <Tabbutton
              onSelect={() => handleSelect("jsx")}
              label="Jsx"
              isSelected={selectedType === "jsx"}
            ></Tabbutton>
            <Tabbutton
              onSelect={() => handleSelect("props")}
              label="Props"
              isSelected={selectedType === "props"}
            ></Tabbutton>
            <Tabbutton
              onSelect={() => handleSelect("state")}
              label="State"
              isSelected={selectedType === "state"}
            ></Tabbutton>
          </menu>
          {!selectedType ? <p>Please select a topic</p> : null}
          {selectedType ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedType].title}</h3>
              <p>{EXAMPLES[selectedType].description}</p>
              <pre>
                <code>{EXAMPLES[selectedType].code}</code>
              </pre>
            </div>
          ) : null}
        </section>
      </main>
    </div>
  );
}

export default App;
