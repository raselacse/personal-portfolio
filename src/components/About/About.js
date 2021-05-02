import React from 'react';
import myphoto from '../../Image_Icon/Image/MyPhoto.png'

const About = () => {
    return (
        <header className="row justify-content-center">
            <div className="col-md-5 pl-5">
                <img className="img-fluid" src={myphoto} alt="" srcset="" />
                <div className="header-content">
                    <h5 className="font-weight-bolder">Hello I'm</h5>
                    <h1 className="d-block font-weight-bolder">Md. Rasel Hossain</h1>
                    <p className="d-block font-weight-bolder">
                        A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.
                    </p>
                </div>
            </div>
            <div className="col-md-7 text-center">
                <h1>My Skills</h1>
            </div>
        </header>
    );
};

export default About;