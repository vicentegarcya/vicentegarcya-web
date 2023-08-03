import "../posts/postPage.css";
import BackHome from "../components/BackHome/BackHome";
import ProgressBar from "../components/ProgressBar/ProgressBar";

import { useState, useEffect } from "react";

function Post4() {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    // This will calculate how many pixels the page is vertically
    const winScroll = document.documentElement.scrollTop;
    // This is responsible for subtracticing the total height of the page - where the users page is scrolled to
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    // This will calculate the final total of the percentage of how much the user has scrolled.
    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };

  useEffect(() => {
    // Fires when the document view has been scrolled
    window.addEventListener("scroll", onScroll);

    //
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="postPage">
      <ProgressBar progress={scrollTop} />
      <h1 className="title">
        {window.innerWidth < 786 ? "Romanti-cismo" : "Romanticismo"}
      </h1>
      <section progress={scrollTop} className={"content"}>
        <p>Nos cuesta creer. Nos cuesta soñar. Nos cuesta sentir.</p>
        <p>
          Nos hemos transformado en escépticos por naturaleza. Ya no buscamos
          tesoros porque no creemos en las leyendas. Y ya no existen leyendas
          porque no somos capaces de imaginar un mundo más apasionante e
          impredecible, un mundo que no podamos controlar al milímetro.
        </p>
        <p>Hemos dejado de ser románticos, joder.</p>
        <p>
          Y es una pena, porque sí que sabemos imaginar ese mundo, de sentirlo
          tan vivo como nosotros. Ser románticx es amar la idea de que el
          universo siempre nos va a sorprender con algo que no creíamos posible,
          que nos va a emocionar de una forma completamente nueva.
        </p>
        <p>
          Tener fé y rituales que nos hagan sentir una comunión especial entre
          nosotrxs y con lo que nos rodea, dejando a la imaginación y a la
          abstracción las cosas que no podemos explicar racionalmente.
        </p>
        <p>
          Estar tranquilxs con la idea de que habrá cosas que nunca podremos
          entender, pero sí sentir. Y mucho. Sentir desde ese lugar tan especial
          en el que estamos a merced de esa magia que nos da calorcito, ilusión
          y propósito.
        </p>
        <p>Ese lugar sagrado en el que de verdad nos dejamos llevar.</p>
        <p>
          Ser románticx es perseguir y abrazar lo intangible. Lo infinito. Lo
          que nos da sentido como humanxs que han venido a este mundo a
          emocionarse, a jugar, a inventar… a CONECTAR.
        </p>
        <p>
          A conectar con ese hilo de luz que se va haciendo cada vez más y más
          potente a medida que creemos en él y en sus pistas. A medida que
          creamos ideales únicos como cada uno de nosotrxs.
        </p>
        <p>
          Ser románticx es pararte a oler una flor en mitad de un paseo y darle
          las gracias por ser y estar contigo.
        </p>
        <p>
          Ser románticx es crear, honrar y seguir tradiciones que van más allá
          de nuestra propia existencia y entendimiento.
        </p>
        <p>
          Ser románticx te salva en un mundo frenético que aparta las cosas
          realmente importantes.
        </p>
        <p>Ser románticxs es lo mejor que sabemos hacer.</p>
      </section>
      <BackHome />
    </div>
  );
}

export default Post4;
