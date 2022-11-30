import Login from "./Components/Login";
import { useAuth } from "./context/AuthContext";
const App: React.FC = () => {
  console.log(import.meta.env.VITE_SOME_KEY)
  const auth = useAuth();
  const show = auth ? <Login /> : "LoggedIn";


  return <div className='App'></div>;
};

export default App;
