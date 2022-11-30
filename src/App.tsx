import Explore from "./Components/Explore";
import Login from "./Components/Login";
import { useAuth } from "./context/AuthContext";
const App: React.FC = () => {
  const auth = useAuth();
  const show = auth ? <Explore /> : <Login />;

  return <main>{show}</main>;
};

export default App;
