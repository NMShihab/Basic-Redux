import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
  const authorization = useSelector((state) => state.auth.authorization);

  return (
    <Fragment>
      <Header />
      {authorization ? <UserProfile /> : <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
