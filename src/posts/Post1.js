import "../posts/postPage.css";
import BackHome from "../components/BackHome/BackHome";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import { useState, useEffect } from "react";

function Post1() {
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
      <h1 className="title">Gracias Auri</h1>
      <section progress={scrollTop} className="content" >
        <p>
          ¿Y si el amor por las cosas fuera mayor que nuestro propio deseo?
          Anteponer el bienestar y la felicidad de una rosa por encima de
          nuestras ganas de arrancarla y poseerla, de dominarla. Preocuparnos
          por ella, entenderla, reconocerla y agradecerla… siendo conscientes de
          que nunca podremos llevárnosla.
        </p>
        <p>
          No solo ser conscientes, sino alegrarnos y enamorarnos de esa idea de
          libertad pura, en la que la rosa es cada vez más auténtica y real,
          devolviéndonos toda esa libertad en forma de luz y belleza.
        </p>
        <p>
          En La Música del Silencio, de Patrick Rothfuss, Auri lo ha entendido.
          Sabe que las cosas tienen alma y que, por tanto, tienen libertad. Por
          eso, ante sus impulsos de dominarlas, Auri se conecta con una energía
          superior, o más profunda, que le permite VER.
        </p>
        <p className="scrollX">Que le permite SENTIR.</p>
        <p>
          Una hebilla de cinturón tiene sueños, aspiraciones y lugares en los
          que es más feliz, y ella no es nadie para imponer su deseo.
        </p>
        <p>
          Todo lo contrario, no descansa hasta brindarle a cada cosa la paz que
          necesita para que sea como tiene que ser. Ni más, ni menos, pues la
          comparación es un dolor innecesario que nace de ese deseo.
        </p>
        <p className="scrollX">'Solo' ser.</p>
        <p>
          Auri sabe que reconocer es importante, y por eso intenta sentir cada
          paso que da. Solo en ese estado de amor puro se siente satisfecha, y
          solo en ese estado puede vivir. Al igual que las cosas que la rodean.
        </p>
        <p>
          Una mínima desviación en ese orden (si se puede llamar así) de amor,
          sensibilidad y libertad es inaceptable para ella. El caos, entendido
          como el reinado del ego y el deseo de control, siempre está esperando
          a la vuelta de la esquina, y no sería capaz de vivir ni un segundo en
          ese 'lugar'. Lamentablemente, ese lugar existe.
        </p>
        <p className="scrollX">Ese lugar es el mundo 'real'.</p>
        <p>
          Un mundo real lleno de deseos individuales que han creado tantos
          'universos' como personas lo habitan, impidiendo la evolución de una
          REALIDAD llena de amor en la que todos nos sintamos libres, aceptados
          y queridos.
        </p>
        <p>
          Esa realidad está dentro de ti y tú potencias esa realidad al
          reconocerla en los demás. Una conexión, contigo y con el universo, que
          hace que la rosa sea más rosa, que la hebilla sea más hebilla, y que
          tú seas más tú.
        </p>
        <p>Auri pone su granito de arena cada día.</p>
        <p>Y yo estoy aprendiendo a hacerlo.</p>
        <p>¿Te unes?</p>
      </section>
      <BackHome />
    </div>
  );
}

export default Post1;
