import React from 'react'

export default function SelectUserType({CloseModel}) {
  return (
    <div className="modmain">
     <style>{'body {background-color: #b419ef}'}</style>
     <button onClick={()=>CloseModel(false)}>X</button>
      <h3>Select which type of user you are</h3>
      <button>User</button>
      <button>Tailor</button>
    </div>
  )
}
