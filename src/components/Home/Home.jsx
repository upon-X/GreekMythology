import React from "react"
import styles from './Home.module.css'
import antiguagreciamapa from '../../assets/antiguagrecia.png'
import EraPreolimpica from "./EraPreolimpica/EraPreolimpica";
import Titanomaquia from "./Titanomaquia/Titanomaquia";
import { useLanguage } from "../LanguageChange";
import universo from '../../assets/inicio-universo-griego-caos.jpg'
import tierra from '../../assets/tierra.webp'
import urano from '../../assets/urano.png'

export default function Home() {
    const { language } = useLanguage()
    return (
        <>
            <div className={styles.home}>
                <div className={styles.div_main}>
                    <img className={styles.intro_img} src={universo} alt="" id='edadpreolimpica' />
                    <img className={styles.intro_img} src={tierra} alt="" />
                    <img className={`${styles.intro_img} ${styles.imgurano}`} src={urano} alt="" />
                    {/* <div className={styles.a_secciones}>
                        <a className={styles.a_toid} href='#edadpreolimpica'>
                            {language === 'español' ?
                                'Edad Preolimpica' :
                                'Preolimpic Age'
                            }
                        </a>
                        <a className={styles.a_toid} href='#titanomaquia'>
                            {language === 'español' ?
                                'Titanomaquia' :
                                'Titanomachy'
                            }
                        </a>
                    </div> */}
                    <EraPreolimpica />
                    <Titanomaquia />
                </div>
            </div>
        </>
    )
}