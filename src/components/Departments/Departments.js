import React from 'react';
import { Accordion, Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import './Department.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrescriptionBottleAlt } from '@fortawesome/free-solid-svg-icons'
import Button from '@restart/ui/esm/Button';


const Departments = () => {
    return (
        <div>
            <h2 className="department-title">Departments and Specialists</h2>

            <div className="dept-specialists">
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA7kecsY_fyv-mF04WBXlz5VTRrtLQ-BOmmA&usqp=CAU" />
                </div>

                <div>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Curdiology</Accordion.Header>
                            <Accordion.Body>
                                <FontAwesomeIcon icon={faPrescriptionBottleAlt} /> <p>  Prof Mn Huda</p>
                                <FontAwesomeIcon icon={faPrescriptionBottleAlt} /> <p>  Kabir Chowdhry</p>
                                <FontAwesomeIcon icon={faPrescriptionBottleAlt} /> <p>  Rehaba Shah</p>
                                <FontAwesomeIcon icon={faPrescriptionBottleAlt} /> <p>  Arzeem khan</p>
                                <Form>
                                    <Row className="align-items-center">
                                        <Col xs="auto" className="my-1">
                                            <Form.Label
                                                className="me-sm-2"
                                                htmlFor="inlineFormCustomSelect"
                                                visuallyHidden
                                            >
                                                Preference
                                            </Form.Label>
                                            <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                                                <option value="0">Choose...</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Col>
                                        <Col xs="auto" className="my-1">
                                            <Form.Check
                                                type="checkbox"
                                                id="customControlAutosizing"
                                                label="confirm appointment"
                                            />
                                        </Col>
                                        <Col xs="auto" className="my-1">
                                            <Button type="submit">Submit</Button>
                                        </Col>
                                    </Row>
                                </Form>

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Pulmonology</Accordion.Header>
                            <Accordion.Body>
                                <FontAwesomeIcon icon={faPrescriptionBottleAlt} /> <p>  Ehsan Khan</p>
                                <FontAwesomeIcon icon={faPrescriptionBottleAlt} /> <p>  Rixana Zohn</p>
                                <FontAwesomeIcon icon={faPrescriptionBottleAlt} /> <p>  Arzoo Ezaz</p>
                                <FontAwesomeIcon icon={faPrescriptionBottleAlt} /> <p>  Seher Riya</p>
                                <FontAwesomeIcon icon={faPrescriptionBottleAlt} /> <p>  Amayra Sarker</p>
                                <FontAwesomeIcon icon={faPrescriptionBottleAlt} /> <p>  Bilts Kay</p>
                                <Form>
                                    <Row className="align-items-center">
                                        <Col xs="auto" className="my-1">
                                            <Form.Label
                                                className="me-sm-2"
                                                htmlFor="inlineFormCustomSelect"
                                                visuallyHidden
                                            >
                                                Preference
                                            </Form.Label>
                                            <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                                                <option value="0">Choose...</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Col>
                                        <Col xs="auto" className="my-1">
                                            <Form.Check
                                                type="checkbox"
                                                id="customControlAutosizing"
                                                label="confirm appointment"
                                            />
                                        </Col>
                                        <Col xs="auto" className="my-1">
                                            <Button type="submit">Submit</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Neurology</Accordion.Header>
                            <Accordion.Body>
                                <FontAwesomeIcon icon={faPrescriptionBottleAlt} /> <p>  Asif Ovi</p>
                                <FontAwesomeIcon icon={faPrescriptionBottleAlt} /> <p>  Shirin Chowdhury</p>
                                <FontAwesomeIcon icon={faPrescriptionBottleAlt} /> <p>  Nazneen Khan</p>

                                <Form>
                                    <Row className="align-items-center">
                                        <Col xs="auto" className="my-1">
                                            <Form.Label
                                                className="me-sm-2"
                                                htmlFor="inlineFormCustomSelect"
                                                visuallyHidden
                                            >
                                                Preference
                                            </Form.Label>
                                            <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                                                <option value="0">Choose...</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Col>
                                        <Col xs="auto" className="my-1">
                                            <Form.Check
                                                type="checkbox"
                                                id="customControlAutosizing"
                                                label="confirm appointment"
                                            />
                                        </Col>
                                        <Col xs="auto" className="my-1">
                                            <Button type="submit">Submit</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Pulmonology</Accordion.Header>
                            <Accordion.Body>
                                <FontAwesomeIcon icon={faPrescriptionBottleAlt} /> <p>  Ehsan Khan</p>
                                <FontAwesomeIcon icon={faPrescriptionBottleAlt} /> <p>  Rixana Zohn</p>
                                <FontAwesomeIcon icon={faPrescriptionBottleAlt} /> <p>  Arzoo Ezaz</p>
                                <FontAwesomeIcon icon={faPrescriptionBottleAlt} /> <p>  Seher Riya</p>
                                <FontAwesomeIcon icon={faPrescriptionBottleAlt} /> <p>  Amayra Sarker</p>
                                <FontAwesomeIcon icon={faPrescriptionBottleAlt} /> <p>  Bilts Kay</p>
                                <Form>
                                    <Row className="align-items-center">
                                        <Col xs="auto" className="my-1">
                                            <Form.Label
                                                className="me-sm-2"
                                                htmlFor="inlineFormCustomSelect"
                                                visuallyHidden
                                            >
                                                Preference
                                            </Form.Label>
                                            <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                                                <option value="0">Choose...</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Col>
                                        <Col xs="auto" className="my-1">
                                            <Form.Check
                                                type="checkbox"
                                                id="customControlAutosizing"
                                                label="confirm appointment"
                                            />
                                        </Col>
                                        <Col xs="auto" className="my-1">
                                            <Button type="submit">Submit</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
            <div>
                <InputGroup className="mb-3 search-area">
                    <FormControl
                        placeholder="search any department"
                        aria-label="search"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text id="basic-addon2">search</InputGroup.Text>
                </InputGroup>
            </div>
        </div>




    );
};

export default Departments;