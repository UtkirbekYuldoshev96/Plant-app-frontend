import React, { useState } from "react";

export default function ReactUseState() {
  const [count, setCount] = useState(0);
  const [darkColor, setDarkColor] = useState(false);
  const [number, setNumber] = useState([2,3,4,56,67]);

  const [users, setUsers] = useState({
    fisrtName: "john",
    lastName: "doe",
    age: 25,
    job: "develomport",
  });

  const addPlus = () => {
    setNumber(prev => [...prev, 20]);
    setCount(count + 1);
  };

  const addMinus = () => {
    setCount(count - 1);
  };
  const reStart = () => {
    setCount(0);
  };

  const toggleSet = () => {
    setDarkColor(!darkColor);
  };

  const changeUserAdd = () => {
       setUsers((prev) => {
        console.log(prev)
        return {...prev, age: 54}
    })
  }

  return (
    <>
      <div className={darkColor === true ? "bg-dark" : "bg-light"}>
        <button
          disabled={count === 0}
          onClick={addMinus}
          className="btn btn-dark"
        >
          -
        </button>
        <button className="btn btn-dark">{count}</button>
        <button onClick={addPlus} className="btn btn-dark">
          +
        </button>
      </div>
      <button onClick={reStart} className="btn btn-dark">
        restart
      </button>
      <input type="radio" onClick={toggleSet} />

      <div className="bg-dander">
        <ul>
            <li>Familiyasi: {users.fisrtName}</li>
            <li>Ism: {users.lastName}</li>
            <li>Yoshi: {users.age}</li>
            <li>Ish: {users.job}</li>
        </ul>
        <button onClick={changeUserAdd} className="btn btn-sm btn-primary">click</button>
      </div>
    </>
  );
}
