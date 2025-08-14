import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Calculator.css'

function MaturityCalculator() {

   const [form, setForm] = useState({
        email: "",
        name: "",
        principal:"50000",
        rate: "1200",
        years: "20",
    });
    const [result, setResult] = useState(null);
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value});
    };

    const calculate = () => {
        const { principal, rate, years } = form;
        const p = Number(principal);
        const r = Number(rate);
        const t = Number(years);
        const maturityAmount = p + (p * r * t) /100;
        return { maturityAmount: +maturityAmount.toFixed(2)};
    };

    const handleCalc = (e) => {
        e.preventDefault();
        setResult(calculate());
    };

    const handleSave = async () => {
        try{
            setStatus("Saving...");
            const calc = calculate();
            const payload = { ...form, maturityAmount: calc.maturityAmount };
            await axios.post("http://localhost:4000/api/maturity", payload);
            setStatus("Saved");
        }catch(err){
            console.error(err);
            setStatus("Saved Failed");
        }
        setTimeout (() => setStatus("", 3000));
    };

  return (
     <div className="calc-card">
        <h2>Maturity/Benefit Calculator</h2>
        <form onSubmit={handleCalc} className='calc-form'>
            <div className="row">
                <input name="name" value={form.name} placeholder='Name' onChange={handleChange} />
                <input name='email' value={form.email} placeholder='Email' onChange={handleChange} />
            </div>
            <div className="row">
                <input type="number" name='principal' value={form.principal} placeholder='Principal' onChange={handleChange} />
                <input type="number" name="rate" value={form.rate} placeholder='Rate' onChange={handleChange} />
            </div>
            <input type="number" name='years' value={form.years} placeholder='Years' onChange={handleChange} />
            <button className='btn' type="submit">Calculator</button>
        </form>

        {result && (
            <div className="result">
                <p>Maturity Amount: <strong>Rs.{result.maturityAmount}</strong></p>
                <div className="actions">
                    <button className="btn" onClick={handleSave}>Save</button>
                    <span className='status'>{status}</span>
                </div>
            </div>
        )}
    </div>
  )
}

export default MaturityCalculator
