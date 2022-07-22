import './App.css';
const textArray = [
  "frontend developer",
  "tech writer",
  "chess player",
  "pokémon trainer",
  "books lover"
];



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul className="left-side-bar">
            <li><a href="mailto:vicentegarciaayllon@gmail.com" rel="noreferrer" target="_blank"><img src={'../images/correo-electronico.png'} alt="" /></a></li>
            <li><a href="https://www.linkedin.com/in/vicentegarciaayllon/" rel="noreferrer" target="_blank"><img src={'../images/linkedin-logo.png'} alt="" /></a></li>
            <li><a href="https://github.com/vicentegarcya" rel="noreferrer" target="_blank"><img src={'../images/github.png'} alt="" /></a></li>
            <li><a href="https://medium.com/@vicentegarcya" rel="noreferrer" target="_blank"><img src={'../images/medium.png'} alt="" /></a></li>
          </ul>
        </nav>
      </header>
      <section className="welcome">
        <div>
          <img src={"../images/picasion.com_01257a2d2a5fb76e7b256b82f5b58dfe.gif"} alt="" />
          <div className="welcome-text">
            <p>Hi there. I'm <span>  Vicente  </span></p>
            <p>
              {/* {
                textArray.map(el => el)
              }  */}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
