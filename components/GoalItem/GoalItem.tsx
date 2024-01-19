import styles from './Goal.module.css';
import GoalType from '@/types/GoalType';

interface GoalItemProps {
    goal?: GoalType,
    text?: string
}


const GoalItem: React.FC<GoalItemProps> = ({text, goal}) => {



    return (
        <article className={styles.goal}>
            {text ? <h2>{text}</h2> : 
            <>
                <h2>{goal?.title}</h2>
                <h3>{goal?.time}</h3>
            </>
            }
            
        </article>
    )
}

export default GoalItem;