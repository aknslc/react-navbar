import Navbar from "./components/Navbar";
import { navbarData } from "./constants";


function App() {
  return (
    <>
      <Navbar data={navbarData} />
    </>
  );
}

export default App;
