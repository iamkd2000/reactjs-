import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navigar = () => {
    let navigate = useNavigate()
    return (

        <div className='py-3 px-2 bg-cyan-600'>
            <div>
                <button onClick={() => {
                    navigate('/')
                }} className='font-medium bg-amber-500 px-5 rounded m-2 cursor-pointer active:scale-95'> Back To Home </button>
                <button onClick={() => {
                    navigate(-1)
                }} className='font-medium bg-amber-500 px-5 rounded m-2 cursor-pointer active:scale-95'> Back </button>
                <button onClick={() => {
                    navigate(+1)
                }} className='font-medium bg-amber-500 px-5 rounded m-2 cursor-pointer active:scale-95'> Next </button>
            </div>
        </div>
    )
}

export default Navigar
