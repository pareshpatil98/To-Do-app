import AppName from "./component/AppName";
import TodoApp from "./component/TodoApp";
import TodoItem1 from "./component/TodoItem1";
import TodoItem2 from "./component/TodoItem2";
import "./App.css";
function App() {
  return (
    <center class="todo-container">
      <AppName/>
        <TodoApp/>
        <TodoItem1/>
        <TodoItem2/>
    </center>
  );
}

export default App;
