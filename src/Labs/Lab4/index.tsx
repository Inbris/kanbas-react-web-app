import PassingFunctions from "./PassingFunctions";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ChildStateComponent from "./ChildStateComponent";
import ReduxExamples from "./ReduxExamples";
import React, { useState } from 'react';
import { useSelector } from "react-redux";

interface MyComponentProps {
    counter: number;
    setCounter: (counter: number) => void;
}

export default function Lab4() {
    const { todos } = useSelector((state: any) => state.todosReducer);
    const [counter, setCounter] = useState(0);

  function sayHello() {
    alert("Hello");
  }
  return (
    <div id="wd-passing-functions">
        
      <h2>Lab 4</h2>
      ...
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions theFunction={sayHello} />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <ObjectStateVariable />
      <DateStateVariable />
      <ArrayStateVariable />
      <ParentStateComponent />
      <ChildStateComponent counter={counter} setCounter={setCounter}/>
      <ReduxExamples/>
 
      <ul className="list-group">
        {todos.map((todo: any) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
      <hr />

    </div>
  );
}
