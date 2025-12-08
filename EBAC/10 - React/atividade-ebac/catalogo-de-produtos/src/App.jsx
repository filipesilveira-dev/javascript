import { useState } from 'react'
import ProdutoCard from './components/ProdutoCard'
import './App.css'
import guitarImg from './assets/images/guitar.jpg'
import bassImg from './assets/images/baixo.jpg'
import drumsImg from './assets/images/bateria.jpg'
import keyboardImg from './assets/images/piano.jpg'
// import AddProduct from './components/AddProduct'

function App() {
  const [products, setProducts] = useState([{
    id: 1,
    img: guitarImg,
    name: "Guitarra",
    price: 5000,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  }, {
    id: 2,
    img: bassImg,
    name: "Baixo",
    price: 3000,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  }, {
    id: 3,
    img: drumsImg,
    name: "Bateria",
    price: 4000,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  }, {
    id: 4,
    img: keyboardImg,
    name: "Piano",
    price: 10000,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  }])

  const [nome, setName] = useState('')
  const [price, setPrice] = useState()
  const [description, setDescription] = useState('')


  const handleSubmit = (e) => {
    // evita o recarregamento da página
    e.preventDefault();

    // caso seja inserido o nome de um produto em branco, nada será retornado. Também validado por "requeired"
    if (nome.trim() === '') return;

    // variável para receber as informações do novo produto
    const newProduct = {
      id: products.length + 1,
      img: "https://placehold.co/600x400",
      name: nome.trim(),
      // preço transformado em número, já que o que é inserido é uma string
      price: Number(price),
      description: description.trim()
    };

    // adiciona o novo produto à lista já existente
    setProducts([...products, newProduct]);
    setName('');
    setPrice('');
    setDescription('');
  }


  return (

    <main className="w-screen bg-slate-500 flex flex-col justify-center p-6 gap-4">

      <div className='mx-auto space-y-4'>
        <div className='text-3xl text-slate-100 font-bold text-center'>Lista de produtos</div>
      </div>

      <div className='flex flex-row gap-3 justify-evenly'>
        <div className='grid grid-cols-3 h-1/3 p-4 w-2/3 gap-2'>
          {/* Percorre cada elemento da array "products", pega de cada produto a informação sobre seu name, price e description e cria, para cada produto presente na array um Card com base no componente ProdutoCard */}
          {products.map((product) => <ProdutoCard key={product.id} img={product.img} nome={product.name} price={product.price} description={product.description} />)}
        </div>
        <div className="flex flex-col justify-center h-screen w-1/3">

          {/* Boas práticas de um formulário com React: todos os inputs com value e onChange */}
          <form
            className='flex flex-col justify-center items-center px-3 py-2 rounded-md font-medium bg-white gap-3 mx-14'
            onSubmit={handleSubmit}>
            <h1 className='text-xl font-bold'>Adicionar produto</h1>
            <input type="text" required placeholder="Insira o nome do produto"
              className="px-4 py-2 bg-slate-200 rounded-sm text-xs w-full"
              value={nome}
              onChange={(e) => setName(e.target.value)}
            />
            <input type="number" required placeholder="Insira o preço do produto"
              className="px-4 py-2 bg-slate-200 rounded-sm text-xs w-full"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <textarea rows="5" maxLength="50" required placeholder="Insira a descrição"
              className="px-2 py-1 bg-slate-200 rounded-sm w-full text-xs"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <button type="submit"
              className="bg-slate-400 text-white px-4 py-2 rounded-md font-medium hover:bg-slate-500 hover:cursor-pointer">Adicionar Produto</button>
          </form>
        </div>
      </div>



    </main>


  )
}

export default App
