import "../posts/postPage.css";
import BackHome from "../components/BackHome/BackHome";
import ProgressBar from "../components/ProgressBar/ProgressBar";

import { useState, useEffect } from "react";

function Post10() {
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
        {window.innerWidth < 786 ? "Protago-nista" : "Protagonista"}
      </h1>
      <section progress={scrollTop} className={"content"}>
        <p>
          La primera vez que lloré en terapia fue cuando mi psicóloga me dijo
          que allí, en su consulta, yo era el protagonista. Fue instantáneo.
          Algo hizo click y empecé a llorar desde un lugar ancestral que tenía
          oculto desde hace mucho tiempo.
        </p>
        <p>
          Siempre me ha costado llorar, y en público mucho más, pero esa palabra
          me llegó directa al alma. Y tiene mucho que ver con lo invisible que
          me he sentido en muchas ocasiones y con el rol de cuidador que he ido
          adquiriendo a lo largo de mi vida.
        </p>
        <p>
          Pero en ese momento sentí que eso podía cambiar. Y por eso lloré.
          Porque vi una salida desde lo más profundo del pozo.
        </p>
        <p>
          Porque sin sentirme el protagonista de mi vida era incapaz de detectar
          y expresar mis necesidades, me resultaba imposible priorizarme en
          cualquier situación, no me sentía merecedor de las cosas buenas que me
          pasaban, y estaba en una tensión constante preguntándome si podía
          hacer más de lo que ya estaba haciendo.
        </p>
        <p>No me escuchaba.</p>
        <p>Me costaba vivir para mí.</p>
        <p>
          Pero esa palabra, protagonista, junto con las gafas especiales de esas
          personas que sí son capaces de verme y cuidarme, han conseguido que me
          vaya reencontrando conmigo mismo.
        </p>
        <p>
          Ahora soy capaz de canalizar amor hacía mí; estoy más pendiente de lo
          que me puede venir bien; y me tomo más tiempo para descansar y sentir
          los siguientes pasos en mi vida.
        </p>
        <p>
          Soy consciente de que esto es un proceso muy largo, de que hay mucha
          distancia hasta el borde del pozo, pero esos ‘clicks’, como aquel día
          en terapia, van ocurriendo cada menos tiempo.
        </p>
        <p>
          Y los considero muy importantes porque realmente siento que se
          procesan cosas cuando ocurren. Que accedo a un nuevo nivel de
          aprendizaje y sanación cuando paso por ellos.
        </p>
        <p>
          Comparto esto porque haciéndolo me siento, precisamente, más
          protagonista.
        </p>
        <p>
          Pero también porque este texto quizá sea ese ‘click’ que necesitas
          para darte cuenta de que tú también lo eres.
        </p>
      </section>
      <BackHome />
    </div>
  );
}

export default Post10;
