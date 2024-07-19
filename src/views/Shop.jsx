import { TopMenu, BottomMenu, Card } from '../components'
import banner from '../assets/img/header.webp'

const products = [
  {
    price: '100',
    gb: '5',
    days: '15'
  },
  {
    price: '240',
    gb: '5',
    days: '30'
  },
  {
    price: '300',
    gb: '10',
    days: '30'
  }
]

export const Shop = () => {
  const print = () => {
    return products.map((item, index) => {
      return <Card key={index} item={item} />
    })
  }
  return (
    <div>
      <TopMenu />
      <img src={banner} alt='' className='mb-5' />

      <section className='px-3 lg:w-4/5 mx-auto mb-5'>
        <h2 className='font-bold text-3xl mb-5'>Selecciona el paquete</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>{print()}</div>
      </section>
      <BottomMenu />
    </div>
  )
}
