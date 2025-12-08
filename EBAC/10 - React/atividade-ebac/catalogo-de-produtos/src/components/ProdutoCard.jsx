function ProdutoCard(props) {
    return (
        <ul 
        className="space-y-4 p-3 bg-slate-200 rounded-md shadow mx-auto w-full h-full gap-2 pb-0">
            <li 
            className="flex flex-col justify-center" >
                <img src={props.img}
                className="w-xl h-md object-contain" alt="..." />
                <div 
                className="flex flex-col justify-center items-center p-2 gap-2">
                    <h5 
                    className="font-bold text-sm">{props.name}</h5><span className="text-xs"><span className="font-bold">Preço:</span> R$ {Number(props.price)}</span>
                    <p 
                    className="text-xs text-justify"><span className="font-bold">Descrição:</span> {props.description}</p>
                    <button 
                    className="bg-slate-400 p-1 rounded-md text-white text-sm"><a href="#" >Comprar</a></button>
                </div>
            </li>
        </ul>
    )
}
export default ProdutoCard

