import React from "react";

const Form = ({ setInputText, inputText, todos, setTodos, setStatus }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.random() * 1000 }
        ]);
        setInputText('');
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        <>
            <div className="card w-50 m-auto" style={{ border: "none" }}>
                <div className="card-body">
                    <div className="row">
                        <div className="col-9">
                            <form className="d-flex justify-content-around">
                                <div className="input-group mb-3 m-auto">
                                    <input value={inputText} onChange={inputTextHandler} type="text" className="form-control" placeholder="Add a Todo List" aria-label="Add a Todo List" aria-describedby="button-addon2" required/>
                                    <button onClick={submitTodoHandler} className="btn btn-outline-primary" type="submit" id="button-addon2">Add Todo</button>
                                </div>
                            </form>
                        </div>
                        <div className="col">
                            <div>
                                <select onChange={statusHandler} className="form-select" aria-label="Filter" name="todos">
                                    <option value="all">All</option>
                                    <option value="completed">Completed</option>
                                    <option value="pending">Pending</option>
                                </select>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}

export default Form;