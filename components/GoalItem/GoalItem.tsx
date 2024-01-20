import styles from './Goal.module.css';
import GoalType from '@/types/GoalType';
import { colors } from '../Colors/Colors';
import Link from 'next/link';
import Image from 'next/image';
import cross from './../../images/redCross.svg';
import done from './../../images/done.svg';
import { useAppDispatch } from '@/hooks/ReducerTypeHook';
import { deleteGoal, completeGoal } from '@/app/store/reducers/CreateGoalSlice';




interface GoalItemProps {
    goal?: GoalType,
    text?: string,
    sadImg?: string
}


const GoalItem: React.FC<GoalItemProps> = ({text, goal, sadImg}) => {


    const dispatch = useAppDispatch();


    const numberID = Number(goal?.id)

    const deleteHandler = () => {
        dispatch(deleteGoal(numberID));
    }


    const completeHandler = () => {
        dispatch(completeGoal(numberID - 1));
    }

    return (
            <article className={styles.goal} style={{'background': `${
                goal?.time === 'DAY' && colors.Day.bg ||
                goal?.time === 'WEEK' && colors.Week.bg ||
                goal?.time === 'MONTH' && colors.Month.bg ||
                goal?.time === 'YEAR' && colors.Year.bg || 
                !goal?.time && colors.Nothing.bg
                }`, 'opacity': `${goal?.complete && 0.4}`}}>
                {text && sadImg ? <div className={styles.noGoals}><h2>{text}</h2> <Image src={sadImg} alt='sad'/></div> : 
                <div className={styles.innerGoalItem}> 
                    <div>
                        <h2><Link  href={`/${goal?.id}`}>{goal?.title.substring(0, 15)}{(goal?.title.length && goal.title.length > 15) && <>...</>}</Link></h2>
                        <h3>{goal?.time}</h3>
                    </div>
                    {goal?.complete && <p style={{'color': 'chartreuse'}}>Goal complete!</p>}
                    <div className={styles.Btns}>
                        <button onClick={deleteHandler}>
                            <Image src={cross} alt='delete'/>
                        </button>
                        <button onClick={completeHandler}>
                            <Image  src={done} alt='complete'/>
                        </button>
                    </div>
                    
                </div>
                }
            </article>
    )
}

export default GoalItem;