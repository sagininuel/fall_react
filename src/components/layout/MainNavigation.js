import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header>
      <div className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
        <nav>
          <ul>
            {/* <li>
              <Link to="/">All Meetups</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li> */}
            <li>
              <Link to="/new-meetup">Sign In</Link>
            </li>
            <li>
              <Link to="/new-meetup">Sign Up</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainNavigation;
