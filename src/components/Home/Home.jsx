import React from "react"
import styles from './Home.module.css'
import antiguagreciamapa from '../../assets/antiguagrecia.png'
import EraPreolimpica from "./EraPreolimpica/EraPreolimpica";
import Titanomaquia from "./Titanomaquia/Titanomaquia";
import { Link } from 'react-router-dom'
import { useLanguage } from "../LanguageChange";
import universo from '../../assets/inicio-universo-griego-caos.jpg'
import tierra from '../../assets/tierra.webp'
import urano from '../../assets/urano.png'
import { ArrowSVG } from "../../assets/svgs";

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
                                'Titanomaquia':
                                'Titanomachy'
                            }
                        </a>
                    </div> */}
                    <EraPreolimpica />
                    <Titanomaquia />
                    <Link className={styles.link_to_characters} to={'/characters'}>{language === 'español' ? 'Ve nuestra lista de personajes' : 'See our character´s list'}
                        <span className={styles.link_to_characters}>
                            <svg xmlns="http://www.w3.org/2000/svg" className={styles.link_to_characters_svg} class="icon icon-tabler icon-tabler-arrow-narrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#b04a2e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5 12l14 0" />
                                <path d="M15 16l4 -4" />
                                <path d="M15 8l4 4" />
                            </svg>
                        </span>
                    </Link>
                </div>
            </div>
        </>
    )
}