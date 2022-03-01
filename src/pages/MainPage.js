import { useSelector } from "react-redux";

const MainPage = () => {
  const user = useSelector((state) => state.loggedUser);

  return <h2>Welcome {user.name}</h2>;
};
export default MainPage;
