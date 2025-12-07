import { useState } from 'react'
import ProdutoCard from './components/ProdutoCard'
import './App.css'
import guitarImg from './assets/images/guitar.jpg'
import bassImg from './assets/images/baixo.jpg'
import drumsImg from './assets/images/bateria.jpg'

function App() {
  const [products, setProducts] = useState([{
    id: 1,
    img: guitarImg,
    name: "Guitarra",
    price: 5000,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur exercitationem necessitatibus, praesentium est, delectus dolor natus magni ad minus minima laboriosam nesciunt explicabo excepturi corporis placeat ducimus. Expedita, sed facilis?"
  }, {
    id: 2,
    img: bassImg,
    name: "Baixo",
    price: 3000,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur exercitationem necessitatibus, praesentium est, delectus dolor natus magni ad minus minima laboriosam nesciunt explicabo excepturi corporis placeat ducimus. Expedita, sed facilis?"
  }, {
    id: 3,
    img: drumsImg,
    name: "Bateria",
    price: 4000,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur exercitationem necessitatibus, praesentium est, delectus dolor natus magni ad minus minima laboriosam nesciunt explicabo excepturi corporis placeat ducimus. Expedita, sed facilis?"
  }])

  return (

    <main className="w-screen bg-slate-500 flex flex-col justify-center p-6 gap-4">
      <div className='mx-auto space-y-4'>
        <div className='text-3xl text-slate-100 font-bold text-center'>Lista de produtos</div>
      </div>
      <div className='grid grid-cols-3'>
        {/* Percorre cada elemento da array "products", pega de cada produto a informação sobre seu name, price e description e cria, para cada produto presente na array um Card com base no componente ProdutoCard */}
        {products.map((product) => <ProdutoCard key={product.id} img={product.img} name={product.name} price={product.price} description={product.description} />)}
      </div>


    </main>


  )
}

export default App
