import "../posts/postPage.css";
import BackHome from "../components/BackHome/BackHome";
import ProgressBar from "../components/ProgressBar/ProgressBar";

import { useState, useEffect } from "react";

function Post6() {
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
        Perros Verdes
      </h1>
      <section progress={scrollTop} className={"content"}>
        <p>
          Los perros verdes existen, lo sé porque yo soy uno de ellos. O eso me
          han dicho varias veces. Y la verdad es que me siento así, porque me
          cuesta encajar en la mayoría de moldes que los humanos han creado para
          sentir pertenencia, seguridad y comodidad.
        </p>
        <p>Y yo ni estoy cómodo ni me siento parte de ese sistema.</p>
        <p>
          Y aquí empieza el problema, porque eso me hace sentir aislado y
          solitario, sin un “hogar” al que acudir cuando las cosas no van bien o
          cuando te sientes incomprendido (que es la mayoría de las veces).
          Hemos sido incapaces de crear nuestro “sistema”, por lo menos hasta
          ahora, y eso es muy duro.
        </p>
        <p>
          Es muy duro porque la vida no está hecha para alguien a quien le
          molestan mucho los ruidos, o para alguien que tiene mucha empatía y
          siente los problemas de los demás como suyos. O para alguien que se
          preocupa por cada detalle y se emociona al ver una flor.
        </p>
        <p>La vida no está hecha para alguien que siente mucho.</p>
        <p>
          Porque esas cosas no importan, no tienen valor en el sistema. Y por
          tanto, se despojan. La sensibilidad es contraproducente en el trabajo,
          la honestidad te jugará malas pasadas y la pasión hará que te lleves
          muchas desilusiones.
        </p>
        <p>
          El sistema te expulsa si quieres llevar un ritmo más lento (más
          natural), si quieres pararte a saborear cada instante, o simplemente
          si te atreves a hacer las cosas siguiendo a tu propia guía interna.
        </p>
        <p>Y te excluye sin un lugar a donde ir.</p>
        <p>Y te dificulta cualquier intento de progreso.</p>
        <p>
          Ante esta tesitura, solo te queda crearte tu parcelita secreta en la
          que te sientes seguro y en la que recuperas un poco la fe. Intentas
          proteger tu magia de cualquier injerencia externa y rezas para
          encontrar otras personas que te ayuden a regar esa parcelita.
        </p>
        <p>
          Me niego a pensar que no existen otras personas a las que les
          encantaría ir a un festival diurno en el bosque, o que piensan que el
          agua es la mejor bebida del mundo, o que se les escapa alguna
          lagrimilla cuando escuchan el mar. El problema es que tenemos que
          protegernos tanto del sistema que no podemos encontrarnos.
        </p>
        <p>
          Pero tengo esperanza. Nuestras parcelitas van a ser cada vez más
          grandes y nuestro miedo cada vez más pequeño para atrevernos a ser
          todavía más especiales. Y nos encontraremos.
        </p>
        <p>Porque sentir (vivir) como sentimos (vivimos) es alucinante.</p>
        <p>Y porque ser un perro verde merece la pena.</p>
      </section>
      <BackHome />
    </div>
  );
}

export default Post6;