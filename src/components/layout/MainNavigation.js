import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useLocation } from "react-router-dom";

function MainNavigation() {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  // console.log(splitLocation);
  return (
    <header>
      <div >
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
                <Link to="-">Sign In</Link>
              </li>
              <li>
                <Link to="-">Sign Up</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={classes.menu}>
          <ul className={classes.menu__ul}>
          <li className={splitLocation[1] === "" ? `${classes.active}` : ""}>
              <Link to="/">All Meetups</Link>
            </li>
            <li className={splitLocation[1] === "favorites" ? `${classes.active}` : ""}>
              <Link to="/favorites">Favorites</Link>
            </li>
            <li className={splitLocation[1] === "new-meetup" ? `${classes.active}` : ""}>
              <Link to="/new-meetup" activeClassname = {classes.active}>New Meetup</Link>
            </li>
            {/* <li>
              <Link to="/new-meetup">Sign Up</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default MainNavigation;
