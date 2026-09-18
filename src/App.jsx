import { motion, useScroll, useTransform } from "motion/react";
import catPaw from "./assets/huella de gato.png";
import dogPaw from "./assets/Huella de perro.png";
import deljis1 from "./assets/Foto Deljis 1.jpeg";
import deljis2 from "./assets/Foto Deljis 2.jpeg";
import deljis3 from "./assets/Foto Deljis 3.jpeg";
import deljis4 from "./assets/Foto Deljis 4.jpeg";
import deljis5 from "./assets/Foto Deljis 5.jpeg";
import deljis6 from "./assets/Foto Deljis 6.jpeg";
import deljis7 from "./assets/Foto Deljis 7.jpeg";
import deljis8 from "./assets/Foto Deljis 8.jpeg";
import deljis9 from "./assets/Foto Deljis 9.jpeg";
import flowerIcon from "./assets/Icono flor.png";
import "./App.css";

const scenes = [
  {
    number: "01",
    title: "El primer contacto",
    caption:
      "Cuando empecé a conocerte, no sabía que me enamoraría de ti. Y que me harías sentir tan feliz.",
    className: "scene-one",
  },
  {
    number: "02",
    title: "Contra viento y marea",
    caption:
      "Y a pesar de las dificultades y de las dudas, seguíamos teniéndonos, porque algo más grande nos seguía reuniendo.",
    className: "scene-two",
  },
  {
    number: "03",
    title: "Una historia sin final",
    caption:
      "Se que no soy perfecto, pero contigo, todo tiene sentido. Y quiero que sigamos escribiendo nuestra historia juntos, porque sé que lo mejor está por venir.",
    className: "scene-three",
  },
];

function Scene({ number, title, caption, className }) {
  const isFirstScene = className === "scene-one";
  const isSecondScene = className === "scene-two";
  const isThirdScene = className === "scene-three";

  return (
    <section className={`scene ${className}`}>
      <div className="scene-copy">
        <span className="scene-number">{number}</span>
        <h2>{title}</h2>
        <p>{caption}</p>
      </div>

      {isFirstScene ? (
        <motion.div
          className="turquoise-panel turquoise-panel-left"
          initial={{ opacity: 0, scale: 0.88, rotate: -10, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
          viewport={{ amount: 0.45, once: false }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="photo-collage">
            <motion.img
              className="deljis-photo photo-one"
              src={deljis1}
              alt=""
              initial={{ opacity: 0, y: 40, rotate: -6 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ amount: 0.45, once: false }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.img
              className="deljis-photo photo-two"
              src={deljis2}
              alt=""
              initial={{ opacity: 0, y: 40, rotate: 6 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ amount: 0.45, once: false }}
              transition={{
                duration: 0.9,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
            <motion.img
              className="deljis-photo photo-three"
              src={deljis3}
              alt=""
              initial={{ opacity: 0, y: 40, rotate: -4 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ amount: 0.45, once: false }}
              transition={{
                duration: 0.9,
                delay: 0.16,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </div>
        </motion.div>
      ) : isSecondScene ? (
        <motion.div
          className="turquoise-panel turquoise-panel-right"
          initial={{ opacity: 0, scale: 0.88, rotate: 10, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
          viewport={{ amount: 0.45, once: false }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="photo-collage photo-collage-right">
            <motion.img
              className="deljis-photo photo-four"
              src={deljis4}
              alt=""
              initial={{ opacity: 0, y: 40, rotate: -7 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ amount: 0.45, once: false }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.img
              className="deljis-photo photo-five"
              src={deljis5}
              alt=""
              initial={{ opacity: 0, y: 40, rotate: 7 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ amount: 0.45, once: false }}
              transition={{
                duration: 0.9,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
            <motion.img
              className="deljis-photo photo-six"
              src={deljis6}
              alt=""
              initial={{ opacity: 0, y: 40, rotate: -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ amount: 0.45, once: false }}
              transition={{
                duration: 0.9,
                delay: 0.16,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </div>
        </motion.div>
      ) : isThirdScene ? (
        <>
          <motion.div
            className="diamond-shape"
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.7, rotate: -20, y: 70 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
            viewport={{ amount: 0.45, once: false }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="photo-collage photo-collage-diamond">
            <motion.img
              className="deljis-photo photo-seven"
              src={deljis7}
              alt=""
              initial={{ opacity: 0, y: 40, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ amount: 0.45, once: false }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.img
              className="deljis-photo photo-eight"
              src={deljis8}
              alt=""
              initial={{ opacity: 0, y: 40, rotate: 6 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ amount: 0.45, once: false }}
              transition={{
                duration: 0.9,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
            <motion.img
              className="deljis-photo photo-nine"
              src={deljis9}
              alt=""
              initial={{ opacity: 0, y: 40, rotate: -4 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ amount: 0.45, once: false }}
              transition={{
                duration: 0.9,
                delay: 0.16,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </div>
        </>
      ) : null}
    </section>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, -180]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.82]);
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <main>
      <nav className="topbar">
        <a className="brand" href="#top">
          Mi gatita 🐾<span>/</span>
        </a>
        <span className="nav-status">
          Sigue deslizando hacia abajo <i />
        </span>
      </nav>
      <section className="hero" id="top">
        <motion.div
          className="hero-inner"
          style={{ y: heroY, scale: heroScale }}
        >
          <p className="eyebrow">
            El nuevo capítulo de nuestra historia · 2026
          </p>
          <h1>
            Mejores son dos que uno,
            <br />
            <em>porque si cayeren,</em>
            <br />
            el uno levantará a su compañero.
          </h1>
          <p className="hero-intro">
            Tengo fe de que nuestro amor es más fuerte que cualquier obstáculo
            que se nos presente.
            <br /> Y que juntos podemos superar cualquier desafío que se nos
            presente.
          </p>
          <a className="scroll-link" href="#chapter-one">
            Historia <span>↓</span>
          </a>
        </motion.div>
        <div className="hero-mark" aria-hidden="true">
          <img className="paw paw-cat" src={catPaw} alt="" />
          <img className="paw paw-dog" src={dogPaw} alt="" />
        </div>
      </section>
      <div className="progress-line" aria-hidden="true">
        <motion.div style={{ scaleX: lineScale }} />
      </div>
      <section className="intro-band" id="chapter-one">
        <p className="eyebrow">Capítulo uno</p>
        <h2>
          Aprendizaje, amor y paciencia.
          <br />
          Donde todo comenzó.
        </h2>
      </section>
      {scenes.map((scene) => (
        <Scene key={scene.number} {...scene} />
      ))}
      <section className="closing">
        <p className="eyebrow">Continuará</p>
        <h2>
          Esto es solo
          <br />
          <em>el comienzo.</em>
        </h2>
        <img className="flower-icon" src={flowerIcon} alt="" />
        <footer>DELJIS / JOSÉ</footer>
      </section>
    </main>
  );
}

export default App;
