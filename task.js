import React from 'react'
import './Task.css'

const Task = (props) => {

  return (
    <div className='container'>
      {props.goalName.map((exer) => (
        <div className='task'>{exer.goal}</div>
        )
      )}

    </div>
  )
}
export default Task