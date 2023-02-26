import { useEffect, useState } from 'react'

type Product = {
  id: number
  title: string
  price: number
  quantity: number
  total: number
  discountPercentage: number
  discountedPrice: number
}

type Cart = {
  id: string
  products: Product[]
}

function UseMemoBad() {
  const [cart, setCart] = useState<Cart>()

  const totalProducts = cart?.products.length
  const totalPrice = cart?.products.reduce((acc, item) => {
    const { quantity, price } = item
    acc += quantity * price

    return acc
  }, 0)

  useEffect(() => {
    fetch('https://dummyjson.com/carts/1')
      .then((res) => res.json())
      .then(setCart)
      .catch((error) => console.error(error))
  }, [])

  return (
    <section>
      <h2 className="text-danger">useMemo (bad)</h2>

      <ul>
        <li>
          <strong>Total products:</strong> {totalProducts}
        </li>

        <li>
          <strong>Total price:</strong> {totalPrice}
        </li>
      </ul>
    </section>
  )
}

export default UseMemoBad
