import React, { useEffect, useState } from "react"

export default function(){
const [data,setData] = useState()



if(!data)return <div>loading</div>
return( 
<>
<div className="bg-black flex flex-col items-center justify-center w-screen h-screen">
<h1 className="text-white text-4xl">Hello world</h1>
<img className="w-1/2 h-3/4" src={`${data.url}`}></img>
</div>

</>

    )
}