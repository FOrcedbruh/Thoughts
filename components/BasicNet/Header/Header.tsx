import styles from './Header.module.css';
import Link from 'next/link';






const Header: React.FC = () => {


    return (
        <header className={styles.header}>
            <h1><Link href={'/'}>your goals</Link></h1>
            <Link className={styles.completeLink} href={'/CompleteList'}>Completed</Link>
        </header>
    )
}


export default Header;