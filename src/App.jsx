import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() { //parent component
    return (
      //children components
      <>
        <Navbar />
        <Main />
      </>
    );
}