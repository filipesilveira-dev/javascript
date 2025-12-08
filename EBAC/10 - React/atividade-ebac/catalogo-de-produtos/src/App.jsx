import { useState } from 'react'
import ProdutoCard from './components/ProdutoCard'
import './App.css'
import guitarImg from './assets/images/guitar.jpg'
import bassImg from './assets/images/baixo.jpg'
import drumsImg from './assets/images/bateria.jpg'
// import AddProduct from './components/AddProduct'

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

  const [name, setName] = useState('')
  const [price, setPrice] = useState()
  const [description, setDescription] = useState('')


  const [newProduct, setNewProduct] = useState({
    id: products.length + 1,
    name: nome,
    price: price,
    description: description
  });

  return (

    <main className="w-screen bg-slate-500 flex flex-col justify-center p-6 gap-4">

      <div className='flex flex-row'>
        <div className='mx-auto space-y-4'>
          <div className='text-3xl text-slate-100 font-bold text-center'>Lista de produtos</div>
        </div>
        <div className='grid grid-cols-3'>
          {/* Percorre cada elemento da array "products", pega de cada produto a informação sobre seu name, price e description e cria, para cada produto presente na array um Card com base no componente ProdutoCard */}
          {/* {products.map((product) => <ProdutoCard key={product.id} img={product.img} name={product.name} price={product.price} description={product.description} />)} */}
        </div>
        <div className="flex flex-col justify-center">

          {/* Boas práticas de um formulário com React: todos os inputs com value e onChange */}
          <form action="">
            <h1>Adicionar produto</h1>
            <input type="text" placeholder="Insira o nome do produto" className="px-4 py-2"
              value={nome}
              onChange={(e) => setName(e.target.value)}
            />
            <input type="number" placeholder="Insira o preço do produto" className="px-4 py-2"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <input type="text" placeholder="Insira a descrição" className="px-4 py-2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit"
              className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">Adicionar Produto</button>
          </form>
        </div>
      </div>


    </main>


  )
}

export default App
