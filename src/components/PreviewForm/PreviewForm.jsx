import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function PreviewForm() {

    return (
        <Form>
            <Form.Group className="mb-3" controlId="titlePreview">
                <Form.Label>Titre de l'extrait</Form.Label>
                <Form.Control type="text" placeholder="Entrer le titre" />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Parcourir les fichiers</Form.Label>
                <Form.Control type="file" />
            </Form.Group>
            <Button type="submit">Submit</Button>
        </Form>
    )

}

export default PreviewForm;