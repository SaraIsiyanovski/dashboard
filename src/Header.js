import Icon, { Icon2 } from "./Icon";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { AiFillSetting, AiOutlineMenu } from "react-icons/ai";
import { PiBagSimpleFill } from "react-icons/pi";
import { AiFillHeart } from "react-icons/ai";
import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContextComponent";
import { ProductContext } from "./FavouriteProductsContext";
import { Link } from "react-router-dom";
import { BagContext } from "./BagProductsContext";
import { ModalMenu } from "./pages/ModalMenu";
import { MenuContext } from "./MenuContextComponent";
import { LogInContext } from "./LogInContextComponent";

const Header = () => {
  const [icon, setIcon] = useState(<BsFillMoonFill />);
  const { classToBe3 } = useContext(ThemeContext);
  const theme = useContext(ThemeContext);
  const { count } = useContext(ProductContext);
  const { count2 } = useContext(BagContext);
  const { user } = useContext(LogInContext);
  const { setMenuOpen } = useContext(MenuContext);

  const changeTheme = () => {
    if (theme.theme === "dark") {
      theme.setTheme("light");
      setIcon(<BsFillMoonFill />);
    }
    if (theme.theme === "light") {
      theme.setTheme("dark");
      setIcon(<BsSunFill />);
    }
  };

  return (
    <div className={classToBe3}>
      <div className="main-head">
        <div className="before"></div>
        <div onClick={() => setMenuOpen(true)} className="menu">
          <Icon2 className="nav-i" name={<AiOutlineMenu />}></Icon2>
        </div>
        <div className="div-nav-i">
          <div id="change" onClick={changeTheme}>
            <Icon2 className="i" name={icon} />
          </div>

          <div style={{ position: "relative" }}>
            <Link to={"/bag"} className="white">
              <Icon2 className="nav-i" name={<PiBagSimpleFill />}></Icon2>
            </Link>
            <span className="icon-span icon-span2">{user ? count2 : ""}</span>
          </div>
          <div>{user ? <img className="menu-img" src={user.image} /> : ""}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
