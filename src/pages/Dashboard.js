import { useContext, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useData } from "../Hooks/useData";
import { LogInContext, LogInContextComponent } from "../LogInContextComponent";
import { ThemeContext } from "../ThemeContextComponent";
import { ModalWindow } from "./Modal";

const Dashboard = () => {
  const { user } = useContext(LogInContext);

  const { classToBe5 } = useContext(ThemeContext);
  const [singleUser, setSingleUser] = useState();

  const url = `https://dummyjson.com/users`;
  const { data, error } = useData(url);

  console.log(data);
  useEffect(() => {
    const id = user?.id;
    console.log(id);
    const findUser = () => data?.users.find((user) => user.id === id);
    setSingleUser(findUser);
  }, [data]);

  return (
    <div id="main" className={classToBe5}>
      <div>
        <img className="dash-img" src={singleUser?.image} />
        <h2 className="h-dash">
          {singleUser?.firstName} {singleUser?.maidenName}{" "}
          {singleUser?.lastName}
        </h2>
        <p>
          <p className="prof-p bold">Contact: </p>
          <p>
            <span className="bold">E-mail: </span>
            <span>{singleUser?.email}</span>
          </p>
        </p>
        <p></p>
        <p>
          <span className="bold">Phone: </span>
          <span>{singleUser?.phone}</span>
        </p>
      </div>
      <div>
        <p className="prof-p bold">Personal information:</p>
        <p>
          <span className="bold">Gender: </span>
          <span>{singleUser?.gender}</span>
        </p>
        <p>
          <span className="bold">Age: </span>
          <span>{singleUser?.age}</span>
        </p>
        <p>
          <span className="bold">Birthdate: </span>
          <span>{singleUser?.birthDate}</span>
        </p>
        <p className="address">
          <span className="bold">Blood group: </span>
          <span>{singleUser?.BloodGroup}</span>
        </p>
        <p className="address">
          <span className="bold">Eye color: </span>
          <span>{singleUser?.eyeColor}</span>
        </p>
        <p className="address">
          <span className="bold">Hair color: </span>
          <span>{singleUser?.hair.color}</span>
        </p>
        <p className="address">
          <span className="bold">Height: </span>
          <span>{singleUser?.height}</span>
        </p>
        <p>
          <span className="bold">University: </span>
          <span>{singleUser?.university}</span>
        </p>
        <p className="address">
          <span className="bold">Address: </span>
          <span>{singleUser?.address.address}</span>
          <span>{singleUser?.address.city}</span>
        </p>
        <p>
          <span className="bold">Username: </span>
          <span>{singleUser?.username}</span>
        </p>
      </div>
      <div>
        <p className="prof-p bold">Work information: </p>
        <p className="address">
          <span className="bold">Company address: </span>
          <span>{singleUser?.company.address.address}</span>
          <span>{singleUser?.company.address.city}</span>
        </p>
        <p>
          <span className="bold">Company name: </span>
          <span>{singleUser?.company.name}</span>
        </p>
        <p>
          <span className="bold">Department: </span>
          <span>{singleUser?.company.department}</span>
        </p>
        <p>
          <span className="bold">Title: </span>
          <span>{singleUser?.company.title}</span>
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
