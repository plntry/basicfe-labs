import { Link } from "react-router-dom"
import s from './Header.module.css'

function Header() {
    return (
        <>
            <div className={s.container}>
                <Link
                    className={s.link}
                    to={'/'}
                >
                    Home
                </Link>
                <Link
                    className={s.link}
                    to={'/task1'}
                >
                    Task 1
                </Link>
                <Link
                    className={s.link}
                    to={'/task2'}
                >
                    Task 2
                </Link>
            </div>
        </>
    )
}

export default Header