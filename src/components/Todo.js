import React from "react";

const Todo = ({ text, todos, todo, setTodos }) => {

    const handleDelete = id => {
        const deleteData = async () => {
          await fetch(`http://localhost:3000/todos/${id}`, {
            method: 'DELETE'
          });
          const updatedData = todos.filter(item => item.id !== id);
          setTodos(updatedData);
        };
    
        deleteData();
    }

    const handleUpdate = (id) => {
        const updateData = async () => {
          await fetch(`http://localhost:3000/todos/${id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ completed: true })
          });
          const updatedData = todos.map(item => {
            if (item.id === id) {
              return { ...item, completed: true };
            }
            return item;
          });
          setTodos(updatedData);
        };
    
        updateData();
      };

    return (
        <>
            <li className="list-group-item" style={{ border: "none" }}>
                <div className="input-group">
                    <input type="text" className={`form-control ${todo.completed ? "completed" : ""}`} value={todo.task} readOnly />
                    {todo.completed ?
                        (<button className="btn btn-outline-success" type="button" disabled>
                            <i className="fas fa-check"></i>
                        </button>)
                        :
                        (<button onClick={() => handleUpdate(todo.id)} className="btn btn-outline-success" type="button">
                            <i className="fas fa-check"></i>
                        </button>)
                    }
                    <button onClick={() => handleDelete(todo.id)} className="btn btn-outline-danger" type="button">
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </li>
        </>
    );
}

export default Todo;