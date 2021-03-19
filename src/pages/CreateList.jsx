import React from 'react'
import { useHistory } from 'react-router-dom'
import LIST_SERVICE from '../services/list'
import {  Form, Input, Button, Space  } from 'antd';
import {  MinusCircleOutlined, PlusOutlined  } from '@ant-design/icons';

const CreateList = () => {

  const history = useHistory()
    
  const onFinish = values => {
    LIST_SERVICE.CREATE(values)
    history.push('/')
  };

  const irHome = () => {
    history.push('/')
  }

  return (
    <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
      <Form.Item name="title">
        <Input placeholder="Title of List" />
      </Form.Item>
      <Form.List name="activities">
        {(fields, { add, remove }) => (
          <>
            {fields.map(field => (
              <Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                <Form.Item
                  {...field}
                  name={[field.name, 'description']}
                  rules={[{ required: true, message: 'Activity is required' }]}
                >
                  <Input placeholder="Describe the activity" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(field.name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add an activity
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      <Button type="primary" onClick={irHome}>Ir a Home</Button>
    </Form>
  );
};

export default CreateList
