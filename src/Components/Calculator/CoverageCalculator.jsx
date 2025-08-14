import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Calculator.css'

function CoverageCalculator() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        income: 500000,
        liabilities: 200000,
        multiplier: 10,
    });

    const [result, setResult] = useState(null);
    const [status, setStatus] = useState("");

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value});

    const calculate = () => {
        const { income, liabilities, multiplier} = form;
        const coverage = (Number(income) * Number(multiplier)) + Number(liabilities);
        return { coverage: +coverage.toFixed(2) };
    };

    const handleCalc = (e) => {
        e.preventDefault();
        setResult(calculate());
    };
    
    const handleSave = async () => {
        try{
            setStatus("Saving...");
            const calc = calculate();
            const payload = {...form, coverageAmount: calc.coverage};
            await axios.post("http://localhost:4000/api/coverage", payload);
            setStatus("Saved");
        }catch(err){
            console.error(err);
            setStatus("Save Failed");
        }
        setTimeout(() => setStatus(""), 3000);
    };
  return (
    <div className="calc-card">
        <h2>Coverage Calculator</h2>
        <form onSubmit={handleCalc} className="calc-form">
            <div className="row">
                <input name='name' value={form.name} onChange={handleChange} placeholder='Name' />
                <input name='email' value={form.email} onChange={handleChange} placeholder='Email..' />
            </div>
            <div className="row">
                <input type="number" name='income' value={form.income} onChange={handleChange} placeholder='Annual Income' />
                <input type="number" name='liabilities' value={form.liabilities} onChange={handleChange} placeholder='Liabilities' />
            </div>
            <div className="row">
                <input type="number" name='multiplier' value={form.multiplier} onChange={handleChange} placeholder='Multiplier' />
                <button className="btn" type='submit'>Calculate</button>
            </div>
            
        </form>

        { result && (
            <div className="result">
                <p>Required Coverage: <strong>Rs.{result.coverage}</strong></p>
                <div className="actions">
                    <button className="btn" onClick={handleSave}>Save</button>
                    <span className='status'>{status}</span>
                </div>
            </div>
        )}
    </div>
  )
}

export default CoverageCalculator
