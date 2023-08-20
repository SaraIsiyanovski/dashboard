import { useContext, useEffect, useState } from "react";
import { useData } from "../Hooks/useData";
import { ThemeContext } from "../ThemeContextComponent";
import { ModalWindow } from "./Modal";

const Users = () => {
  const url = "https://dummyjson.com/users";
  const { data, error } = useData(url);
  const { classToBe2 } = useContext(ThemeContext);
  const [state, setState] = useState(false);
  const [active, setActive] = useState();

  const openModal = (user) => {
    setState(true);
    setActive(user);
  };

  return (
    <>
      <div>
        <h1>Users</h1>
      </div>
      <div className="products">
        {state && active && <ModalWindow setState={setState} user={active} />}
        {error ? (
          <p>Error</p>
        ) : (
          data?.users.map((user) => {
            return (
              <div
                onClick={() => openModal(user)}
                className={
                  "users-div" + "user" + " " + "divs" + " " + classToBe2
                }
                key={user.id}
              >
                <div className="user">
                  <img className="img-user" src={user.image} />
                  <div className="name-user">
                    <h3 className="title">
                      {user.firstName} {user.lastName}
                    </h3>
                    <p className="small">
                      <span>Username: </span>
                      {user.username}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Users;
