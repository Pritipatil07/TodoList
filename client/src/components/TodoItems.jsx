import React, { useState } from 'react'
import axios from 'axios';
import Todo from './Todo'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TodoItems = (props) => {

    const [text, setText] = useState("");
    const [todos, setTodos] = useState()
    const [isEdit, setEdit] = useState(false)
    const [editId, setEditId] = useState()
    const [textEdit, setTextEdit] = useState()
    
    const name = props.email

    function handleChange(event) {
        setText(event.target.value)
    }
    function submitText(event) {
        setText(" ")
        event.preventDefault();
        sendData();
    }

    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:4000/", {
                params: {
                  username: name
                }
              })
            var items = response.data;
            setTodos(items)
        } catch (error) {
            console.log(error.message);
        }
    }

    const sendData = async () => {
        try {
        const response = await axios.post("http://localhost:4000/add", { text, name })
        } catch (error) {
            console.log(error.message);
        }
    }

    function handleEditText(id, changedText) {
        setTextEdit(changedText)
        editData(id)
    }

    const editData = async (id, editText) => {
        setEdit(true)
        setEditId(id)
        try {
            const response = await axios.post("http://localhost:4000/edit", { id, editText })
        } catch (error) {
            console.log(error.message);
        }
        setEdit(false)
        setText("")
    }
    const delData = async (id) => {
        try {
            const response = await axios.post("http://localhost:4000/delete", { id })
            setTodos(todos.filter(todo => todo.id !== id))
        } catch (error) {
            console.log(error.message);
        }
    }

    React.useEffect(() => {
        getData();
    }, [todos]);

    return (
        <div>
            <div>
                <p className="text-center text-3xl font-bold py-10">Hello {props.name}!</p>
            </div>
            <div>
                <Todo handleChange={handleChange} text={text} submitText={submitText} isEdit={isEdit}
                    editData={editData} todos={todos} editId={editId} textEdit={textEdit} />
            </div>
            {todos?.map(todo => (
                <div key={todo.id} className="text-center my-6 mx-5 bg-[#8D8FFE] hover:bg-[#7b7df4] text-white w-auto text-xl rounded-lg cursor-pointer">
                    <ul>
                        <li className="flex justify-between py-2.5 px-5 " >
                            {todo.title}
                            <div className="flex justify-around">
                                <button onClick={() => handleEditText(todo.id, todo.title)} className="mx-5 hover:text-[#5757EB] active:text-[#1918A0]"><EditIcon /></button>
                                <button onClick={() => delData(todo.id)} className="hover:text-[#5757EB] active:text-[#1918A0]"><DeleteIcon /></button>
                            </div>
                        </li>
                    </ul>
                </div>
            ))}

        </div>

    )
}

export default TodoItems
