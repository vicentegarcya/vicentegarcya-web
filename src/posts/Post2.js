import "../posts/postPage.css";
import BackHome from "../components/BackHome/BackHome";
import ProgressBar from "../components/ProgressBar/ProgressBar";

import { useState, useEffect } from "react";

function Post2() {
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
      <h1 className="title">A mi yo niño</h1>
      <section progress={scrollTop} className="content">
        <p>
          A veces te echo de menos. Sí, solo a veces. Porque me doy las gracias
          por nunca haberme alejado de ti completamente. Por haberte mantenido
          muy cerca de mi centro, al mando de las operaciones. Por nunca haber
          dejado de creer en ti.
        </p>
        <p>
          Estoy seguro de que nacemos sabiéndolo todo. Literalmente llevamos
          dentro todo lo que necesitamos, pero no somos capaces de acceder a
          ello racionalmente. Nos frustramos. Y con el tiempo, nos vamos
          alejando de esa luz, pura certeza, que está preparada para guiarnos
          durante toda nuestra vida.
        </p>
        <p>
          Y nos perdemos. Dejamos de jugar, de imaginar, de amar
          incondicionalmente, de darnos ese espacio para crear nuestra propia y
          original vida.
        </p>
        <p>
          Sin embargo, llega un momento (o una sucesión de momentos) en el que
          te das cuenta de que te has alejado demasiado y tienes dos opciones:
          seguir hasta romper el hilo completamente o parar. Y paras, ya lo creo
          que paras. Aunque duela.
        </p>
        <p>Lloras. Y lloras. Y lloras.</p>
        <p>
          Pero vuelves a conectar con esa energía esencial, auténtica, que nunca
          dejó de estar contigo. Esa sonrisa de par en par que te demuestra que
          entiende la vida, que no te va a abandonar, que coge las riendas si se
          las prestas.
        </p>
        <p>Y reconectas con esa paz que te hace tener fé.</p>
        <p>
          Ese niño te abraza y te da la seguridad que ningún adulto te va a dar
          nunca. Una seguridad endulzada con una pizca de locura, sueños y
          pasión, sobre todo pasión. Y es que la pasión es algo que no se puede
          aprender, es algo con lo que nacemos, pero sentirla depende de nuestra
          relación con esa energía virgen. De cuidar y proteger esa relación.
        </p>
        <p>
          Y creces, pero hacia dentro. Porque abrazar a ese niño de vuelta
          supone indagar en toda esa sabiduría que os pertenece y que contiene
          todas las <span className="text-strikethrough">respuestas</span> preguntas necesarias para seguir caminando.
        </p>
        <p>Hoy puedo decir que soy ese abrazo. Ese niño. Mi niño.</p>
        <p>Y que voy a cuidarnos tanto como él me ha cuidado siempre a mí.</p>
      </section>
      <BackHome />
    </div>
  );
}

export default Post2;
