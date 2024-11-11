import React, { useState } from "react";
 import "./styles.css";

const BMICalculator = () => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [message, setMessage] = useState("");

    const calculateBMI = (e) => {
        e.preventDefault();
        if (height && weight) {
            const heightInMeters = height / 100;
            const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
            setMessage(`Your BMI is ${bmi}`);
        } else {
            setMessage("Please enter both height and weight");
        }
    };

    return (
        <section className="calculate section">
            <div className="calculate__container container grid">
                <div className="calculate__content">
                    <div className="section__titles">
                        <h1 className="section__title-border">CALCULATE YOUR BMI </h1>
                        
                    </div>
                    <p className="calculate__description">
                        The body mass index (BMI) calculator calculates your BMI using your height and weight.
                    </p>
                    <form className="calculate__form" onSubmit={calculateBMI}>
                        <div className="calculate__box">
                            <input 
                                type="number" 
                                placeholder="Height" 
                                className="calculate__input" 
                                value={height} 
                                onChange={(e) => setHeight(e.target.value)} 
                            />
                            <label htmlFor="calculate-cm" className="calculate__label">cm</label>
                            
                            <input 
                                type="number" 
                                placeholder="Weight" 
                                className="calculate__input" 
                                value={weight} 
                                onChange={(e) => setWeight(e.target.value)} 
                            />
                            <label htmlFor="calculate-kg" className="calculate__label">kg</label>
                        </div>
                        
                        <button className="button button__flex" type="submit">
                            Calculate Now <i className="ri-arrow-right-line"></i>
                        </button>
                    </form>
                    
                    <p className="calculate__message">{message}</p>
                </div>
                {/* <img src="img/calculate-img.png" alt="calculate-img" className="calculate__img" /> */}
            </div>
        </section>
    );
};

export default BMICalculator;
