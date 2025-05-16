import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

//Put components into seperate files that are exported and imported here to be used
import Header from "./Header" //might need to add .jsx at the end of the path
import Footer from "./Footer"
import MainContent from "./MainContent"

function Page() { //parent component
    return (
      //children components
      <>
        <Header />
        <MainContent />
        <Footer />
      </>
    );
}

root.render(
  <Page />
)