import { useLanguage } from "../LanguageChange";
import styles from "./Home.module.css";

export default function EraPreolimpica() {
  const { language } = useLanguage();
  return (
    <>
      <div className={styles.introduction}>
        <div>
          <h1 className={styles.intro_title}>
            {language === "español" ? "Edad Preolimpica" : "Preolimpic Age"}
          </h1>
          <p className={`${styles.pre_p} ${styles.intro_p}`}>
            {language === "español"
              ? `Al principio del tiempo, solo existía el caos. Todos los elementos que conforman el universo ya existían pero estaban mezclados.
                            Este período duró muchas eras hasta que, a partir de este caos primordial, emergió Gea, la Madre Tierra, quien dio origen a nuestro planeta.`
              : `At the very beginning of the time, there was only chaos. All the elements that made up the universe already existed but were mixed together.
                            This period lasted for many ages until, from this primordial chaos, emerged Gaia, Mother Earth, who gave birth to our planet.`}
          </p>
          <p className={`${styles.pre_p} ${styles.intro_p}`}>
            {language === "español"
              ? `La diosa dio origen a varias deidades, incluyendo a Ponto, el mar, y Ourea, la tierra. Pero el más importante fue Urano, quien personificó el cielo y,
                        por lo tanto, reinó sobre todas las cosas. Urano tomó a Gea como su esposa, y cada noche se unían para consumar su amor. De esta unión nacieron los Hecatónquiros, 
                        monstruos con cien brazos y cincuenta cabezas, y los Ciclopes, poderosos seres con un solo ojo. También dieron origen a una nueva generación de dioses que más 
                        tarde conoceríamos como los Titanes.`
              : `The goddess gave birth to several deities, including Pontus, the sea, and Ourea, the earth. But the most important one was Uranus, who personified the sky and, 
                        therefore, ruled over all things. Uranus made Gaia his wife, and every night they would unite to consummate their love. From this union, the Hecatoncheires, 
                        creatures with a hundred arms and fifty heads, and the Cyclopes, powerful beings with a single eye, were born. They also gave birth to a new generation of gods
                        who would later be known as the Titans.`}
          </p>
          <p className={`${styles.pre_p} ${styles.intro_p}`}>
            {language === "español"
              ? `El dios celestial, al ver la poderosa descendencia que había engendrado, tuvo miedo y los arrojó al Tártaro, el vientre de Gea, lo cual le causaba un intenso dolor.
                        Cansada de esta situación, decidió conspirar contra su marido y le pidió a uno de sus hijos que destronara a Urano. Todos dieron un paso atrás excepto Cronos,
                        el Titán más ambicioso que se creyó a la altura de la tarea. Recibió una guadaña de diamantes y se dirigió a la morada de Urano, que dormía en una nube, y con un rápido golpe
                        de su arma, el Titán castró a su padre. El grito de dolor de Urano se escuchó en todo el universo, los cielos se tiñeron de rojo escarlata, los testículos fueron arrojados al océano y debido a su capacidad
                        fecundante surgieron varias divinidades.`
              : `The celestial god, upon seeing the powerful offspring he had begotten, became afraid and cast them into Tartarus, the womb of Gaia, which caused her intense pain.
                        Tired of this situation, she decided to conspire against her husband and asked one of her sons to overthrow Uranus. All of them stepped back except for Cronus,
                                the most ambitious Titan who believed he was up to the task. He received a diamond sickle and headed to Uranus' abode, where he was sleeping on a cloud. With a swift strike
                                of his weapon, the Titan castrated his father. Uranus's cry of pain echoed throughout the universe, the skies turned scarlet, his testicles were cast into the ocean,
                                and due to their fertilizing capacity, several divinities emerged.`}
          </p>
          <p className={`${styles.pre_p} ${styles.intro_p}`}>
            {language === "español"
              ? `Cronos regresó victorioso, liberó a sus hermanos prisioneros y fue aclamado como el nuevo señor supremo del universo. No liberó a los Hecatónquiros y los Ciclopes por considerarlos peligrosos.
                        Después del banquete de celebración, se le apareció el espectro de su padre y le dijo la siguiente profecía:`
              : `After Cronus returned victorious, he freed his imprisoned siblings and was acclaimed as the new supreme ruler of the universe. He did not release the Hecatoncheires and the 
                        Cyclopes because he considered them dangerous. After the celebration banquet, the specter of his father appeared to him and delivered the following prophecy:`}
          </p>
          <p className={styles.profecia}>
            {language === "español"
              ? `"Así como tú me derrocaste a mí, también tu propio hijo te derrocará a ti."`
              : `"As you overthrew me, so too shall your own son overthrow you."`}
          </p>
          <p className={`${styles.pre_p} ${styles.intro_p}`}>
            {language === "español"
              ? `A pesar de que en ese momento no le dio importancia, tiempo después Cronos fue atormentado por la profecía y estaba dispuesto a hacer cualquier cosa para evitar que el destino se cumpliera.
                            El soberano tenía como esposa a la titánide Rea, quien, al quedar embarazada, dio a luz a un nuevo tipo de deidad más poderosa que ellos. Cronos, temiendo la profecía, se comió a su primera hija llamada Hestia.
                            El Titán continuó con estas prácticas y cada hijo nacido era un bocado más para el rey de los Titanes.`
              : `Although he didn't pay it much attention at the time, Cronus was tormented by the prophecy later on and was willing to do anything to prevent destiny from being fulfilled.
                            The sovereign was married to the Titaness Rhea, who, upon becoming pregnant, gave birth to a new type of deity more powerful than they were. Cronus, fearing the prophecy, devoured his first daughter named Hestia.
                            The Titan continued with these practices and every child born was one more morsel for the king of the Titans.`}
          </p>
          <p className={`${styles.pre_p} ${styles.intro_p}`}>
            {language === "español"
              ? `Rea se embarazó nuevamente, pero esta vez con un plan para salvar a su hijo de su terrible esposo, se dirigió a la isla de Creta y dio a luz a Zeus, a quien dejó al cuidado de las ninfas y amamantado por la cabra Amalthea.
                            La reina cubrió una piedra con su manto para simular a su hijo recién nacido, lo llevó ante su esposo, quien se tragó la piedra sin pestañear. Rea se puso a llorar, pero de felicidad, sabiendo que había logrado salvar a su hijo.`
              : `Rea became pregnant again, but this time with a plan to save her child from her terrible husband, she headed to the island of Crete and gave birth to Zeus, whom she left in the care of nymphs and nursed by the goat Amalthea.
                            The queen covered a stone with her mantle to simulate her newborn son, which she presentedto her husband, who swallowed the stone without blinking. Rhea began to cry, but with happiness, knowing that she had managed to save her child.`}
          </p>
          <p className={`${styles.pre_p} ${styles.intro_p}`} id="titanomaquia">
            {language === "español"
              ? `Con el tiempo, Zeus creció siendo informado por todo lo que pasaba en el mundo por un aguila que se convertiria en su ave sagrada. Al llegar a la edad adulta, la titnánide Metis, lo visitó para revelarle su verdadera identidad y
                            entregarle una poción que lo ayudaria a rescatar a sus hermanos aprisionados en el estomago de Cronos. Zeus encubierto se dirigio al monte Othrys, la fortaleza de los titanes, y le entregó el brebaje al titan quien al tomarlo en seguida vomitó a todos sus hijos.
                            Hestia, Hera, Hades, Demeter, Poseidon y la piedra utilizada para engañarlo. Con sus hermanos a su lado, Zeus lideraria una revuelta que cambiaria el destino del universo.`
              : `Over time, Zeus grew up being informed about everything happening in the world by an eagle that would become his sacred bird. Upon reaching adulthood, Metis, a wise Titaness, visited him to reveal his true identity and
                            deliver a potion that would help him rescue his siblings imprisoned in Cronus's stomach. Zeus in disguise, he made his way to Mount Othrys, the Titans' stronghold, and handed the potion to the Titan, who immediately drank it and then vomited up all his children.
                            Hestia, Hera, Hades, Demeter, Poseidon, and the stone used to deceive him emerged. With his siblings by his side, Zeus would lead a revolt that would change the fate of the universe.`}
          </p>
        </div>
      </div>
    </>
  );
}
