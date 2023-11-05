import { Link } from "react-router-dom";
import { useContext } from 'react';

import classes from "./LeftNavbar.module.css"
import FavoritesContext from '../../store/favorites-context';

const LeftNavbar = () => {
  const favoritesCtx = useContext(FavoritesContext);
  
  return (
    <div>
      {" "}
      <div className={classes.left__navbar}>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">NewMeetup</Link>
          </li>
          <li>
            <Link to='/favorites'>
              My Favorites
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftNavbar;
