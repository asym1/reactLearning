import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

function Header() {
  return (
    //icon and navigation bar
    <header className="main-header">
      <img className="logo" src="src/assets/react.svg" alt="react logo"/>
      <nav>
        <ul className="nav-list">
          <li className="nav-list-items"> Pricing </li>
          <li className="nav-list-items"> About </li>
          <li className="nav-list-items"> Contact </li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
      <footer > 
        <small> 2024 copyright Fornite Vbucks </small>
      </footer>
  )
}

function MainContent() {
  return (
        <>
        <h1> Reasons I Am Excited To Learn React </h1>
        <ol> 
          <li>React is a popular library, so I will be able to
            fit in with all the coolest devs out there! 😎</li>
            <li>I am more likely to get a job as a front end developer
            if I know React</li>
        </ol>
        </>
        );
}

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