import "../posts/postPage.css";
import BackHome from "../components/BackHome/BackHome";
import ProgressBar from "../components/ProgressBar/ProgressBar";

import { useState, useEffect } from "react";

function Post5() {
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
        {window.innerWidth < 786 ? "Masculi-nidad" : "Masculinidad"}
      </h1>
      <section progress={scrollTop} className={"content"}>
        <p>
          Estoy cansado de que tipos en camisa, con coches caros y colonia
          chunga me impongan lo que es ser un hombre. También me repatea que la
          energía masculina se malinterprete o no se entienda en toda su riqueza
          y diversidad. Y me pone muy triste que no seamos capaces de entender
          que todxs albergamos tanto energía masculina como femenina.
        </p>
        <p>TODXS.</p>
        <p>
          Sin embargo, todavía nos cuesta llorar, ya no digo en público, sino
          llorar. En general. Bailar, por ejemplo, está permitido, pero cuidado
          con tus movimientos. Y ni se te ocurra hablar de tus emociones, no
          vaya a ser que te vuelvas demasiado vulnerable.
        </p>
        <p>Es que es de coña.</p>
        <p>
          Ante esta situación, lo que suele ocurrir es que rechazas todo lo que
          te huela a ese "señor" en el que no te quieres convertir.
        </p>
        <p>
          Yo mismo me he creado mi personalidad alejándome de rasgos
          "masculinos" que había visto y que por nada del mundo quería replicar.
          Violencia, falta de empatía, ausencia, egoísmo y rechazo de las
          emociones: esa es la receta del éxito del macho alfa que todavía nos
          quieren vender.
        </p>
        <p>
          Sin embargo, y tras un duro trabajo de reformulación y exploración, me
          di cuenta de que donde ellos dicen violencia, yo veo{" "}
          <span className="bold">acción</span>; donde ellos dicen falta de empatía, yo veo{" "}
          <span className="bold">respeto y comprensión</span>; donde ellos dicen ausencia, yo veo{" "}
          <span className="bold">iniciativa</span>; donde ellos dicen egoísmo, yo veo{" "}
          <span className="bold">apoyo incondicional y seguridad</span>; y donde ellos dicen
          rechazo de las emociones, yo veo <span className="bold">pasión y amor</span>.
        </p>
        <p>
          Me ha costado mucho <span className="text-strikethrough">entender</span> sentir que no podía crear mi
          personalidad excluyendo la energía masculina, sino que tenía que
          explorar sus verdaderos rasgos, descubrirlos dentro de mí y
          abrazarlos.
        </p>
        <p>
          Solo así podemos reconciliarnos con una parte muy bonita de nosotros
          mismos que nos habían robado y que vamos a recuperar. Porque estoy
          seguro de que sois muchos los que os sentís o habéis sentido como yo.
        </p>
        <p>Y ya está bien.</p>
        <p>
          Creemos ese espacio en el que se desarrolle una energía masculina bien
          construida y entendida, sentida en lo más profundo del alma, capaz de
          unirse y compenetrarse con su energía femenina.
        </p>
        <p>
          Desechemos esas ideas que se disfrazan de "masculinidad" pero que solo
          son una forma más de perpetuar injusticias.
        </p>
        <p>Abracemos nuestra bonita energía masculina.</p>
        <p className="cursive">
          *Quería dar las gracias a <a className="bold" href="https://www.instagram.com/jimenagonzalez.in/" target="__blank">Jimena</a> y a <a className="bold" href="https://www.instagram.com/vibilavida/" target="__blank">Cris</a> por animarme a escribir
          sobre esto, ya que seguramente no me hubiera atrevido sin esa
          conversación.
        </p>
      </section>
      <BackHome />
    </div>
  );
}

export default Post5;
