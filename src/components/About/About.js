
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdBadge, faAmbulance, faHospitalUser, faUserNurse } from '@fortawesome/free-solid-svg-icons'

import './About.css'

const About = () => {


    return (
        <div>

            <div className="information">
                <Card className="about-part" style={{ width: '700px', height: '300px', margin:'10px' }}>
                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDAhjzc4yswtUgdPh6jU6ALuWpCT_tiYfaSQ&usqp=CAU" />
                    <Card.Body>
                        <Card.Title className="card-title"><FontAwesomeIcon icon={faIdBadge} /> About Us</Card.Title>
                        <Card.Text className="card-text">
                            We understand that as a patient of ours, you are probably feeling unwell and perhaps a little uneasy about not knowing what to expect or your way around.In an emergency, what treatment is given by ear? Words of Comfort.

                        </Card.Text>
                        <Card.Link href="#">Our Departments</Card.Link>
                        <Card.Link href="#">Our Doctors</Card.Link>
                    </Card.Body>
                </Card>
            </div>
            <div className="special-cares">
                <CardGroup className="special-services">
                    <Card style={{ width: '700px', height: '500px' }}>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjLfnSHGBjJ6XI6SF5iXgEmJs-saz69illGQ&usqp=CAU" />
                        <Card.Body>
                            <Card.Title><FontAwesomeIcon icon={faAmbulance} />  24hrs Ambulance</Card.Title>
                            <Card.Text>
                                Our Ambulance service is 24 hours. · All ambulances are tip top and new conditions. Contact us 24hrs in a day. .  . 7days in a week.
                            </Card.Text>
                        </Card.Body>

                    </Card>
                    <Card style={{ width: '700px', height: '500px' }}>
                        <Card.Img variant="top" src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator-usa.com/article/2019/05/13/food-politics-and-the-2020-dietary-guidelines-for-americans/9463504-1-eng-GB/Food-politics-and-the-2020-Dietary-Guidelines-for-Americans_wrbm_large.jpg" />
                        <Card.Body>
                            <Card.Title><FontAwesomeIcon icon={faHospitalUser} />  Food and Dietary</Card.Title>
                            <Card.Text>
                                Nutrition is the process of taking in food and using it for growth, metabolism, and repair.Patient meals are an integral part of hospital treatment and crucial to aid recovery.
                            </Card.Text>
                        </Card.Body>

                    </Card>
                    <Card style={{ width: '700px', height: '500px'} }>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyfpowKrP2RoG9gn53dQnXJoqSfq0VX3w9Xw&usqp=CAU" />
                        <Card.Body>
                            <Card.Title><FontAwesomeIcon icon={faUserNurse} />  Special Nursing</Card.Title>
                            <Card.Text>
                                Specialized Nursing Services is a leading provider of in-home care services.Nursing service is the part of the total health organization.
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </CardGroup>
            </div>
        </div>




    );
};

export default About;