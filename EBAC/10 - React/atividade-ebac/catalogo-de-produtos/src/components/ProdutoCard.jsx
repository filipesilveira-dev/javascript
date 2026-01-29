import styled from "styled-components";

const ItemContainer = styled.div`
    padding: .75rem;
    background-color: #e2e8f0;
    border-radius: 6px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 
              0 1px 2px -1px rgba(0, 0, 0, 0.1);
    margin-left: auto;
    margin-right: auto;
    width: 100%
    height: 100%;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ItemImg = styled.img`
  width: 100%;
  object-fit: contain;
`;
const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;
`;

const ItemTitle = styled.h5`
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

const AddToCart = styled.button`
  background-color: #94a3b8; /* bg-slate-400 */
  padding: 0.25rem; /* p-1 (4px) */
  border-radius: 0.375rem; /* rounded-md (6px) */
  color: #ffffff; /* text-white */
  font-size: 0.875rem; /* text-sm (14px) */
  line-height: 1.25rem; /* (ajuste automático do text-sm) */
  border: none;

  &:hover {
    background-color: #64748b; /* hover:bg-slate-500 */
    cursor: pointer; /* hover:cursor-pointer */
  }
`;

function ProdutoCard(props) {
  return (
    <ItemContainer>
      <Item>
        <ItemImg src={props.img} alt="..." />
        <ItemContent>
          <ItemTitle>{props.title}</ItemTitle>
          <span className="text-xs">
            <span className="font-bold">Preço:</span> R$ {Number(props.price)}
          </span>
          <p className="text-xs text-justify">
            <span className="font-bold">Descrição:</span> {props.description}
          </p>
          <AddToCart>
            Adicionar ao Carrinho
          </AddToCart>
        </ItemContent>
      </Item>
    </ItemContainer>
  );
}
export default ProdutoCard;
