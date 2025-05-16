function Nav() {
    return (
        <nav className="navbar">
            <img src="src/assets/react.svg" className="logo" alt="reactLogo"/>
            <span className="hText">ReactFacts</span>
        </nav>
    );
}

export default function Navbar() {
    return (
    <header className="h"> 
        <Nav />
    </header>
    );
}