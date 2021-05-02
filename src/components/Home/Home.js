import React from 'react';
import './Home.css'
import { Button } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import authentic from '../../Image_Icon/Image/authentic.png'
import weshopping from '../../Image_Icon/Image/Weshopping.png'
import pathao from '../../Image_Icon/Image/pathao.png'
import football from '../../Image_Icon/Image/football club.png'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Header />
            <section>
                <div className="py-5">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="d-flex justify-content-center align-items-center w-75">
                            <h2>Some of my works</h2>
                            <hr style={{ fontVariant: "black" }} />
                            <Button as={Link} to="/projects" variant="outline-primary">All Works</Button>
                        </div>
                    </div>
                    <div className="row projects">
                        <div className="col-md-6">
                            <img className="img-fluid mt-5" src={authentic} alt="" srcset="" />
                        </div>
                        <div className="col-md-6">
                            <img className="img-fluid mt-5" src={weshopping} alt="" srcset="" />
                        </div>
                        <div className="col-md-6">
                            <img className="img-fluid mt-5" src={pathao} alt="" srcset="" />
                        </div>
                        <div className="col-md-6">
                            <img className="img-fluid mt-5" src={football} alt="" srcset="" />
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center py-5">
                    <div className="w-50 text-center">
                        <h4>What's Next</h4>
                        <h1>Get In Touch</h1>
                        <p>I'd Love to hear from you . Whether you have a question or just want to say hi, fell free to drop a message. I'll try my best to get back to you!</p>
                        <Button as={Link} to="/contact" variant="outline-primary">Say Hello</Button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Home;