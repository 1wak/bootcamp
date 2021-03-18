import TodoContextProvider from "./TodoContext";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const App = () => {
  return (
    <div className="App">
      <TodoContextProvider>
        <div>
          <TodoForm />
          <TodoList />
        </div>
      </TodoContextProvider>
    </div>
  );
};

export default App;
