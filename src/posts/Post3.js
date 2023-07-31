import "../posts/postPage.css";
import BackHome from "../components/BackHome/BackHome";
import ProgressBar from "../components/ProgressBar/ProgressBar";

import { useState, useEffect } from "react";

function Post3() {
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
      <h1 className="title">Ese límite no es tuyo</h1>
      <section progress={scrollTop} className="content">
        <p>
          Un buen día se te ilumina el alma y despiertas. Bueno, varios días
          para serte sincero.
        </p>
        <p>
          Ves muy claro tu camino y te dejas llevar (literalmente) hacia esos
          sueños y deseos que te miran con cara de HAZLO. Piensas y sientes que
          no tienes límites, que la vida te está apuntando con todas sus luces
          para que cumplas.
        </p>
        <p>Vuelas.</p>
        <p>
          Y sientes que entiendes ese para qué que tanto se te había
          atragantado. Tu consciencia se eleva un poquito más y empiezas a
          vibrar de otro modo. Has descubierto una nueva frecuencia.
        </p>
        <p>
          Una frecuencia que, lamentablemente, no todo el mundo es capaz de
          sintonizar y honrar. Sin entender por qué, empiezas a sentir que te
          han atado una cuerda y que están tirando hacia atrás: un límite.
          Piensas que ese límite es tuyo, que todo es demasiado bonito. La vida
          no puede ser ese cóctel de ilusión, pasión, emoción y profundidad que
          has sentido verdad.
        </p>
        <p>Dudas.</p>
        <p>
          Intentas validar lo que has "visto" hablando con otrxs, buscas un
          entendimiento a algo que es nuevo para ti y un apoyo incondicional
          ante la empresa de tu vida. Pero no llega. Tu nueva frecuencia pone en
          alerta a todas esas personas con las que hablas y, sin darse cuenta,
          proyectan en ti todos los miedos y límites que les supone imaginar y
          soñar.
        </p>
        <p>
          Muchas veces es tan sútil que nos cuesta entender y sentir qué está
          ocurriendo. Son personas que nos quieren y, como tal, confiamos en su
          consejo. Así que debe ser una mala idea. Ese despertar es una trampa y
          me están intentando salvar.
        </p>
        <p>Dolor.</p>
        <p>
          Porque tu quieres. Quieres mucho vivir. Y sientes que te has quedado
          parado en mitad de la carretera sin ganas de volver atrás pero sin
          gasolina para seguir hacia delante.
        </p>
        <p>
          En ese momento solo te queda tener fé; confiar y creer en lo que
          sientes; y correr hacia esa imagen que tu corazón ha creado para darte
          un propósito.
        </p>
        <p>Gasolina.</p>
        <p>
          Y te das cuenta de que ese límite nunca fue tuyo. Al igual que todas
          esas reacciones y sensaciones contradictorias que no entendías y que
          te arrojaron para que tú te hicieras cargo.
        </p>
        <p>
          Aprender que no somos responsables de los miedos de los demás es una
          tarea muy complicada y dolorosa. Requiere mucha valentía y
          consciencia, puesto que vamos a vivir mucho rechazo y aislamiento.
        </p>
        <p>
          Sin embargo, es un lastre que no nos podemos permitir si queremos
          seguir soñando.
        </p>
        <p>Y, si has llegado hasta aquí, quieres hacerlo.</p>
      </section>
      <BackHome />
    </div>
  );
}

export default Post3;
