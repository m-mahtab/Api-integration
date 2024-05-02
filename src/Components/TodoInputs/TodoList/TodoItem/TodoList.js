import React, { useContext } from "react";
import TodoContext from "../../../../context1/todo-context";




import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos, toggleTodo, deleteTodo } = useContext(TodoContext);
  return (
    <div>
      <h3>TO-DOS</h3>
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            complete={todo.complete}
            clickToToggle={() => toggleTodo(todo.id)}
            clickToDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;