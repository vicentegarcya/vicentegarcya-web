import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Bitacora from "./Bitacora";
import Post1 from './posts/Post1';
import Post2 from './posts/Post2';
import Post3 from './posts/Post3';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bitacora" element={<Bitacora />} />
          <Route path="/bitacora/1" element={<Post1 />} />
          <Route path="/bitacora/2" element={<Post2 />} />
          <Route path="/bitacora/3" element={<Post3 />} />
        </Routes>
    </div>
  );
}

export default App;
