'use client'
import styles from './page.module.css';
import { useAppSelector } from '@/hooks/ReducerTypeHook';
import GoalItem from '@/components/GoalItem/GoalItem';
import Link from 'next/link';
import Image from 'next/image';
import cross  from './../images/cross.svg';
import sad from './../images/sad.svg';


const Page: React.FC = () => {

    const { goals } = useAppSelector(state => state.CreateGoalSlice);
    
    return (
        <section className={styles.window}>
            <div className={styles.goalsList}>
                {goals.length === 0 && <GoalItem goal={{title: '', time: ''}} text='No goals yet' sadImg={sad}></GoalItem>}
                {goals.length > 0 && <>
                    {goals.map(goal => {
                        return (
                            <GoalItem goal={goal} key={goal.id}/>
                        )
                    })}
                </>}
            </div>
            <Link href={'/form'}>
                <div className={styles.create}>
                    <Image src={cross} alt='create' width={40} height={40}/>
                </div>
            </Link>
        </section>
    )
}

export default Page;