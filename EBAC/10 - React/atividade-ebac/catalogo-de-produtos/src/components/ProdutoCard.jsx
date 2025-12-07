function ProdutoCard(props) {
    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow mx-auto max-w-sm gap-2">
            <li className="flex flex-col " >
                <img src={props.img} className="w-xl h-md object-contain" alt="..." />
                <div className="p-6">
                    <h5>{props.name}</h5><span>Preço: R$ {props.price}</span>
                    <p>{props.description}</p>
                    <button className="bg-slate-400 p-2 rounded-md text-white"><a href="#" >Comprar</a></button>
                </div>
            </li>
        </ul>
    )
}
export default ProdutoCard

