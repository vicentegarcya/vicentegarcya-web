import "../posts/postPage.css";
import BackHome from "../components/BackHome/BackHome";
import ProgressBar from "../components/ProgressBar/ProgressBar";

import { useState, useEffect } from "react";

function Post9() {
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
      <h1 className="title">Ser (+) Valiente</h1>
      <section progress={scrollTop} className={"content"}>
        <p>
          Cuando piensas que llevas siendo valiente toda tu vida, el universo
          viene y te pone a prueba: "
          <i>
            hola Vicente, toca darle una vuelta de tuerca a tu valentía y tener
            la fuerza necesaria para hacer lo correcto aunque te cagues de miedo
          </i>
          ”.
        </p>
        <p>
          Sí, considero que ahora tengo un gran océano de miedo(s) por delante
          que toca navegar y, lo más importante, sanar.
        </p>
        <p>
          Toca sumergirse en el sufrimiento más escondido dentro de mí, toca ser
          valiente por dentro y no por fuera.
        </p>
        <p>
          Siempre pensé que ser valiente significaba avanzar a pesar de las
          dificultades, ser capaz de hacer las cosas que otras personas no se
          atrevían a hacer. Ahora siento que ser valiente supone sentir el dolor
          y el sufrimiento de enfrentarme a las cosas que me impiden seguir
          evolucionando.
        </p>
        <p>
          Pero sentirlo de verdad, llegar hasta la raíz de mis miedos más
          ancestrales y “quemarme” en ellos.
        </p>
        <p>
          Toca ser responsable de mí mismo, de mi evolución y de mi energía para
          que la vida siga brindándome lo que creo que me merezco. Toca tener
          una fe casi ciega en que si soy consciente volveré a sentirme la
          persona que quiero ser.
        </p>
        <p>
          Y es que 2023 ha cambiado mi vida por completo. Pensaba que el hecho
          de tomar decisiones valientes y alineadas con mi camino me iba a
          repercutir en una felicidad y una paz muy elevadas. Que si seguía
          escuchando mi intuición, todo iba a ser como nadar en un arcoiris.
        </p>
        <p>
          Pero siempre se me olvida (malditos coaches espirituales pagados por
          Mr. Wonderful) que crecer implica conocer, transitar y darle un abrazo
          a la oscuridad.
        </p>
        <p>Y aquí es donde aparece la verdadera valentía.</p>
        <p>
          Creo que, como mucho, he llegado a meter un poquito la rodilla en la
          oscuridad, como cuando te bañas en un río de agua congelada. O quizá
          me haya dado un chapuzón alguna vez, pero muy muy rápido he vuelto a
          salir a la superficie.
        </p>
        <p>Me aterra.</p>
        <p>
          Sí, lo reconozco. Pero esta vez no quiero salir lo más pronto que
          pueda. Quiero que esa oscuridad me cuente cosas sobre mí, quiero hacer
          las paces con ellas y quiero entenderlas con el corazón.
        </p>
        <p>Ser valiente para mí, ahora, va de sentir mi oscuridad.</p>
      </section>
      <BackHome />
    </div>
  );
}

export default Post9;
