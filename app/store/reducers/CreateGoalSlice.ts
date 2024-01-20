'use client'
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import GoalType from "@/types/GoalType";

interface GoalsType {
    goals: GoalType[];
}

const initialState: GoalsType = {
    goals: []
}


const CreateGoalSlice = createSlice({
    name: 'createGoal',
    initialState,
    reducers: {
        create(state, action: PayloadAction<GoalType>) {
            state.goals.push(action.payload);
            action.payload.id = state.goals.length;
            action.payload.complete = false;
        },
        deleteGoal(state, action: PayloadAction<number>) {
            state.goals.forEach((goal, i) => {
                    if (goal.id === action.payload) {
                        state.goals.splice(i, 1);
                    }
            })
        },
        completeGoal(state ,action: PayloadAction<number>) {
            state.goals[action.payload].complete = true
        }
    }
})

export const { create, deleteGoal, completeGoal } = CreateGoalSlice.actions;
export default CreateGoalSlice.reducer;

