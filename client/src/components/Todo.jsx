import React, { useState } from 'react'

const Todo = (props) => {

  const [editText, setEditText] = useState("")
  const [clicked, setClick] = useState(true)

  function handleEdit(event){
    setEditText(event.target.value)
    setClick(false)
  }

  return (
    <div >
      {props.isEdit ?
        <div className="flex justify-between mx-5 mb-14">
          <input className=" border-[#5757EB] border-2 w-full h-12 mr-0.5 text-center outline-none active:border-[#1918A0]"
            name="task" onChange={handleEdit} value={clicked? props.textEdit: editText} required></input>
          <button type='submit' onClick={() => {props.editData(props.editId, editText)
          setClick(true)}} className="w-2/12 h-12 text-white bg-[#5757EB] border-[#5757EB] border-2 
        hover:bg-[#1918A0] hover:border-[#1918A0] active:bg-[#8D8FFE] active:border-[#8D8FFE] ">Update Task</button>
        </div>
        :
        <div className="flex justify-between mx-5 mb-14">
          <input className=" border-[#5757EB] border-2 w-full h-12 mr-0.5 text-center outline-none active:border-[#1918A0]"
            name="task" placeholder="What is the task today?" onChange={props.handleChange} value={props.text} required></input>
          <button type='submit' onClick={props.submitText} className="w-2/12 h-12 text-white bg-[#5757EB] border-[#5757EB] border-2 
        hover:bg-[#1918A0] hover:border-[#1918A0] active:bg-[#8D8FFE] active:border-[#8D8FFE] ">Add Task</button>
        </div>}
    </div>
  )
}

export default Todo 
