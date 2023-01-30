import React from "react";

const Todo = ({ text, todos, todo, setTodos }) => {

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

    return (
        <>
            <li className="list-group-item" style={{ border: "none" }}>
                <div className="input-group">
                    <input type="text" className={`form-control ${todo.completed ? "completed" : ""}`} value={text} readOnly />
                    {todo.completed ?
                        (<button onClick={completeHandler} className="btn btn-outline-success" type="button" disabled>
                            <i className="fas fa-check"></i>
                        </button>)
                        :
                        (<button onClick={completeHandler} className="btn btn-outline-success" type="button">
                            <i className="fas fa-check"></i>
                        </button>)
                    }
                    <button onClick={deleteHandler} className="btn btn-outline-danger" type="button">
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </li>
        </>
    );
}

export default Todo;