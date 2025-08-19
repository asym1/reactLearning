import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "../data.js"

export default function App() { //parent component
    const dataMapped = data.map((element) => {return <Entry img={element.img} title={element.title} country={element.country}
    googleMapsLink={element.googleMapsLink} dates={element.dates} text={element.text}/>})
    return (
      //children components
      <>
        <Header />
        {dataMapped}
      </>
    );
}