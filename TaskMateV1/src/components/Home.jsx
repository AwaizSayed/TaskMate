import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./Home.module.css";

function Home() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState();
  const [activeTab, setActiveTab] = useState("all");
  const listRef = useRef(null);
  // const [changeIt, setChangeIt] = useState(true);

  // useEffect(() => {
  //   if (listRef.current) {
  //     listRef.current.scrollTop = listRef.current.scrollHeight;
  //   }
  // }, [todos]);

  async function getData() {
    try {
      const data = await axios.get(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL}/todo/get-todos`,
      );
      if (data) {
        setTodos(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, []); //changeIt

  const handelAdd = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL}/todo/add-todo`,
        {
          task: task,
        },
      );
      if (data.data) {
        getData();
        // location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const data = await axios.delete(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL}/todo/delete-todo/` +
          id,
      );
      if (data.data) {
        getData();
        // location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = async (id) => {
    try {
      const data = await axios.put(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL}/todo/update-todo/` +
          id,
      );
      if (data.data) {
        // console.log(changeIt);
        // changeIt ? setChangeIt(false) : setChangeIt(true);
        // console.log(changeIt);
        // checkIt.checked = checkIt.checked ? false : true;
        getData();

        // location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="bg-white">
      <div className="container  h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="shadow rounded bg-white">
              <div className="card-body p-5">
                <form className="d-flex justify-content-center align-items-center mb-4">
                  <div data-mdb-input-init className="form-outline flex-fill">
                    <input
                      type="text"
                      id="form2"
                      className="form-control"
                      placeholder="New Task..."
                      onChange={(e) => setTask(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-info ms-2"
                    onClick={handelAdd}
                  >
                    Add
                  </button>
                </form>

                {/* Tabs nav */}
                <ul className="nav nav-tabs mb-4 pb-2" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${
                        activeTab === "all" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("all")}
                    >
                      All
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${
                        activeTab === "active" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("active")}
                    >
                      Active
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${
                        activeTab === "completed" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("completed")}
                    >
                      Completed
                    </button>
                  </li>
                </ul>

                {/*<!-- Tabs navs -->

                <!-- Tabs content -->*/}
                {
                  <div
                    ref={listRef}
                    style={{
                      maxHeight: "230px",
                      overflowY: "auto",
                    }}
                    className="tab-content"
                    id="ex1-content"
                  >
                    <div
                      className="tab-pane fade show active"
                      id="ex1-tabs-1"
                      role="tabpanel"
                      aria-labelledby="ex1-tab-1"
                    >
                      <ul className="list-group mb-0">
                        {activeTab === "active" &&
                          (todos.filter((t) => !t.done).length > 0 ? (
                            todos
                              .filter((t) => !t.done)
                              .map((todo) => (
                                <li
                                  className="list-group-item d-flex align-items-center mb-2 fs-5 rounded border border-black colorOfBG"
                                  key={todo._id}
                                >
                                  <button
                                    type="button"
                                    className="btn btn-danger me-2"
                                    onClick={() => handleDelete(todo._id)}
                                  >
                                    Delete
                                  </button>
                                  {/*Work going on here*/}
                                  <input
                                    className="form-check-input me-2"
                                    type="checkbox"
                                    checked={todo.done}
                                    onChange={() => handleChange(todo._id)}
                                  />
                                  {todo.task}
                                </li>
                              ))
                          ) : (
                            <h2>No Active Tasks</h2>
                          ))}
                        {activeTab === "completed" &&
                          (todos.filter((t) => t.done).length > 0 ? (
                            todos
                              .filter((t) => t.done)
                              .map((todo) => (
                                <li
                                  className="list-group-item d-flex align-items-center mb-2 fs-5 rounded border border-black colorOfBG"
                                  key={todo._id}
                                >
                                  <button
                                    type="button"
                                    className="btn btn-danger me-2"
                                    onClick={() => handleDelete(todo._id)}
                                  >
                                    Delete
                                  </button>
                                  <input
                                    className="form-check-input me-2"
                                    type="checkbox"
                                    checked={todo.done}
                                    onChange={() => handleChange(todo._id)}
                                  />
                                  {todo.task}
                                </li>
                              ))
                          ) : (
                            <h2>No Completed Tasks</h2>
                          ))}
                        {activeTab === "all" &&
                          (todos.length ? (
                            todos.map((todo) => (
                              <li
                                className="list-group-item d-flex align-items-center mb-2 fs-5 rounded border border-black colorOfBG"
                                key={todo._id}
                              >
                                <button
                                  type="button"
                                  className="btn btn-danger me-2"
                                  onClick={() => {
                                    handleDelete(todo._id);
                                  }}
                                >
                                  Delete
                                </button>
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  checked={todo.done}
                                  onChange={() => handleChange(todo._id)}
                                />
                                {/*todo.done ? (
                                  <input
                                    className="form-check-input me-2"
                                    type="checkbox"
                                    value=""
                                    aria-label="..."
                                    checked
                                    onChange={() => handleChange(todo._id)}
                                  />
                                ) : (
                                  <input
                                    className="form-check-input me-2"
                                    type="checkbox"
                                    value=""
                                    aria-label="..."
                                    onChange={() => handleChange(todo._id)}
                                  />
                                )*/}

                                {/* checked */}
                                {todo.task}
                              </li>
                            ))
                          ) : (
                            <h2>No Tasks to display</h2>
                          ))}
                      </ul>
                    </div>
                  </div>
                }
                {/* <div>
                  {todos.length === 0 ? (
                    <h2>No records to display</h2>
                  ) : (
                    todos.map((todo) => <div key={++key}>{todo.task}</div>)
                  )}
                </div> */}
                {/*<!-- Tabs content -->*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

{
  /* <>
      <h2>TaskMate</h2>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button type="button" onClick={handelAdd}>
        Submit
      </button>

      <div>
        {todos.length === 0 ? (
          <h2>No records to display</h2>
        ) : (
          todos.map((todo) => <div>{todo.task}</div>)
        )}
      </div>
    </>   
    */
}

{
  /*<div className="tab-content" id="ex1-content">
                  <div
                    className="tab-pane fade show active"
                    id="ex1-tabs-1"
                    role="tabpanel"
                    aria-labelledby="ex1-tab-1"
                  >
                    <ul className="list-group mb-0">
                      <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded colorOfBG">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          aria-label="..."
                        />
                        checked
                        <s>Cras justo odio</s>
                      </li>
                      <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded colorOfBG">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          aria-label="..."
                        />
                        checked
                        <s>Dapibus ac facilisis in</s>
                      </li>
                      <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded colorOfBG">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          aria-label="..."
                        />
                        Morbi leo risus
                      </li>
                      <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded colorOfBG">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          aria-label="..."
                        />
                        Porta ac consectetur ac
                      </li>
                      <li className="list-group-item d-flex align-items-center border-0 mb-0 rounded colorOfBG">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          aria-label="..."
                        />
                        Vestibulum at eros
                      </li>
                    </ul>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="ex1-tabs-2"
                    role="tabpanel"
                    aria-labelledby="ex1-tab-2"
                  >
                    <ul className="list-group mb-0">
                      <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded colorOfBG">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          aria-label="..."
                        />
                        Morbi leo risus
                      </li>
                      <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded colorOfBG">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          aria-label="..."
                        />
                        Porta ac consectetur ac
                      </li>
                      <li className="list-group-item d-flex align-items-center border-0 mb-0 rounded colorOfBG">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          aria-label="..."
                        />
                        Vestibulum at eros
                      </li>
                    </ul>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="ex1-tabs-3"
                    role="tabpanel"
                    aria-labelledby="ex1-tab-3"
                  >
                    <ul className="list-group mb-0">
                      <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded colorOfBG">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          aria-label="..."
                        />
                        checked
                        <s>Cras justo odio</s>
                      </li>
                      <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded colorOfBG">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          aria-label="..."
                        />
                        checked
                        <s>Dapibus ac facilisis in</s>
                      </li>
                    </ul>
                  </div>
                </div>
                */
}
