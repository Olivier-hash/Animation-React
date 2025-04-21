import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";

function App() {
  const [items, setItems] = useState(["Learn React"]);

  const addItem = () => {
    setItems([...items, `New Item ${Date.now()}`]);
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <button onClick={addItem}>Add Item</button>
      <TransitionGroup className="list">
        {items.map((item, index) => (
          <CSSTransition key={item} timeout={300} classNames="fade">
            <div className="list-item" onClick={() => removeItem(index)}>
              {item}
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default App;
