import Home from './Component/Home/Home';
import Navbar from './Component/Nav/Navbar';
import TableTodo from './Component/Todo/TableTodo';
import Todo from './Component/Todo/Todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Home /> */}

        <Todo />

        {/* <TableTodo /> */}

      </header>
    </div>
  );
}

export default App;