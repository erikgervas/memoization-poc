import './wdyr';
import './App.css';

import './wdyr';
import './App.css';

import React, {memo, useCallback} from "react";

const List = memo(({ list, onRemove }) => {
  return (
      <ul>
        {list.map((item) => (
            <ListItem key={item.id} item={item} onRemove={onRemove} />
        ))}
      </ul>
  );
});

List.displayName = "List"
List.whyDidYouRender = true;

const ListItem = memo(({ item, onRemove }) => {
  return (
      <li>
        {item.name}
        <button type="button" onClick={() => onRemove(item.id)}>
          Remove
        </button>
      </li>
  );
});

ListItem.displayName = "ListItem"
ListItem.whyDidYouRender = true;

const App = () => {
    const [users, setUsers] = React.useState([
        { id: "1", name: "Mark" },
        { id: "2", name: "Jack" }
    ]);

    const [text, setText] = React.useState("");

    const handleText = (event) => {
        setText(event.target.value);
    };

    const handleAddUser = () => {
        setUsers(users.concat({ id: Math.floor(Math.random() * 100), name: text }));
    };

    const handleRemove = useCallback((id) => {
        setUsers(users.filter((user) => user.id !== id));
    }, [users]);
    return (
        <div className="App">
            <input type="text" value={text} onChange={handleText} />
            <button type="button" onClick={handleAddUser}>
                Add User
            </button>

            <List list={users} onRemove={handleRemove} />
        </div>
    );
};

App.whyDidYouRender = true;

export default App;
