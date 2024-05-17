import React, { useState } from "react";

const MyComponent = () => {
    const [car, setCar] = useState({ year: 2024, make: "Ford", model: "Mustang" })

    const handleYearChange = (e) => {
        setCar(c => ({ ...c, year: e.target.value }))
    }
    const handleMakeChange = (e) => {
        setCar(c => ({ ...c, make: e.target.value }))
    }
    const handleModelChange = (e) => {
        setCar(c => ({ ...c, model: e.target.value }))
    }

    const [foods, setFood] = useState(["apple", "Orange", "Banana"])

    const handleAddFood = () => {
        const newFood = document.getElementById("foodInput").value
        setFood(f => [...f, newFood])
        document.getElementById("foodInput").value = ""
    }
    const handleRemoveFood = (index) => {
        setFood(foods.filter((_, i) => i!== index))
    }
    const [cars, setCars] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carMake, setCarMake] = useState("")
    const [carModel, setCarModel] = useState("")

    const handleAddCar = () => {
        
    }
    const handleRemoveCar = (index) => {

    }
    const YearChange = (e) => {
        setCarYear(e.target.value)
    }
    const MakeChange = (e) => {
        setCarMake(e.target.value)
    }
    const ModelChange = (e) => {
        setCarModel(e.target.value)
    }

    return (
        <div>
            <p>Your favourite car is: {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={handleYearChange} /><br />
            <input type="text" value={car.make} onChange={handleMakeChange} /><br />
            <input type="text" value={car.model} onChange={handleModelChange} /><br />
            <div className="container">
                <h2>List of Food</h2>
                <ul>
                    {foods.map((food, index) => <li onClick={() => handleRemoveFood(index)} key={index}>{food}</li>)}
                </ul>
                <input type="text" id="foodInput" />
                <button onClick={handleAddFood}>Add Food</button>
            </div>
            <div>
                <h2>List of car objects</h2>
                <ul></ul>
                <input type="number" value={carYear} onChange={YearChange}/><br />
                <input type="text" value={carMake} onChange={MakeChange}/><br />
                <input type="text" value={carModel} onChange={ModelChange}/><br />
                <button onClick={handleAddCar}>Add Car</button>
            </div>
        </div>
    )
}

export default MyComponent