import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";
 

function App() {
  const [items, setItems] = useState([{ id: 1, text: "Learn React" }]);

  const addItem = () => {
    const newItem = {
      id: Date.now(), // unique and stable
      text: `New Item ${Date.now()}`
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <button onClick={addItem}>Add Item</button>
      <TransitionGroup className="list">
        {items.map((item) => (
          <CSSTransition key={item.id} timeout={300} classNames="fade">
            <div className="list-item" onClick={() => removeItem(item.id)}>
              {item.text}
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default App;
