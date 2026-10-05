import { useCart } from './hooks/useCart'
import Guitar from "./components/Guitar"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function App() {
  const { cart, data, addToCart, cartUpdated } = useCart();
  
  return (
    <>
      <Header cart={cart} onNewCart={cartUpdated} />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map(guitar => (
            <Guitar
              key={guitar.id}
              guitar={guitar}
              addToCart={addToCart}
            />
          ))}
        </div>
      </main>

      <Footer/>

    </>
  )
}