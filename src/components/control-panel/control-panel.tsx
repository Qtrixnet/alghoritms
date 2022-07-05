import React, {FC, FormEvent, useState} from 'react';
import {Col, Form, Button} from "react-bootstrap";

const ControlPanel: FC = () => {
  const [elements, setElements] = useState(100);

  const handleChangeElementsCount = (evt: FormEvent<HTMLInputElement>) => {
    // @ts-ignore
    setElements(evt.target.value)
  }

  return (
    <Form className="d-flex gap-4 p-2">
      <Col>
        <Form.Group className="mb-3 mt-1 d-grid gap-2">
          <Button variant="primary">Перемешать</Button>
          <Form.Text className="text-muted">
            Перемешать элементы в случайном порядке
          </Form.Text>
        </Form.Group>
      </Col>
      <Col>
        <Form.Group className="mb-3 mt-1 d-grid gap-2">
          <Button variant="primary">Запустить</Button>
          <Form.Text className="text-muted">
            Запустить демонстрацию
          </Form.Text>
        </Form.Group>
      </Col>
      <Col>
        <Form.Group className="mb-3 mt-1">
          <Form.Label>Элементы {elements}</Form.Label>
          <Form.Range value={elements} onChange={handleChangeElementsCount}/>
          <Form.Text className="text-muted">
            Выберите количество элементов, которые нужно отсортировать.
          </Form.Text>
        </Form.Group>
      </Col>
    </Form>
  );
};

export default ControlPanel;
