'use client'
import styles from './Header.module.css';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { signIn, signOut } from 'next-auth/react';
import Image from 'next/image';


const Header: React.FC = () => {

    const session = useSession();


    console.log(session);



    const signinHandle = () => {
        
    }

    const signoutHandle = () => {
        signOut({
            callbackUrl: '/'
        })
    }

    const Avatar = session.data?.user?.image as string

    return (
        <header className={styles.header}>
            <h1><Link href={'/'}>your goals</Link></h1>
            <Link className={styles.completeLink} href={'/CompleteList'}>Completed</Link>
            <div className={styles.accountActions}>
                {session.data?.user?.email ? <Link href={'#'} onClick={signoutHandle}>SignOut</Link> : <Link href={'/api/auth/signin'}>Sign in</Link>}
            </div>
            {Avatar && <img className={styles.avatar} src={Avatar} alt="" />}
        </header>
    )
}


export default Header;