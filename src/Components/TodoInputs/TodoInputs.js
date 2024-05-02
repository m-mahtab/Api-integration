import React, { useState, useContext } from "react";


import TodoContext from "../../context1/todo-context";

const TodoInput = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useContext(TodoContext);

  const onChangeHandler = (e) => {
    setTodo(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // {id: 111, text: 'Some text', complete: false}
    const newTodo = {
      id: Math.random(),
      text: todo,
      complete: false,
    };

    addTodo(newTodo);

    setTodo("");
  };

  return (
    <div >
      <h3>
        useCONTEXT + useREDUCER TO-DO LIST
      </h3>
      <form onSubmit={onSubmitHandler}>
        <input
        
          type="text"
          value={todo}
          placeholder="Enter a Todo..."
          onChange={onChangeHandler}
        />
        <button>ADD</button>
      </form>
    </div>
  );
};

export default TodoInput;