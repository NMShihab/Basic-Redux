import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../store/index";
import classes from "./Header.module.css";

const Header = () => {
  const authorization = useSelector((state) => state.auth.authorization);
  const dispatch = useDispatch();

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(authAction.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {authorization && (
        <nav>
          <ul>
            <li>
              <a href="#">My Products</a>
            </li>
            <li>
              <a href="#">My Sales</a>
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
