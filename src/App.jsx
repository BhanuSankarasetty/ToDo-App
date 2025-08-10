import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setshowFinished] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(todoString);
      setTodos(todos);
    }
  }, []);

  const saveToLS = (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const toggleFinished = () => {
    setshowFinished(!showFinished);
  };

  const handleEdit = (e, id) => {
    let t = todos.filter((i) => i.id === id);
    setTodo(t[0].todo);
    let newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
    saveToLS(newTodos);
  };

  const handleDelete = (e, id) => {
    e.stopPropagation();
    if (!id) return;
    if (todos.length === 0) return;
    const confirmed = window.confirm("Are you sure you want to delete this task?");
    if (!confirmed) return;
    let newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
    saveToLS(newTodos);
  };

  const handleAdd = () => {
    if (todo.trim().length <= 3) {
      setShowError(true);
      return;
    }
    const newTodos = [...todos, { id: uuidv4(), todo, isCompleted: false }];
    setTodos(newTodos);
    setTodo("");
    setShowError(false);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
    saveToLS(newTodos);
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
    if (e.target.value.length > 3) {
      setShowError(false);
    }
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => item.id === id);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLS(newTodos);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd();
    }
  };

  return (
    <>
      <Navbar />
      <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-[#b2f7f9] min-h-[80vh] md:w-[55%]">
        <h1 className="font-bold text-center text-2xl md:text-3xl mb-5">
          YourTasks - Scheduling makes life easier
        </h1>

        {/* Add Todo Section */}
        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className="text-xl md:2xl font-bold">Add a Todo</h2>

          <div className="flex flex-col w-full">
            <div className="flex">
              <input
                onChange={handleChange}
                value={todo}
                type="text"
                onKeyDown={handleKeyDown}
                className="flex-1 rounded-full px-5 py-1 bg-white"
                placeholder="Enter at least 4 characters..."
              />
              <button
                onClick={handleAdd}
                disabled={todo.length <= 3}
                className="bg-green-500 ml-2 rounded-full hover:bg-green-800 hover:text-[15px] disabled:bg-red-400 px-6 py-2 text-sm font-bold text-white"
              >
                Save
              </button>
            </div>

            {isAdded && (
              <p className="text-green-500 text-sm mt-1">Added</p>
            )}
            {showError && (
              <p className="text-red-500 text-sm mt-1">Not Acceptable</p>
            )}
          </div>
        </div>

        {/* Show Finished Toggle */}
        <input
          className="my-4"
          id="show"
          onChange={toggleFinished}
          type="checkbox"
          checked={showFinished}
        />
        <label className="mx-2" htmlFor="show">
          Show Accomplished
        </label>

        <div className="h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2"></div>

        {/* Todos List */}
        <h2 className="text-2xl font-bold text-center">Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && <div className="m-5">No Todos to display</div>}
          {todos.map((item) => {
            return (
              (showFinished || !item.isCompleted) && (
                <div key={item.id} className="todo flex my-3 justify-around px-3 py-2 hover:bg-[#80e6e5] transition-colors duration-300 cursor-pointer">
                  <div className="flex gap-5">
                    <input
                      name={item.id}
                      onChange={handleCheckbox}
                      type="checkbox"
                      checked={item.isCompleted}
                    />
                    <div className={item.isCompleted ? "line-through" : ""}>
                      {item.todo}
                    </div>
                  </div>
                  <div className="buttons flex h-full">
                    <button
                      onClick={(e) => handleEdit(e, item.id)}
                      className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={(e) => handleDelete(e, item.id)}
                      className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
                    >
                      <AiFillDelete />
                    </button>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
