import "../posts/postPage.css";
import BackHome from "../components/BackHome/BackHome";
import ProgressBar from "../components/ProgressBar/ProgressBar";

import { useState, useEffect } from "react";

function Post7() {
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
      <h1 className="title">Pedir Ayuda</h1>
      <section progress={scrollTop} className={"content"}>
        <p>
          Os confieso que me da mucha vergüenza escribir sobre mis emociones
          aquí, pero siento que me ayuda muchísimo a tratar ciertas cosas. Hoy
          vengo con el corazón abierto a expresar todo lo que llevo dentro.
        </p>
        <p>Hoy vengo con el corazón abierto a pedir ayuda.</p>
        <p>
          Considero que soy una persona que siempre ha ‘tirado hacia delante’
          sin importar lo difíciles que se pusieran las cosas. También considero
          que he tratado de poner siempre la nota positiva en cualquier
          situación y que he tenido una sonrisa en la boca y una mano en el
          hombro cuando alguien la necesitaba.
        </p>
        <p>Pero nunca me he tendido esa mano a mí mismo.</p>
        <p>
          Quizás porque sentía que si era vulnerable o imperfecto no merecía esa
          ayuda, o simplemente porque tenía miedo a que la gente se fuera si
          creaba un espacio triste y doloroso a mi alrededor.
        </p>
        <p>
          El caso es que esto me ha provocado mucho sufrimiento encubierto.
          Hasta que no he podido más y me he hundido por todas esas veces en las
          que necesitaba ayuda y no la pedí. Por todas esas veces en las que me
          exigí demasiado a mí mismo y me dejé de lado.
        </p>
        <p>
          Por todas esas veces en las que no me quise lo suficiente para
          evitarlo.
        </p>
        <p>
          Pero ya está. He aprendido la lección y necesito. Necesito
          acompañamiento, necesito cariño, necesito apoyo, necesito una mano en
          mi hombro, necesito una llamada, necesito ayuda.
        </p>
        <p>
          Nunca me creí capaz de escribir algo así, pero tampoco me creí capaz
          de merecer y pedir ayuda, así que quiero contarme a mí mismo que lo
          único que puedo exigirme es ser fiel a como me siento y hacer todo lo
          posible para cuidarme y que me cuiden.
        </p>
        <p>
          Precisamente estoy escribiendo esto por no haberme dado cuenta antes
          de que no me he dado el cariño básico que necesita cualquier persona,
          no me estaba dando ese refugio que todo el mundo necesita para no caer
          hasta el fondo.
        </p>
        <p>
          Y seguro que no soy el único, así que si estás leyendo esto y lo
          sientes tu verdad, te animo a que pidas ayuda.
        </p>
        <p>
          Se de primera mano lo difícil que es darte cuenta de todo esto y
          seguramente necesites, como yo, la ayuda de un ángel en forma de
          persona que cree ese espacio en el que te sientas libre para hacerlo.
        </p>
        <p>
          Pero si buscas a tu alrededor, encontrarás algo parecido con lo que
          empezar a tirar del hilo. A mí me ha costado 30 años ser realmente
          consciente y atreverme a pedir ayuda de esta forma, así que te
          entiendo.
        </p>
        <p>Nos merecemos querernos mucho.</p>
        <p>Nos merecemos cuidarnos mucho.</p>
        <p>Nos merecemos pedir ayuda.</p>
      </section>
      <BackHome />
    </div>
  );
}

export default Post7;
