import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Favorite Places</div>
      <nav>
          <ul>
              <li>
                  <Link to='/'>All Places</Link>
              </li>
              <li>
                  <Link to='/visited-places'>Visited Places</Link>
              </li>
              <li>
                <Link to='/new-place'>Add Place</Link>
              </li>
          </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
