import React, { useState } from "react"

function Counter(){
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState();
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("")

    const increament = () => {
        setCount(c => c + 1)
    }
    const decreament = () => {
        setCount(c => c - 1)
    }
    const reset = () => {
        setCount(0)
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleQuantityChange = (e) => {
        setQuantity(e.target.value)
    }
    const handleCommentChange = (e) => {
        setComment(e.target.value)
    }
    const handlePaymentChange = (e) => {
        setPayment(e.target.value)
    }
    return (
        <>
            <div className="counter-container">
                <p className="count-display">{count}</p>
                <button className="counter-button" onClick={decreament}>Decreament</button>
                <button className="counter-button" onClick={reset}>Reset</button>
                <button className="counter-button" onClick={increament}>Increament</button>
            </div>
            <div className="cont">
                <input type="text" value={name} onChange={handleNameChange}/>
                <p>Name: {name}</p>

                <input type="number" value={quantity} onChange={handleQuantityChange}/>
                <p>Quantity: {quantity}</p>

                <textarea value={comment} onChange={handleCommentChange} placeholder="Enter comment"/>
                <p>Comment: {comment}</p>
                <select value={payment} name="" id="" onChange={handlePaymentChange}>
                    <option value="">select an option</option>
                    <option value="Visa">Visa</option>
                    <option value="Mastercart">Mastercard</option>
                    <option value="Giftcard">Giftcard</option>
                </select>
                <p>Payment: {payment}</p>
            </div>
        </>
    );
}
export default Counter