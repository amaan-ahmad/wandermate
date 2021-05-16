import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Popular from "./components/Popular";
import Recommended from "./components/Recommended";
import Search from "./components/Search";

function App() {
  return (
    <>
      <Header />
      <Search />
      <Navigation />
      <Popular />
      <Recommended />
    </>
  );
}

export default App;
