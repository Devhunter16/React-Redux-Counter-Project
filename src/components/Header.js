import { useSelector, useDispatch } from 'react-redux';
import { authenticationActions } from '../store/index';

import classes from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const isAuthorised = useSelector(state => state.auth.isAuthenticated);
  
  const logoutHandler = () => {
    dispatch(authenticationActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthorised && (
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
      )}
    </header>
  );
};

export default Header;
