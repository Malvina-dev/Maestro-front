import { Card, Badge, Row, Col } from "react-bootstrap";
import { getAllProjectList } from "../../api/apiProjectList.js";
import { useState, useEffect } from "react";


function ProjectList() {
    const [projectList, setProjectList] = useState([]);

    async function getProjects() {
        const allProjects = await getAllProjectList();
        setProjectList(allProjects);
    }

    useEffect(() => {
        getProjects;
    }, []);

    return (
        // titre
        <div className="title__container">
            <h3 className="title">Projets en cours</h3>
            {projectList.map((project) => (
            <Card
                key={project.id}
                className="border border-primary rounded-3 shadow-sm"
                style={{
                    backgroundColor: "#f8f5e4",
                    maxWidth: "400px",
                    borderWidth: "2px",
                }}
            >
                <Card.Body>
                    <Row className="align-items-center">
                        {/* Logo dossier */}
                        <Col xs="auto">
                            <div
                                className="d-flex align-items-center justify-content-center"
                                style={{
                                    backgroundColor: "#a3c1b0",
                                    width: "80px",
                                    height: "80px",
                                    borderRadius: "15px",
                                }}
                            ></div>
                        </Col>

                        {/* titre du projet */}
                        <Col className="text-center">
                            <Badge
                                pill
                                style={{
                                    backgroundColor: "#a3c1b0",
                                    color: "black",
                                    fontSize: "0.9rem",
                                }}
                                className="mb-2 d-block"
                            >
                                {project.name}
                            </Badge>
                            {/* status */}
                            <Badge
                                pill
                                style={{
                                    backgroundColor: "#a3c1b0",
                                    color: "black",
                                    fontSize: "0.9rem",
                                }}
                                className="mb-2 d-block"
                            >
                                {project.status}
                            </Badge>
                            {/* date */}
                            <Badge
                                pill
                                style={{
                                    backgroundColor: "#a3c1b0",
                                    color: "black",
                                    fontSize: "0.9rem",
                                }}
                                className="d-block"
                            >
                                {project.deadline}
                            </Badge>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProjectList;
