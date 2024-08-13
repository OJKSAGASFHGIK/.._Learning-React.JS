// import s from './css.module.css';
import React, {useState} from "react";

function OnChangeEvent({title="Register purchase // onChange event handler", id}){    
    const [name, setName] = useState("");
    function handleName(event){
        setName(event.target.value);
    }

    const [quantity, setQuantity] = useState();
    function handleQuantity(event){
        setQuantity(event.target.value);
    }

    const [comment, setComment] = useState();
    function handleComment(event){
        setComment(event.target.value);
    }

    const [payment, setPayment] = useState();
    function handlePayment(event){
        setPayment(event.target.value);
    }

    const [shipping, setShipping] = useState("Unknown");
    function handleShipping(event){
        setShipping(event.target.value);
    }
    
    return (
        <>
            <h1 className="line" id={id}>{title}</h1>
            <div className="flex-space-around">
                <div>
                    <input value={name} onChange={handleName} />
                    <p>Name: {name}</p>
                </div>
                <div>
                    <input value={quantity} onChange={handleQuantity} type="number" />
                    <p>Quantity: {quantity}</p>
                </div>
                <div>
                    <textarea value={comment} onChange={handleComment} placeholder="textarea" />
                    <p>Comment: {comment}</p>
                </div>
            </div>
            <div className="flex-space-around">
                <select value={payment} onChange={handlePayment}>
                    <option value="">Select an option</option>
                    <option value="Visa">Visa</option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="Giftcard">Giftcard</option>
                </select>
                <div>
                    <label><input 
                    value="Pick Up" checked={shipping === "Pick Up"}
                    onChange={handleShipping}
                    type="radio" />
                    Pick Up
                    </label>
                    <label><input 
                    value="Delivery" checked={shipping === "Delivery"}
                    onChange={handleShipping}
                    type="radio" />
                    Delivery
                    </label>
                    <p>Shipping: {shipping}</p>
                </div>
            </div>
            
        </>
    )
}

export default OnChangeEvent