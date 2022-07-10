import React, { useEffect } from 'react'
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey = "bb6edb86b86389b475605239fd87c3c62e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand:(({command})=>{
                if (command === 'testCommand') {
                    alert("this code was executed")
                }
            })
        })
    },[])
  return (
    <div>Alan AI News Application</div>
  )
}

export default App