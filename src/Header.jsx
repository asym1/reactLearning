//by exporting default that allows me to call it in the other file with whatever name i want
//and no curly braces
export default function Header() { 
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