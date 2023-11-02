import React, { useState } from "react";

function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index) => {
    setArray(array.filter((item, i) => i !== index));
  };
  return (
    <div>
      <h2>Array State Variable</h2>
      <button type="button" class="btn btn-success" onClick={addElement}>
        Add Element
      </button>

      <ul class="list-group">
        {array.map((item, index) => (
          <div class="d-flex">
            <li class="list-group-item" key={index}>
              <div class="mr-2"> {item}</div>

              <button
                type="button"
                class="btn btn-danger"
                onClick={() => deleteElement(index)}
              >
                Delete
              </button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default ArrayStateVariable;
