import "../posts/postPage.css";
import BackHome from "../components/BackHome/BackHome";
import ProgressBar from "../components/ProgressBar/ProgressBar";

import { useState, useEffect } from "react";

function Post11() {
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
        {/* {window.innerWidth < 786 ? "Querido 2023" : "Protagonista"} */}
        Querido 2023
      </h1>
      <section progress={scrollTop} className={"content"}>
        <p>Vaya año.</p>
        <p>
          2023 me ha enseñado que crecer no significa crear nuevas realidades o
          descubrir nuevos caminos, sino que va de destruir y dejar atrás lo que
          ya no vale.
        </p>
        <p>
          Y lo he aprendido por las malas, ya que ha significado profundizar
          mucho en mí y eliminar las cadenas que me estaban impidiendo llegar a
          mi esencia.
        </p>
        <p>Y duele, duele mucho.</p>
        <p>
          Porque te encuentras con momentos duros que no habías procesado;
          “descubres” comportamientos que te habían hecho sobrevivir pero que
          ahora te están hundiendo; identificas patrones que te están limitando
          para seguir tu camino; y SIENTES que no te has dado todo el amor que
          te merecías.
        </p>
        <p>
          Considero que mi 2023 iba de darme cuenta de esto, y no ha sido hasta
          el final cuando realmente lo he entendido.
        </p>
        <p>
          Hacerme autónomo, buscar un nuevo hogar, crear(me) una nueva forma de
          estar en el mundo… eran cosas que sentía que me harían crecer, pero
          escondían una realidad: para hacer todo eso, primero tenía que indagar
          dentro.
        </p>
        <p>
          Y es que llegó un momento en este 2023 en el que sentí que me quedaba
          huérfano de ilusión, de fé y de mí. Que ya no me quedaba nada a lo que
          agarrarme para seguir luchando.
        </p>
        <p>
          Creo que fue en ese momento cuando lo entendí todo y me hundí hasta el
          fondo para encontrar, sanar y procesar todo aquello que me estaba
          impidiendo ser mi verdadero yo.
        </p>
        <p>
          En esta bitácora he ido compartiendo algunas de las cosas que he ido
          descubriendo al hacerlo y, con cada una de ellas, sentía que me quería
          y construía un poquito más.
        </p>
        <p>
          Me he dado cuenta de que pararse mucho a descansar está bien; que
          pedir ayuda es necesario; que ser valiente va más de llorar que de
          hacer cosas increíbles; que ser un perro verde es difícil pero
          compensa cuando pones límites; y que quererse y cuidarse a uno mismo
          es innegociable.
        </p>
        <p>
          Sin duda, mi 2023 no ha sido como esperaba, pero sí como necesitaba.
        </p>
        <p>Necesitaba sentir todas las decepciones que he sentido.</p>
        <p>Necesitaba dejar de esforzarme hasta la muerte.</p>
        <p>Necesitaba llorar tanto como he llorado.</p>
        <p>Al 2024 solo le pido una cosa: que sea lo que tiene que ser.</p>
        <p style={{fontSize: "14px", fontStyle: "italic"}}>
          * Gracias a todas esas personas que me han acompañado en este camino 🖤
        </p>
      </section>
      <BackHome />
    </div>
  );
}

export default Post11;
