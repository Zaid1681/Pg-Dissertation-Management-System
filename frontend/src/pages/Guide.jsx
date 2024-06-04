import React from 'react'
import GuideSidebar from '../components/GuideSidebar.jsx'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

function Guide() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {

    if (!user) {
      navigate('/login')
    }
    if (user.role != 'guide') {
      navigate('/login')
    }
    
  }, [user, navigate])
  return (
    <GuideSidebar />
  )
}

export default Guide