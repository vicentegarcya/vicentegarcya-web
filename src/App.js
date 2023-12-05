import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Bitacora from "./Bitacora";
import Post1 from "./posts/Post1";
import Post2 from "./posts/Post2";
import Post3 from "./posts/Post3";
import Post4 from "./posts/Post4";
import Post5 from "./posts/Post5";
import Post6 from "./posts/Post6";
import Post7 from "./posts/Post7";
import Post8 from "./posts/Post8";
import Post9 from "./posts/Post9";
import Post10 from "./posts/Post10";
import Header from "./components/Header/Header";
import { useEffect, useState } from "react";
import ScrollToHash from './components/ScrollToHash';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  return (
    <div className="App">
      <ScrollToHash />
      <Header isLoading={isLoading}></Header>
      <Routes>
        <Route path="/" element={<Home isLoading={isLoading} />} />
        <Route path="/bitacora" element={<Bitacora />} />
        <Route path="/bitacora/1" element={<Post1 />} />
        <Route path="/bitacora/2" element={<Post2 />} />
        <Route path="/bitacora/3" element={<Post3 />} />
        <Route path="/bitacora/4" element={<Post4 />} />
        <Route path="/bitacora/5" element={<Post5 />} />
        <Route path="/bitacora/6" element={<Post6 />} />
        <Route path="/bitacora/7" element={<Post7 />} />
        <Route path="/bitacora/8" element={<Post8 />} />
        <Route path="/bitacora/9" element={<Post9 />} />
        <Route path="/bitacora/10" element={<Post10 />} />
      </Routes>
    </div>
  );
}

export default App;
