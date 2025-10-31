import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./DataFormComponent.scss";

function DataFormComponent(props, configFields) {
    function handelSubmit(event) {
        event.preventDefault();
    }

    return (
        <>
            <Container>
                <Row>
                    <Col sm={6}>
                        <Form
                            className="data-form"
                            method="post"
                            onSubmit={(event) => handelSubmit(event)}
                        >
                            <Container className="data-form-container">
                                {/* EN-TETE */}
                                <Row className="data-form-row-header">
                                    {/* <Col>Header title</Col> */}
                                    <Col>{props.headertitle}</Col>
                                </Row>

                                {/* LIGNE */}

                                <Row className="data-form-row-body">
                                    {configFields.map((configField) => (
                                        <Form.Group
                                            key={configField.name}
                                            className="data-form-row-body-formgroup"
                                            controlId="data-form-row-body-formgroup-id"
                                        >
                                            <Form.Label>
                                                {configField.label}
                                            </Form.Label>
                                            <Form.Control
                                                className="data-form-row-body-formcontrol"
                                                type={configField.type}
                                                placeholder={`Entrez votre ${configField.label}`}
                                                defaultValue={
                                                    props?.[configField.name] ||
                                                    ""
                                                }
                                                // onChange={}
                                            />
                                        </Form.Group>
                                    ))}
                                </Row>

                                {/* BOUTTON */}
                                <Row className="data-form-button">
                                    <Button
                                        className="data-form-mofifier-button"
                                        variant="data-form-mofifier-button"
                                        type="submit"
                                    >
                                        Modifier
                                    </Button>
                                </Row>
                            </Container>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default DataFormComponent;
