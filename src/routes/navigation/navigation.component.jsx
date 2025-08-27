import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
//import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CrwnLogo from "../../assets/crown.svg";
import "./navigation.style.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={CrwnLogo} alt="Crown" className="logo" />
          {/* <CrwnLogo className="logo" /> */}
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            ART GALLERY
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
