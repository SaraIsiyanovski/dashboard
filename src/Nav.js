import { Link, useNavigate } from "react-router-dom";
import { Icon1 } from "./Icon";
import {
  AiOutlineContacts,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { TbBrandProducthunt } from "react-icons/tb";
import { BsPostcard } from "react-icons/bs";
import { FcTodoList } from "react-icons/fc";
import { PiQuotes } from "react-icons/pi";
import { MdDashboard, MdOutlineContactPage } from "react-icons/md";
import { RiTodoLine } from "react-icons/ri";
import { useContext } from "react";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import { ThemeContext } from ".";
import { LogInContext } from "./LogInContextComponent";

const Nav = () => {
  const { user, setUser } = useContext(LogInContext);
  const navigate = useNavigate();

  const active = (e) => {
    const links = document.querySelectorAll(".links");
    links.forEach((link) => link.classList.remove("activeM"));
    const element = e.target;

    element.classList.add("active");
  };

  const logOut = () => {
    setUser("");
    navigate("/login");
  };

  return (
    <div className="navbar end">
      <nav>
        <div className="divv">
          {user ? (
            <div className="nav-name divv-dash">
              <img className="dash-icon" src={user?.image} />
              <h1 className="nav-dash">
                {user?.firstName} {user?.lastName}
              </h1>
            </div>
          ) : (
            <div className="nav-name divv-dash">
              <div className="dash-icon">
                <MdDashboard />
              </div>
              <h1 className="nav-dash">Dashboard</h1>
            </div>
          )}
          <ul className="nav-ul">
            <li className="li-link" onClick={(event) => active(event)}>
              <Link className="links dash-link active" to={"/dashboard"}>
                <Icon1 className="icon" name={<AiOutlineUser />} />
                <span className="nav-names">Profile</span>
              </Link>
            </li>
            <li className="li-link" onClick={(event) => active(event)}>
              <Link className="links" to={"/carts/user/:id"}>
                <Icon1 className="icon" name={<AiOutlineShoppingCart />} />
                <span className="nav-names">Carts</span>
              </Link>
            </li>

            <li className="li-link" onClick={(event) => active(event)}>
              <Link className="links" to={"/posts/user/:id"}>
                <Icon1 className="icon" name={<BsPostcard />} />
                <span className="nav-names">Posts</span>
              </Link>
            </li>
            <li className="li-link" onClick={(event) => active(event)}>
              <Link className="links" to={"/todos/user/:id"}>
                <Icon1 className="icon" name={<RiTodoLine />} />
                <span className="nav-names">To do</span>
              </Link>
            </li>
            <div className="dots-div"></div>
            <li className="li-link" onClick={(event) => active(event)}>
              <Link className="links" to={"/users"}>
                <Icon1 className="icon" name={<AiOutlineUser />} />
                <span className="nav-names">Users</span>
              </Link>
            </li>
            <li className="li-link" onClick={(event) => active(event)}>
              <Link className="links" to={"/products"}>
                <Icon1 className="icon" name={<TbBrandProducthunt />} />
                <span className="nav-names">Products</span>
              </Link>
            </li>
            <li className="li-link" onClick={(event) => active(event)}>
              <Link className="links" to={"/quotes"}>
                <Icon1 className="icon" name={<PiQuotes />} />
                <span className="nav-names">Quotes</span>
              </Link>
            </li>
          </ul>
          {user ? (
            <button
              onClick={() => logOut()}
              className="links dash-btn btn btn-link "
            >
              Log Out
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="links btn dash-btn btn-link "
            >
              Log In
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
