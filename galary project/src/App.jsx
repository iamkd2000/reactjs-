import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import Card from './components/Card'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setindex] = useState(1)

  const getData = async () => {
    const response = await axios.get(
      `https://api.allorigins.win/raw?url=https://picsum.photos/v2/list?page=${index}&limit=100`
    )
    setUserData(response.data)
  }
  useEffect(function () {
    getData()
  }, [index])

  let printUserData = <h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading.... </h3>

  if (userData.length > 0) {
    printUserData = userData.map(function (kd, ks2) {
      return <div key={kd}>
        <Card kd={kd} />
      </div>
    })
  }

  return (
    <div className='bg-black min-h-screen overflow-auto text-white'>

      <div className='flex flex-wrap h-[80%] gap-4 p-2'>
        {printUserData}
      </div>
      <div className='flex justify-cegit nter gap-6 item-center p-4'>
        <button
        style={{opacity:index==1?0.6:1}}
          onClick={() => {
            if (index > 1) {
              setUserData([])

              setindex(index - 1)

            }
          }}
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2  font-semibold' >Prev</button>
        <h3>Page {index}</h3>
        <button
          onClick={() => {
            setUserData([])

            setindex(index + 1)

          }}
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'>Next</button>
      </div>
    </div>
  )
}

export default App
