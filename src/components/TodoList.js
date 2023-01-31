import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filterTodos }) => {
    return (
        <>
            <h1 className="text-center mt-5">TodoList Component</h1>
            <ul class="list-group list-group-flush w-50 m-auto">
                {filterTodos.map(todo => (
                    <Todo setTodos={setTodos} todo={todo} todos={todos} text={todo} key={todo.id} />
                ))}

            </ul>
        </>
    )
}

export default TodoList;