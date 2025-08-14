import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Calculator.css'

const getBaseRate = (age) => {
    if(age < 30) return 2.5;
    if(age <= 40) return 3.0;
    if(age <= 50) return 4.0;
    return 6.0;
};

const modalFactor = (mode) => {
    switch(mode) {
        case "Monthly": return 0.09;
        case "Quarterly": return 0.265;
        case "Half-yearly": return 0.52;
        default: return 1;
    }
};

function PremiumCalculator() {
  const [form, setForm] = useState({
        name: "", email:  "", phone: "",
        age: 30, sumAssured: 500000, policyTerm: 20, paymentMode: "Yearly"
    });

    const [result, setResult] = useState(null);
    const [status, setStatus] = useState("");

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value});

    const calculate = () => {
        const age = Number(form.age);
        const sum = Number(form.sumAssured);
        const baserate = getBaseRate(form.age);
        const annual =  (sum/1000) * baserate;
        const modal = modalFactor(form.paymentMode);
        const modalPremium = +(annual * modal).toFixed(2);
        return { baserate, annual: +annual.toFixed(2), modalPremium};
       };

       const handleCalc = (e) => {
        e.preventDefault();
        const calc = calculate();
        setResult(calc);
       };
       const handleSave = async () => {
        try{
            setStatus("Saving...");
            const calc = calculate();
            const payload =  {
                name: form.name, email: form.email, phone: form.phone,
                age: form.age, sumAssured: form.sumAssured, policyTerm: form.policyTerm, paymentMode: form.paymentMode,
                calculated: calc
            };
            const res = await axios.post("http://localhost:4000/api/quotes", payload);
            setStatus("Saved");
            setResult(calc);
        }catch(err){
            console.error(err);
            setStatus("Save Failed");
        }
        setTimeout(() => setStatus(""), 2500);
       };
  return (
    <div className="calc-card">
        <h2>Insurance Premium Calculator</h2>
        <form onSubmit={handleCalc} className='calc-form'>
            <div className="row">
                <input name ="name" value={form.name} onChange={handleChange} placeholder='Full name (optional)' />
                <input name= "email" value={form.email} onChange={handleChange} placeholder='Email (optitonal)' />
            </div>

            <div className="row">
                <input name="phone" value={form.phone} onChange={handleChange} placeholder='Phone (optional)' />
                <input name= "age" type='number' min="18" max="100" value={form.age} onChange={handleChange} placeholder='Age'  />
            </div>

            <div className="row">
                <input type="number" name="sumAssured" value={form.sumAssured} onChange={handleChange} placeholder='Sum Assured (Rs)' />
                <input type="number" name='policyTerm' value={form.policyTerm} onChange={handleChange} placeholder='Policy Term (yrs)'  />
            </div>

            <div className="row">
                <select name="paymentMode" value={form.paymentMode} onChange={handleChange}>
                    <option>Yearly</option>
                    <option>Half-yearly</option>
                    <option>Quarterly</option>
                    <option>Monthly</option>
                </select>
                <button type='submit' className='btn'>Calculate</button>
            </div>
        </form>

        {result && (
            <div className="result">
                <p>Base Rate: <strong>{result.baserate} per Rs1000 </strong></p>
                <p>Annual Premium: <strong> Rs{result.annual}</strong></p>
                <p>{form.paymentMode} Premium: <strong>Rs{result.modalPremium}</strong></p>
                <div className="actions">
                    <button className='btn' onClick={handleSave}>Save Quote </button>
                    <span className='status'>{status}</span>
                </div>
            </div>
        )}

    </div>
  )
}

export default PremiumCalculator
