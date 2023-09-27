import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <>
            <nav className={styles.navbar}>
                <Link>
                    Greek Mythology
                </Link>
            </nav>
        </>
    )
}