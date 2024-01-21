"use client"
import { useAppSelector } from "@/hooks/ReducerTypeHook";
import styles from './page.module.css';
import Link from "next/link";
import Image from "next/image";
import done from './../../images/done.svg';

const CompleteList: React.FC = () => {

    const { doneGoals } = useAppSelector(state => state.CompleteGoalSlice);

    return (
        <section className={styles.window}>
            <ul>
                {doneGoals.length === 0 && <h1 style={{'color': '#fff'}}>{'No complete goals yet :('}</h1>}
                {doneGoals.map(goal => {
                    return (
                        <li key={goal.id}>
                            <article>
                                <div>
                                    <Link href={`/${goal.id}`}><h2>{goal.title.substring(0, 15)} {goal.title.length > 15 && <>...</>}</h2></Link>
                                    <h3>{goal.time}</h3>
                                </div>
                                <Image src={done} alt="complete" width={40} height={40}/>
                            </article>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}


export default CompleteList;