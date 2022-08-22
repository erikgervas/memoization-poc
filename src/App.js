import './wdyr';
import './App.css';
import {useState, memo, useMemo} from "react";

const getInitialItems = () => [
    { text: 'Item 1', price: 20 },
    { text: 'Item 2', price: 30 },
    { text: 'Item 3', price: 10 }
];

const List = memo(({ items }) => {
  return (
      <div>
      { items
          .map((item, key) =>
              <div key={key}>
                  item: {item.text}
              </div>)
      }
      </div>)
});

List.whyDidYouRender = true;

const App = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(getInitialItems(10));

    return (
      <div className="App">
        <div className="Box">
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>
                inc
            </button>
            <List items={items} />
        </div>
      </div>
  );
}

App.whyDidYouRender = true;

export default App;
