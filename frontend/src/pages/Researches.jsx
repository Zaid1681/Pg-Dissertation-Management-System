import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const Researches = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
   
    if (!user) {
      navigate('/')
    }


  }, [user, navigate])

  return (
    <div className='mt-10 text-center '>
      <h1 className='font-bold mt-4 text-extra-large'>Researches Page</h1>
      <h2 className='font-semibold mt-2 text-large'>Hello { user && user.name }</h2>
    </div>
  )
}

export default Researches