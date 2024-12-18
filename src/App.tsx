import React, { useEffect, useState } from "react"
import Heading1 from "./compontents/heading1"
import Input from "./compontents/input"
import Card from "./compontents/card"
import Button from "./compontents/button"

function App() {
  const [todos, setTodos] = useState<string[]>([])
  const [input, setInput] = useState<string>("")
  const [completedTodos, setCompletedTodos] = useState<string[]>([])
  const [isDisabled, setIsDisabled] = useState<boolean>(true)

  const [editIndex, setEditIndex] = useState<number | any>()
  const [editInput, setEditInput] = useState<string>("")

  useEffect(() => {
    if (editIndex !== null) {
      setEditInput(todos[editIndex])
    }
  }, [editIndex])

  const handleEditInput = (e: React.ChangeEvent<HTMLInputElement>) => setEditInput(e.target.value)

  useEffect(() => {
    if (editInput !== "") {
      todos[editIndex] = editInput
    }
  }, [editInput])

  function handleEdit(index: number) {
    setEditIndex(index)
  }

  function handleBlur() {
    setEditIndex(null)
    setEditInput("")
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      setEditIndex(null)
      setEditInput("")
    }
  }

  useEffect(() => {
    if (input === "") {
      setIsDisabled(true)
    } else {
      setIsDisabled(false)
    }
  }, [input])

  function handleAdd() {
    // setTodos([...todos, input])
    setTodos(() => [...todos, input])
    setInput("")
  }

  function handleDelete(index: number) {
    const newArray = todos.filter((_, i) => i !== index)
    setTodos(newArray)
  }

  function handleDone(index: number) {
    const newArray = todos.filter((_, i) => i !== index)
    setCompletedTodos(() => [...completedTodos, todos[index]])
    setTodos(newArray)
  }

  function handleCompletedDelete(index: number) {
    const newArray = completedTodos.filter((_, i) => i !== index)
    setCompletedTodos(newArray)
  }

  return (
    <React.Fragment>
      <Heading1 value={"TODO LIST"} className="text-secondary text-center mt-2" />
      <div className="container">
        <div className="d-flex gap-3 py-3">
          <Input type={"text"} placeholder={" type something you want to do . . . "} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)} value={input} />
          <Button value={"Add"} onClick={handleAdd} disabled={isDisabled} className='btn btn-outline-secondary border-2' style={{ boxShadow: "0px 0px 1px 2px #ccc" }} />
        </div>
        <div className="grid row">
          <div className="col-6 p-3 pe-4">
            <p className="fs-3 text-primary">Tasks to do</p>
            <div className="grid row">
              {
                todos.length > 0 ?
                  todos.map((item, index) => (
                    <div className="col-4 p-1">
                      <Card item={item} index={index} editIndex={editIndex} key={index + "todos"} onDelete={() => handleDelete(index)} onDone={() => handleDone(index)} onEdit={() => handleEdit(index)} editInput={editInput} handleEditInput={handleEditInput} onBlur={handleBlur} onKeyDown={handleKeyDown} />
                    </div>
                  ))
                  :
                  (<div><p>Nothing to show.</p></div>)
              }
            </div>
          </div>

          <div className="col-6 p-3 ps-4">
            <p className="fs-3 text-success" >Completed Tasks</p>
            <div className="grid row">
              {
                completedTodos.length > 0 ?
                  completedTodos.map((item, index) => (
                    <div className="col-4 p-1">
                      <Card item={item} key={index + "completedTodos"} onDelete={() => handleCompletedDelete(index)} />
                    </div>
                  ))
                  :
                  (<div><p>Nothing to show.</p></div>)
              }
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default App
