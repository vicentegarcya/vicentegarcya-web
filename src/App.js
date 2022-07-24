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
      <section className='welcome'>
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
      <section className='projects'>
        <div>
          <div className='projects-back'></div>
          <h3 className='projects-title'>Work</h3>
          <div className='projects-back'></div>
        </div>
        <div className='projects-content'>
          <div className='project-div'>
            <div className='project-text'>
              <h3 onClick={() => window.open('https://fckcss.netlify.app/')}>F*ck CSS</h3>
              <p>F*ck CSS is a web app where you can try useful tools such as Flexbox helper, Grid creator, Shadow generator and Linear Gradient maker to make your life easier as a developer. You can also create an account and save those snippets for later.</p>
            </div>
            <div className='project-image' onClick={() => window.open('https://fckcss.netlify.app/')}>
              <img src={'../images/fckcss.png'} alt="" />
            </div>
          </div>
          <div className='project-div'>
            <div className='project-text'>
              <h3 onClick={() => window.open('https://getlit-bookclub.herokuapp.com/')}>Get Lit</h3>
              <p>Get Lit is a full stack web app where you can add, share & comment your favourite books with other bookworms by creating or using our rooms. Besides, you can check local bookshops near you.</p>
            </div>
            <div className='project-image' onClick={() => window.open('https://getlit-bookclub.herokuapp.com/')}>
              <img src={'../images/getlit.png'} alt="" />
            </div>
          </div>
          <div className='project-div'>
            <div className='project-text'>
              <h3 onClick={() => window.open('https://vicentegarcya.github.io/elon-jump/')}>Elon Jump</h3>
              <p> Web browser game made with JavaScript, HTML and CSS, inspired by Doodle Jump, in which you gotta help Elon Musk to put his satellites into orbit jumping from platform to platform.</p>
            </div>
            <div className='project-image' onClick={() => window.open('https://vicentegarcya.github.io/elon-jump/')}>
              <img src={'../images/elonjump.png'} alt="" />
            </div>
          </div>
        </div>
        <div>Copyright © 2022 Vicente García. All rights reserved.</div>
      </section>
    </div>
  );
}

export default App;
