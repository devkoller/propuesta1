import { Link, NavLink } from 'react-router-dom'
import { LiaShoppingBagSolid, LiaSearchSolid } from 'react-icons/lia'
import logo from '../../assets/img/att-logo.avif'

export const TopMenu = () => {
  return (
    <header className='w-full flex px-3 py-5 justify-between sticky top-0 bg-white'>
      <ul className='flex gap-3 items-center'>
        <li>
          <img src={logo} alt='' className='w-20' />
        </li>
        <li>
          <NavLink to='/'>Información</NavLink>
        </li>
        <li>
          <NavLink to='/shop'>Adquiere tu e-SIM</NavLink>
        </li>
      </ul>
      <div className='flex gap-3 items-center text-xl'>
        <LiaSearchSolid />
        <Link to='/shop'>
          <LiaShoppingBagSolid />
        </Link>
      </div>
    </header>
  )
}
