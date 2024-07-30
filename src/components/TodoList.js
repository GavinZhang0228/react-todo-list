// src/components/TodoList.js
function TodoList(props) {
    const { list = [] } = props
    console.log(props.foo)
    return (
      <ul>
        {list.map((item) => (
            <li key={item.id}>
              {item.text}
            </li>
        ))}
      </ul>
    )
  }
  export default TodoList
  