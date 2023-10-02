import "../posts/postPage.css";
import BackHome from "../components/BackHome/BackHome";
import ProgressBar from "../components/ProgressBar/ProgressBar";

import { useState, useEffect } from "react";

function Post8() {
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
        {window.innerWidth < 786 ? "Recupera-ción" : "Recuperación"}
      </h1>
      <section progress={scrollTop} className={"content"}>
        <p>
          Me cuesta mucho descansar. Cada vez que me lo propongo, mi cabeza
          piensa miles de cosas ‘productivas’ en las que podría estar empleando
          mejor mi tiempo. Descansar se convierte entonces en una pelea interna
          entre lo que sé que es bueno para mí y lo que me han dicho que es
          bueno para mí.
        </p>
        <p>Y aparece la ansiedad. Sí, descansar me genera ansiedad.</p>
        <p>
          Entro en un bucle que me drena la energía y me impide ser consciente
          de cómo me siento realmente y de qué necesito para estar bien. Si
          descanso, estoy malgastando mi tiempo. Si malgasto mi tiempo, no voy a
          estar donde quiero estar. Si no estoy donde quiero estar, mi vida es
          miserable.
        </p>
        <p>Y así me quedo sin energía y, obviamente, sintiéndome miserable.</p>
        <p>
          Nos han inculcado que ser resilientes significa seguir avanzando a
          pesar de todas las piedras que nos vayan poniendo en el camino, que
          cuanto más difíciles se pongan las cosas, más tenemos que esforzarnos
          en superarlas.
        </p>
        <p>
          Pero a mí esto me ha generado una conducta autodestructiva que quiero
          erradicar.
        </p>
        <p>
          Para mí, ser resiliente es ser consciente de cuándo tienes que parar
          para luego seguir avanzando. Comprometerte contigo mismo a darte esos
          espacios de autocuidado y descanso para sentirte seguro y recuperar la
          energía.
        </p>
        <p>
          Y sí, ahora mismo para mí descansar es duro. Muy difícil. Pero es
          crucial que lo haga, aunque sienta esa ansiedad, miedo e
          incertidumbre… porque no hacerlo sería una sentencia a largo plazo.
        </p>
        <p>
          Tenemos la sensación de que la vida va a mil por hora y que si
          descansamos nos quedamos atrás. De ahí viene ese miedo y esa
          incertidumbre. Pero cada uno de nosotrxs tiene su propio ritmo y
          tenemos que honrarlo.
        </p>
        <p>
          Porque ese ritmo es el que nos da el equilibrio y la capacidad de
          seguir creando, disfrutando y viviendo cada momento. Y para mantener
          nuestro ritmo, tenemos que “parar” de vez en cuando.
        </p>
        <p>
          Ser conscientes de que no podemos derrochar nuestra energía de forma
          infinita.
        </p>
        <p>
          Confiar en nuestra brújula interna y darnos esos espacios de recarga.
        </p>
        <p>Recuperarnos.</p>
      </section>
      <BackHome />
    </div>
  );
}

export default Post8;
