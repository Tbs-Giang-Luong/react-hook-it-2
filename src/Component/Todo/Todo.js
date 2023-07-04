/** @format */
import { useState } from "react";
import './Todo.scss'

function Todo() {
    const [todo, setTodo] = useState("");

    const [toDos, setTodos] = useState([
        { id: 1, title: "wash" },
        { id: 2, title: "playing game" },
    ]);

    const handleChangeInputToDo = (e) => {
        setTodo(e.target.value)

    }

    const handleAddTodo = () => {


        let newTodo = {
            id: Math.floor(Math.random() * 100),
            title: todo
        }

        setTodos([...toDos, newTodo])
        setTodo("")
    }

    const handleDeleteToDo = (item) => {



        let value = toDos.filter((todo, key) => todo.id !== item.id)




        setTodos(value)

    }

    return (
        <div className="main-todo">
            <div className="add-todo">
                <input type="text" value={todo} onChange={(e) => handleChangeInputToDo(e)} />
                <button type="button" onClick={() => handleAddTodo()}>Add Todo</button>
            </div>

            <div className="render-list-todo">
                {toDos &&
                    toDos.length > 0 &&
                    toDos.map((item, key) => {
                        return (
                            <div key={key} className=" render-items-todo">


                                <li className="item-todo"> {item.id}. {item.title}</li>

                                <button className="delete-todo" onClick={() => handleDeleteToDo(item)}>Delete</button>
                            </div>
                        );
                    })}
            </div>


        </div>
    );
}

export default Todo;
