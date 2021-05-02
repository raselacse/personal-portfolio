import React from 'react';
import './Header.css'
import myphoto from '../../Image_Icon/Image/MyPhoto.png'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <header className="row flex-row-reverse justify-content-center align-items-center">
                <div className="col-md-5 text-center">
                    <img className="img-fluid" src={myphoto} alt="" srcset="" />
                </div>
                <div className="col-md-7 pl-5">
                    <div className="header-content">
                        <h5 className="font-weight-bolder">Hello I'm</h5>
                        <h1 className="d-block font-weight-bolder">Md. Rasel Hossain</h1>
                        <h5>Front-end Web Developer</h5>
                        <p>
                            A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.
                        </p>
                        <Button as={Link} to="/about" className="btn btn-primary">About Me</Button>
                        <Button variant="outline-primary" as={Link} to="/contact" className="btn ml-5">Get in touch</Button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;