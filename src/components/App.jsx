import React, { useState } from "react";
import List from "./List";
var listItems = [];
function App() {
  const [item, setItem] = useState("");
  const [listItem, setListItem] = useState("");

  function handleChange(event) {
    // listItems.push(item);
    setItem(event.target.value);
  }
  function handleClick(event) {
    setListItem(item);
    listItems.push(item);
    console.log(listItems);
    event.preventDefault();
  }
  function updateList(item) {
    console.log(item);
    return <List itemData={item} />;
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <form onSubmit={handleClick}>
          <input type="text" name="listItem" onChange={handleChange} />
          <button type="submit">
            <span>Add</span>
          </button>
        </form>
      </div>
      <div>{listItems.map(updateList)}</div>
    </div>
  );
}

export default App;
