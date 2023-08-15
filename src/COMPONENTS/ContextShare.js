import React, {  createContext, useState } from 'react'


export const registerContext=createContext()



function ContextShare({children}) {
  const [registerData,setregisterdata]=useState('')
  return (
    <>

    <registerContext.Provider value={{registerData,setregisterdata}}>

        {children}



    </registerContext.Provider>



    
    
    
    </>
  )
}

export default ContextShare