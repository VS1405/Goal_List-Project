import './GoalForm.css'
import React, { useState } from 'react'

const GoalForm = (props) => {

    const [enterGoal, setGoal] = useState('')
    const [isValid, setVaild] = useState(true)

    const goalChanger = (event) => {
        setVaild(true)
        setGoal(event.target.value)
    }
    const SubmitForm = (event) => {
        event.preventDefault()
        const GoalOfStudy = {
            goal: enterGoal
        }
        if (enterGoal.trim().length === 0) {
            setVaild(false)
            return;
        }
        props.onSaveData(GoalOfStudy)
        setGoal('')
    }

    return (
        <form onSubmit={SubmitForm}>
            <div className={`form ${!isValid? 'notValid': ''}`}>
                <label className='title'>Course Goal</label>
                <input className='Goals'
                    type="text" value={enterGoal}
                    onChange={goalChanger}
                />
                <button type="submit">Add Goal</button>

            </div>

        </form>
    )
}
export default GoalForm;