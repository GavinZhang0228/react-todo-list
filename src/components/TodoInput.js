// src/components/TodoInput.js

import React, { useState } from 'react'

function TodoInput(props) {
    const { addTodo } = props // 解构出事件 addTodo
    function addTodoHandler() {
      addTodo(text) // 执行事件 addTodo ，随便传入参数
      setText('') // 初始化 text 状态为空
    }
    const [text, setText] = useState('') // 初始化 text 状态为空

    function handleChangeText(event) {
        setText(event.target.value) // 这里不能写count++ ，必须执行setCount函数
    }

    return (
      <div>
        <input value={text} onChange={handleChangeText}/>{/* 受控组件 */}
        <button onClick={addTodoHandler}>todo input</button> {/* 这里的 onClick 写法，先不要管，后面会讲 */}
      </div>
    )
  }
  export default TodoInput
  