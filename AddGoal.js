import React from 'react';
import GoalForm from './GoalForm';


const AddGoal = (props) => {

    const GoalHandler = (data)=>{

        const goalDetail = {
            ...data,
            id: Math.random().toString()
        }
        props.onAdding(goalDetail)
    }

    return (
         <GoalForm onSaveData={GoalHandler}/>
        
    )
}
export default AddGoal;