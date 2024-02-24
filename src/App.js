import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfilePhoto from "../src/Component/Profile/ProfilePhoto";
import Nav from "./Component/Nv/Navbar";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";

function App() {
  return (
    <>
      <Nav />
      <ProfilePhoto />
      <FullName />
      <Address />
    </>
  );
}

export default App;
