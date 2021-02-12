import { useState } from 'react'

export const AddTask = ( { onAdd } ) => {
  const [text, setText] = useState('')
  const [time, setTime] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if(!text) {
      alert('Please add a task')
      return
    }

    onAdd({ text, time, reminder })

    setText('')
    setTime('')
    setReminder(false)
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input 
          type="text" 
          placeholder="Add Task" 
          value={text} 
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input 
          type="text" 
          placeholder="Add Day & Time"
          value={time} 
          onChange={(e) => setTime(e.target.value) }
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set reminder</label>
        <input 
          type="checkbox"
          checked={reminder}
          value={reminder} 
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input className="btn btn-block" type="submit" value="Save task"/>
    </form>
  )
}

export default AddTask