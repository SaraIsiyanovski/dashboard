import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useData } from "../Hooks/useData";
import { LogInContext } from "../LogInContextComponent";
import { ThemeContext } from "../ThemeContextComponent";

const ToDos = () => {
  const { user } = useContext(LogInContext);
  const { id } = user;
  const url = `https://dummyjson.com/todos/user/${id}`;
  const { data, error } = useData(url);
  const { classToBe2 } = useContext(ThemeContext);
  return (
    <>
      <div>
        <h1>To Do</h1>
      </div>
      <div className="posts">
        {error ? (
          <p>Error</p>
        ) : (
          data?.todos.map((element) => {
            return (
              <div
                className={"tod" + " " + "todos" + "divs" + " " + classToBe2}
                key={element.id}
              >
                <div className="todo">
                  {element.completed ? (
                    <div className="completed dot"></div>
                  ) : (
                    <div className="dot"></div>
                  )}
                  <p className="post-body">{element.todo}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default ToDos;
