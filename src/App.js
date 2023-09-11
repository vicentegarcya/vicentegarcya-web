import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Bitacora from "./Bitacora";
import Post1 from "./posts/Post1";
import Post2 from "./posts/Post2";
import Post3 from "./posts/Post3";
import Post4 from "./posts/Post4";
import Post5 from "./posts/Post5";
import Header from "./components/Header/Header";
import { useEffect, useState } from "react";
import Loading from "./components/Loading/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 4000);
  }, []);

  return (
    <div className="App">
      {isLoading && <Loading></Loading>}
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home isLoading={isLoading} />} />
        <Route path="/bitacora" element={<Bitacora />} />
        <Route path="/bitacora/1" element={<Post1 />} />
        <Route path="/bitacora/2" element={<Post2 />} />
        <Route path="/bitacora/3" element={<Post3 />} />
        <Route path="/bitacora/4" element={<Post4 />} />
        <Route path="/bitacora/5" element={<Post5 />} />
      </Routes>
    </div>
  );
}

export default App;
