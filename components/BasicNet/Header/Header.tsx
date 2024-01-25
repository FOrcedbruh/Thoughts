'use client'
import styles from './Header.module.css';
import Link from 'next/link';
import { useSession } from 'next-auth/react';




const Header: React.FC = () => {

    const session = useSession();


    console.log(session);

    return (
        <header className={styles.header}>
            <h1><Link href={'/'}>your goals</Link></h1>
            <Link className={styles.completeLink} href={'/CompleteList'}>Completed</Link>
        </header>
    )
}


export default Header;