import React, { useEffect, useState } from 'react'
import './Testimonial.css'
import axios from 'axios'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";

function Testimonial() {

    const [testimonials, setTestimonials] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        designation: "",
        message: ""
    });

    useEffect(() => {
        axios.get("http://localhost:4000/api/testimonials")
            .then(res => setTestimonials(res.data))
            .catch(err => console.error(err));
    }, []);

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:4000/api/testimonials", formData)
            .then(res => {
                setTestimonials([res.data, ...testimonials]);
                setFormData({ name: "", designation: "", message: "" });
            })
            .catch(err => console.error(err));
    };

    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 600, settings: { slidesToShow: 1 } }
        ]
    };

    return (
        <>
            <div className="testimonial-container">
                <div className="contact-info">
                    <p className="contact-subtitle">💬 What Our Customers Say</p>
                    <h2 className="contact-title">
                        Real Stories, Built on <br /> Trust and Peace of Mind
                    </h2>
                    <p className="contact-desc">
                        Hear from people who’ve secured their future with PolicyMandi — their experiences, in their own words.
                    </p>
                </div>
                <div className="testimonial-form">
                    <form onSubmit={handleSubmit} >
                        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
                        <input name="designation" value={formData.designation} onChange={handleChange} placeholder="Designation" />
                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" required />
                        <button type="submit">Add Testimonial</button>
                    </form>
                </div>
            </div>
            <div className="testimonial-title-container">
                <div className="testimonial-title">
                    <h2>What Our Clients Say</h2>
                </div>
                <Slider {...settings}>
                    {testimonials.map((t) => (
                        <div key={t._id} className="testimonial-card">
                            <h3 className='testimonial-name'>{t.name}</h3>
                            <p className="testimonial-designation">{t.designation}</p>
                            <p className="testimonial-message">"{t.message}"</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
};

export default Testimonial
