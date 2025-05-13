import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

function Header() {
  return (
    <header>
      <img src="src/assets/react.svg" width="40" alt="react logo"/>
    </header>
  );
}

function Footer() {
  return (
      <footer> <small> 2024 copyright Fornite Vbucks </small></footer>
  )
}

function MainContent() {
  return (<ol> 
          <li>React is a popular library, so I will be able to
            fit in with all the coolest devs out there! 😎</li>
            <li>I am more likely to get a job as a front end developer
            if I know React</li>
        </ol>);
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