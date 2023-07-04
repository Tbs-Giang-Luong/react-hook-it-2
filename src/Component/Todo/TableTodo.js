/** @format */
import { useEffect, useState } from "react";
import "./Todo.scss";
import axios from "axios";
function TableTodo() {
  const [valueUser, setValueUser] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const handleValue = () => {
      try {
        setTimeout(async () => {
          let res = await axios.get(
            `https://jsonplaceholder.typicode.com/users`
          );
          console.log(res);
          setValueUser(res.data);
          setLoading(false);
          console.log(isLoading);
        }, 1500);
      } catch (error) {
        console.log(error);
      }
    };

    handleValue();
  }, []);

  return (
    <div className="main-table-todo">
      <table>
        <thead>
          <td>Company</td>

          <td>Contact</td>
          <td>Country</td>
        </thead>

        <tbody>
          {!isLoading && valueUser && valueUser.length > 0 ? (
            valueUser.map((item, key) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                </tr>
              );
            })
          ) : (
            <span>Loading ....</span>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TableTodo;
