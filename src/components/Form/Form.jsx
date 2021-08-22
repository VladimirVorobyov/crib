import './Form.css';
import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import formPhoto from './formP.png'

export default function Forms () {
 const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const [values, setText] = useState('');
    const handleChange = (event) => {
    setText(event.target.value);
  }
  const handleSubmit = (event) => {
    alert('A name was submitted: ' + values);
    event.preventDefault();
  }
  return (
    <>
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
      
      <div className='componets-container'>
 <form onSubmit={handleSubmit} className="input__Form">
        <label>
          Name:
          <input type="text" value={values} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div> <img src={formPhoto} alt="Code" width='550' /> </div>
      </div>
      
    </>
  );
}; 
