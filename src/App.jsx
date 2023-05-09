// import * as React from "react";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    const item = {
      id: Math.floor(Math.random()*1000),
      value: newItem,
    };
    setItems((oldItems) => [...oldItems, item]);
    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray)
  }

  //
  return (
    <div className="forms">
      <React.Fragment>
        <div className="form">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 0, width: "40ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              placeholder="Name"
              variant="outlined"
              className="input"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />
          </Box>
          <Button
            className="btn-adding"
            variant="contained"
            disableElevation
            onClick={() => addItem()}
          >
            add
          </Button>
        </div>

        {/* lists */}

        <ul>
          {items.map((item) => {
            return (
              <li key={item.id}>
                {item.value}
                <Button variant="outlined" color="error" onClick={() => deleteItem(item.id)}>
                  Delete
                </Button>
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    </div>
  );
}

export default App;
