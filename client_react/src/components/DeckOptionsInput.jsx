import React from 'react';
import { Form, Button } from 'semantic-ui-react';

const DeckOptionsInput = function (props) {
  return (
    <div> 
      <Form>
        <Form.Group grouped>
          <label>HTML radios</label>
          <Form.Field label='Hrsf-72' control='input' type='checkbox' />
          <Form.Field label='Hrsf-73' control='input' type='checkbox' />
          <Form.Field label='Staff' control='input' type='checkbox' />
          <Form.Field label='HIR' control='input' type='checkbox' />
          <Form.Field label='All' control='input' type='checkbox' />
        </Form.Group>
      </Form>

      <Button basic color='orange' >Start</Button>

    </div>
  )
}

export default DeckOptionsInput;