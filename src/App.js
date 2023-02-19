import "./App.css";
import Navbar from "./Componants/Navbar";
import TextForm from "./Componants/TextForm";

function App() {
  return (
    <div>
      <Navbar title="TextUtils" />
      <div className="container">
        <TextForm heading="Enter The text to analized:"   />
      </div>
    </div>
  );
}

export default App;
