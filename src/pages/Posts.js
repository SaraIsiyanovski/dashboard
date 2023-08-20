import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useData } from "../Hooks/useData";
import { LogInContext } from "../LogInContextComponent";
import { ThemeContext } from "../ThemeContextComponent";

const Posts = () => {
  const { user } = useContext(LogInContext);
  const { id } = user;
  const url = `https://dummyjson.com/posts/user/${id}`;
  const { data, error } = useData(url);
  const { classToBe2 } = useContext(ThemeContext);
  if (!data) return null;

  return (
    <>
      <div>
        <h1>Posts</h1>
      </div>
      <div className="posts">
        {error ? (
          <p>Error</p>
        ) : (
          data?.posts.map((element) => {
            return (
              <div
                className={"posts-div" + " " + "divs" + " " + classToBe2}
                key={element.id}
              >
                <div>
                  <h3 className="title2">{element.title}</h3>
                  <p className="post-body">{element.body}</p>
                </div>
                <div className="tags">
                  {element.tags.map((tag) => {
                    return <p className="tag">{tag}</p>;
                  })}
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Posts;
