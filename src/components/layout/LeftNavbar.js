import { Link } from "react-router-dom";
import classes from "./LeftNavbar.module.css"

const LeftNavbar = () => {
  return (
    <div>
      {" "}
      <div className={classes.left__navbar}>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <Link to="/new-meetup">NewMeetup</Link>
          </li>
          <li>
            <Link to="/new-meetup">SignUp</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftNavbar;
