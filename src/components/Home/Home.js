import React, { useEffect, useState } from 'react';
import {  Carousel, Row} from 'react-bootstrap';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Home.css'

const Home = () => {
    const [serviceDetails, setServiceDetails] = useState([]);
    useEffect(() => {
        fetch('./serviceDatas.JSON')
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, []);
    return (
        <div>
            <Carousel className="home-banner" variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.fidelity.com/bin-public/060_www_fidelity_com/images/rising_healthcare_costs_2019_twitter.jpg"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwtEX5irwEEGah_NggP8FDVgmBL9HHDJ__Mg&usqp=CAU"
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://s3.amazonaws.com/utep-uploads/wp-content/uploads/online-regis-college/2019/11/26092224/Types-of-Health-Care-Facilities.jpg"
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>
            <div>

<div className="services-header">
<h2>Everyone deserves our best service</h2>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9QIg4ywDn9VV3tsHNds8Tpa56jfEPHuKyHQ&usqp=CAU" />


   

</div>



<div className="services-part">
    
    <Row xs={1} md={3} className="g-4">
        {
            //    all  services and details
            serviceDetails.map(service => <ServiceDetail
                key={service.key}
                service={service}></ServiceDetail>)
        }
    </Row>
</div>
</div>

           
        </div>
    );
};

export default Home;