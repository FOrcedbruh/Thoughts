'use client'
import { useState } from "react";
import styles from './page.module.css';
import Link from "next/link";
import Image from "next/image";
import arrow from './../../images/arrow_2.svg'
import { useAppDispatch } from "@/hooks/ReducerTypeHook";
import { create } from "../store/reducers/CreateGoalSlice";
import GoalType from "@/types/GoalType";
import { colors } from "@/components/Colors/Colors";









const Form: React.FC = () => {


    const dispatch = useAppDispatch();

    const [timeValue, setTime] = useState<string>('DAY');
    const [title, setTitle] = useState<string>('');


    const onChangeTitle = (e: any) => {
        const text = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
        setTitle(text);
    };

    const onChangeTime = (e: any) => {
        setTime(e.target.value.toUpperCase())
    }


    const createHandle = () => {
        const goal: GoalType = {
            title: title,
            time: timeValue,
        }
        dispatch(create(goal));
    }

    return (
        <section className={`${styles.window}`} style={{'background': `${
            timeValue === 'DAY' && colors.Day.bg ||
            timeValue === 'WEEK' && colors.Week.bg ||
            timeValue === 'MONTH' && colors.Month.bg ||
            timeValue === 'YEAR' && colors.Year.bg
        }`}}>
            <textarea placeholder="just begin typing..." style={{'color': `${
                timeValue === 'DAY' && colors.Day.text ||
                timeValue === 'WEEK' && colors.Week.text ||
                timeValue === 'MONTH' && colors.Month.text ||
                timeValue === 'YEAR' && colors.Year.text
            }`}} name="title" value={title} onChange={e => onChangeTitle(e)}/>
            <div className={styles.timeDiv}>
                <div>
                    <h3>goal for the</h3>
                    <input type="text" name="time" value={timeValue} onChange={e => onChangeTime(e)}/>
                </div>
                {title && <Link href={'/'}>
                    <button className={styles.createBtn} onClick={createHandle}>
                        Create thought <Image src={arrow} alt="arrow" width={30} height={30}/>
                    </button>
                </Link>}
            </div>
        </section>
    )
}



export default Form;