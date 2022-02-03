import "./App.css";
import Hello from "./Hello";

import HelloWorld from "./HelloWorld";

export default function App() {
  let john = "juanito";
  return (
    <div className="App">
      <HelloWorld />
      <Hello nom="Pere" />
      <Hello nom={john} />
      <Hello nom={<em>Paul</em>} />
      <p>
        This is my second <br />
        page
      </p>
    </div>
  );
}
