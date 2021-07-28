import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';

class BeastsForm extends React.Component {
  render() {
    return (
      <Form  onSubmit={this.props.uponSubmit}>
        <Form.Group>
          <Form.Label>Beast By Number Of Horns</Form.Label>
          <Form.Control name="test" as="select" aria-label="Default select example">
            <option>Select # of horns</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={100}>100</option>
          </Form.Control>
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          Enter
        </Button>

      </Form>
    );
  }
}

export default BeastsForm;