/** @format */
import { useState } from "react";
import "./Todo.scss";

function Todo() {
  const [todo, setTodo] = useState("");

  const [toDos, setTodos] = useState([
    { id: 1, title: "wash" },
    { id: 2, title: "playing game" },
  ]);

  const [isEdit, setIsEdit] = useState(true);
  const [valueInputEdit, setValueInputEdit] = useState("");

  const handleChangeInputToDo = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = () => {
    let newTodo = {
      id: Math.floor(Math.random() * 100),
      title: todo,
    };

    setTodos([...toDos, newTodo]);
    setTodo("");
  };

  const checkArrayEmpty = Array.isArray(toDos) && toDos.length > 0;
  //   console.log(checkArrayEmpty);
  const handleEditTodo = (item) => {
    setIsEdit(!isEdit);
    let checkTodo = toDos.filter((todo) => todo.id === item.id);

    let todoEdit = item.title;
    setValueInputEdit(todoEdit);
    if (checkTodo && isEdit === false) {
      let todosCopy = [...toDos];
      console.log(todosCopy);

      let handleToDo = todosCopy.forEach((todo) => todo);
      handleToDo.title = item.title

      setTodos([...todosCopy], handleToDo);
    } else {
      console.log("error");
    }
  };

  const handleDeleteToDo = (item) => {
    let value = toDos.filter((todo, key) => todo.id !== item.id);

    setTodos(value);
  };

  const handleChangeToDoEdit = (e) => {
    setValueInputEdit(e.target.value);
  };

  return (
    <div className="main-todo">
      <div className="add-todo">
        <input
          type="text"
          value={todo}
          onChange={(e) => handleChangeInputToDo(e)}
        />
        <button type="button" onClick={() => handleAddTodo()}>
          Add Todo
        </button>
      </div>

      <div className="render-list-todo">
        {toDos &&
          toDos.length > 0 &&
          toDos.map((item, key) => {
            return (
              <div key={key} className=" render-items-todo">
                <li className="item-todo">
                  {" "}
                  {toDos && checkArrayEmpty && !isEdit ? (
                    <input
                      type=" text"
                      value={valueInputEdit}
                      onChange={(e) => handleChangeToDoEdit(e)}
                    />
                  ) : (
                    <span>
                      {item.id} .{item.title}
                    </span>
                  )}
                </li>
                <button
                  className="edit-todo"
                  onClick={() => handleEditTodo(item)}
                >
                  {toDos && isEdit ? "Edit" : "Save"}
                </button>
                <button
                  className="delete-todo"
                  onClick={() => handleDeleteToDo(item)}
                >
                  Delete
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Todo;
