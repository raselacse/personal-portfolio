import React from 'react';
import { Card } from 'react-bootstrap';
import authentic from '../../Image_Icon/Image/authentic.png'
import pathao from '../../Image_Icon/Image/pathao.png'
import weshopping from '../../Image_Icon/Image/Weshopping.png'

const Projects = () => {
    return (
        <div>
            <h1 className="text-center py-3">My Projects</h1>
            <div className="row px-5">
                <div className="col-lg-4 py-2">
                    <Card className="h-100">
                        <Card.Img variant="top" src={authentic} />
                        <Card.Body>
                            <Card.Title>Authentic It Service</Card.Title>
                            <Card.Text>
                                Here we provide a variety of IT related services such as IT Solutions, Security System, Development, Database System etc. We have the services of the most skilled developers. If you want, you can visit our literature. Where you can see our services in more detail and find out about our blog and also about our developer.
                        </Card.Text>
                            <Card.Link href="https://github.com/raselacse/Authentic-IT-Service-client" target="_blank">Git</Card.Link>
                            <Card.Link href="https://authentic---it-service.web.app/" target="_blank">Live</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-4 py-2">
                    <Card className="h-100">
                        <Card.Img variant="top" src={weshopping} />
                        <Card.Body>
                            <Card.Title>WeShopping</Card.Title>
                            <Card.Text>
                                There are various collections available on our web site such as men cloth, women Cloth, Jewelry, Electronics etc. You can also add the product of your choice to our website and unfortunately, if you don't like any of the products on our website.
                        </Card.Text>
                            <Card.Link href="https://github.com/raselacse/WeShopping-client" target="_blank">Git</Card.Link>
                            <Card.Link href="https://weshoppingsbd.web.app/" target="_blank">Live</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-4 py-2">
                    <Card className="h-100">
                        <Card.Img variant="top" src={pathao} />
                        <Card.Body>
                            <Card.Title>Pathao Riders</Card.Title>
                            <Card.Text>
                                In this application you can find your destination and you can get to your destination through our ride sharing.
                        </Card.Text>
                            <Card.Link href="https://github.com/raselacse/Pathao-Riders" target="_blank">Git</Card.Link>
                            <Card.Link href="https://pathao-riders.web.app/" target="_blank">Live</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Projects;