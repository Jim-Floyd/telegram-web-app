import React, { useState } from 'react';
import "./Card.css";
import Button from "../Button/Button";

function Card({ac}) {
    const [count, setCount] = useState(0);
    const {title, price, id} = ac;
    const handleIncrement = () => {
        setCount(count + 1);
        onAdd(food);
      };
    const handleDecrement = () => {
        setCount(count - 1);
        onRemove(food);
      };
  return (
    <div className='card'>
        <span className={`${count !==0?"card-badge":"carde-badge--hiden"}`}>{count}</span>
        <h4 className="card__title">
        {title} . <span className="card__price">$ {price}</span>
        <div className="btn-container">
        <Button title={"+"} type={"add"} onClick={handleIncrement} />
        {count !== 0 ? (
          <Button title={"-"} type={"remove"} onClick={handleDecrement} />
        ) : (
          ""
        )}
      </div>
      </h4>
    </div>

  )
}

export default Card