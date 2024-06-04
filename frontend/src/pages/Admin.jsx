import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
function Admin() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {

    if (!user) {
      navigate('/login')
    }
    if (user.role != 'admin') {
      navigate('/login')
    }

  }, [user, navigate])
  return (
    <div>
      <AdminSidebar />
    </div>
  )
}

export default Admin