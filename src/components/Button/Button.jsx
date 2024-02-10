import React from 'react'

const Button = ({label, callback, color}) => {
  return (
    <button style={{background:color}} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=> callback()}>{label}</button>
  )
}

export default Button