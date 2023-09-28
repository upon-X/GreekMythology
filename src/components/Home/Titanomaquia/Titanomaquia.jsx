import React from "react"
import { useLanguage } from '../../LanguageChange';
import styles from '../Home.module.css'

export default function Titanomaquia() {
    const { language } = useLanguage();

    return (
        <>
            <div className={styles.introduction} >
                <div>
                    <h1 className={styles.intro_title}>
                        {language === 'español' ? 'Titanomaquia' : 'Titanomachy'}
                    </h1>
                    <p className={`${styles.pre_p} ${styles.intro_p}`}>
                        {language === 'español' ?
                            `Zeus llevó consigo a sus hermanos hacia el Monte Olimpo, la montaña mas alta de Grecia, que seria la sede de los dioses rebeldes que lucharian contra los titanes.
                            Esta rebelión se la conoce como Titanomaquia, la Guerra de los Titanes.`
                            :
                            `Zeus led his siblings to Mount Olympus, the highest mountain in Greece, which would serve as the headquarters for the rebel gods who would fight against the Titans. 
                            This rebellion is known as Titanomachy, the War of the Titans.`
                        }
                    </p>
                    <p className={`${styles.pre_p} ${styles.intro_p}`}>
                        {language === 'español' ?
                            `Desde su trono en el Monte Othrys, Cronos convocaría a todos sus Titanes aliados a la gran batalla. El ejército del Titán tenía como general al Titán Atlas, quien lideraría 
                            los ataques a los dioses del Olimpo, teniendo como campo de batalla las llanuras de la antigua región de Tesalia. Debido a su inmenso poder físico, los Titanes comenzaron a 
                            dominar a los dioses. Por su parte, Zeus buscó refuerzos en el Tártaro, liberando a los Cíclopes, quienes, en agradecimiento, forjaron armas para los dioses. Zeus recibió 
                            sus famosos y poderosos rayos, Poseidón un majestuoso tridente capaz de generar terremotos y tsunamis, y Hades recibió el Yelmo del Terror que lo volvía invisible. 
                            Gracias al armamento recibido, los dioses comenzaron a dar pelea a los Titanes.`
                            :
                            `From his throne on Mount Othrys, Cronus called upon all his allied Titans to join the great battle. The Titan's army had the Titan Atlas as its general, who would lead the assaults
                            on the gods of Olympus, with the ancient region of Thessaly's plains as the battlefield. Due to their immense physical power, the Titans began to dominate the gods. Zeus, on his part,
                            sought reinforcements in Tartarus, releasing the Cyclopes who, in gratitude, forged weapons for the gods. Zeus received his famous and powerful thunderbolts, Poseidon an majestic trident
                            capable of causing earthquakes and tsunamis, and Hades received the Helm of Invisibility. Thanks to the weaponry received, the gods began to fight back against the Titans.`
                        }
                    </p>
                    <p className={`${styles.pre_p} ${styles.intro_p}`}>
                        {language === 'español' ?
                            `La batalla duró casi 10 años, y la balanza parecía estar a favor de los Titanes. Zeus decidió liberar a los temidos Hecatónquiros, cuyo impacto fue decisivo para la victoria olímpica. 
                            Zeus reunió todo su poder para cargar su rayo más poderoso, con el cual derrotó a Cronos, poniendo fin a la batalla. Encerró a los Titanes en el Tártaro, pero al Titán Atlas, que lideró las tropas, 
                            se le impuso cargar con el peso de la bóveda celeste sobre sus hombros por toda la eternidad. Los dioses olímpicos comenzaron a reinar, donde Zeus, como el dios supremo,
                            pasó a gobernar el cielo, Poseidón se convirtió en el señor de los mares y Hades obtuvo el dominio total sobre el reino de los muertos.
                            `
                            :
                            `The battle lasted for almost 10 years, and the balance seemed to be in favor of the Titans. Zeus decided to unleash the dreaded Hecatoncheires, whose impact was decisive for the Olympic victory. 
                            Zeus gathered all his power to charge his most powerful lightning bolt, with which he defeated Cronus, ending the battle. He imprisoned the Titans in Tartarus, but the Titan Atlas, who led the troops,
                            was condemned to bear the weight of the celestial vault on his shoulders for all eternity. The Olympian gods began to reign supremely, with Zeus as the supreme god, ruling over the sky, Poseidon 
                            becoming the lord of the seas, and Hades gaining total dominion over the realm of the dead.`
                        }
                    </p>
                    <p className={`${styles.pre_p} ${styles.intro_p}`}>
                        {language === 'español' ?
                            `Antes de consolidar su poder, los dioses tuvieron que enfrentar un último desafío. La diosa Gea, madre de los Titanes, estaba furiosa con los dioses del Olimpo por encarcelar a sus hijos, y por esta razón,
                            creó un poderoso monstruo llamado Tifón, con el único objetivo de destruir a Zeus. La monstruosa bestia se dirigió al Monte Olimpo, donde los dioses se asustaron y huyeron, transformándose en animales para no ser reconocidos,
                            refugiándose en Egipto. Solo Zeus se quedó para enfrentarse a la criatura. La pelea concluyó cuando Tifón desarmó a Zeus y, con la hoz de Cronos, le arrancó los tendones, colocándolos bajo el cuidado de Equidna, la mujer serpiente.
                            Hermes, junto a Pan, lograron robar los tendones y devolvérselos a Zeus, quien recuperó sus fuerzas y buscó venganza contra la bestia. Con la ayuda de las Moiras, que alimentaron a la bestia con frutos envenenados para debilitarla,
                            Zeus disparó su poderoso rayo a la cabeza de la criatura, derrotándola y enterrándola bajo el Monte Etna. Debido al inmenso poder del monstruo, el monte comenzó a arrojar lava de vez en cuando.`
                            :
                            `Before consolidating their power, the gods had to face one last challenge. The goddess Gaia, mother of the Titans, was furious with the Olympian gods for imprisoning her children, and for this reason,
                            she created a powerful monster named Typhon, with the sole purpose of destroying Zeus. The monstrous beast headed to Mount Olympus, where the gods became frightened and fled, transforming into animals to avoid recognition,
                            seeking refuge in Egypt. Only Zeus stayed to battle the creature. The fight concluded when Typhon disarmed Zeus and, with Cronus's sickle, tore Zeus's tendons and placed them in the care of Echidna, the serpent woman.
                            Hermes, along with Pan, managed to steal the tendons and return them to Zeus, who regained his strength and sought revenge against the beast. With the help of the Fates, who fed the beast poisoned fruits to weaken it,
                            Zeus unleashed his mighty lightning bolt upon the creature's head, defeating it and burying it beneath Mount Etna. Due to the monster's great power, the mountain now sporadically spews forth lava.`
                        }
                    </p>
                    <p className={`${styles.pre_p} ${styles.intro_p}`}>
                        {language === 'español' ?
                            `Luego de la heroica victoria, ahora los dioses olimpicos pasan a reinar completamente sobre la Tierra`
                            :
                            `After their heroic victory, the Olympian gods now reign supreme over the Earth.`
                        }
                    </p>
                </div>
            </div>
        </>
    )
}