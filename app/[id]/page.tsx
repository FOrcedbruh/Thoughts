"use client"

import { colors } from "@/components/Colors/Colors"
import styles from './page.module.css';
import { useAppSelector } from "@/hooks/ReducerTypeHook";



interface ParamsType {
    params: {
        id: number,
        title?: string
    }
}


const GoalPage = ({params: {id}}: ParamsType) => {

    const { goals } = useAppSelector(state => state.CreateGoalSlice);


    const goal = goals[id - 1];

    const time = goal.time



    return (
        <section className={`${styles.window}`} style={{'background': `${
            time === 'DAY' && colors.Day.bg ||
            time === 'WEEK' && colors.Week.bg ||
            time === 'MONTH' && colors.Month.bg ||
            time === 'YEAR' && colors.Year.bg
        }`}}>
            <p className={styles.title} style={{'color': `${
                time === 'DAY' && colors.Day.text ||
                time === 'WEEK' && colors.Week.text ||
                time === 'MONTH' && colors.Month.text ||
                time === 'YEAR' && colors.Year.text
            }`}}>{goal.title}</p>
            <div className={styles.timeDiv}>
                <div>
                    <h3>goal for the</h3>
                    <h1>{goal.time}</h1>
                </div>
            </div>
        </section>
    )
}

export default GoalPage;