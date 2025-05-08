import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

function Page() {
    return (
        <ol> 
          <li> Hi</li>
          <li> Hi</li>
          <li> Hi </li>
          <li> Hi </li>
          <li> Hi </li>
        </ol>
    );
}

root.render(
  < Page />
)