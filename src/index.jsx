//Website mental model:
//Header should be it's own component to allow for use in other pages
//Main content should be a file with the fun facts & seperate components for h1 and list
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
const root = createRoot(document.getElementById("root"))

root.render(
  <App />
)