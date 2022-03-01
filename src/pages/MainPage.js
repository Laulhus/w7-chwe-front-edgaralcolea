import { useSelector } from "react-redux";

const MainPage = () => {
  const user = useSelector((state) => state.loggedUser);

  return (
    <div>
      <div className="welcome">
        <img src={user.picture} alt={`${user.userName} profile`} />
        <h2>{`Welcome ${user.userName}!`}</h2>
      </div>
    </div>
  );
};
export default MainPage;
