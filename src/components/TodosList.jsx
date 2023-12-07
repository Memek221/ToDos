import React from 'react'

export default function TodosList({todos}) {
  return (
    <ul>
        {todos?.map((todo) => {
            return(
                <li key={todo.TodoID}>{todo.Content}</li>
            )
        })}
    </ul>
  )
}
