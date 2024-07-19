import { Route, Routes, Navigate, useLocation } from 'react-router-dom'
import { Home } from '../views/Home'
import { Shop } from '../views/Shop'

export const Router = () => {
  const { pathname } = useLocation()

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  )
}
