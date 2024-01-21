import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import GoalType from "@/types/GoalType";


interface StateType {
    doneGoals: GoalType[]
}


const initialState: StateType = {
    doneGoals: []
}





const CompleteGoalSlice = createSlice({
    name: 'completeGoals',
    initialState,
    reducers: {
        addGoal(state, action: PayloadAction<GoalType>) {
            state.doneGoals.unshift(action.payload);
        }
    }
})



export default CompleteGoalSlice.reducer;
export const { addGoal } = CompleteGoalSlice.actions;