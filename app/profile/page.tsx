import { authConfig } from '@/configs/auth';
import styles from './page.module.css';
import { getServerSession } from 'next-auth';


const Profile: React.FC = async () => {

    const session = await getServerSession(authConfig)


    return (
        <section className={styles.window}>
            <h1>{session?.user?.name}</h1>
            <h2>{session?.user?.email}</h2>
        </section>
    )
}



export default Profile;