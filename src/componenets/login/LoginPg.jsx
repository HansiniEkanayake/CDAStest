import { useEffect, useState } from "react";
import axios from "axios";

import Img1 from "../../assests/hmpg/welcome.jpg";
import { Col, Row, Form, Input, Button} from "antd";
import { UserOutlined, LockOutlined, GoogleOutlined, FacebookOutlined, LinkedinOutlined } from '@ant-design/icons';

function AddCrop() {

  return (
    <div>

        <div>
        <Row>
                <Col offset={4} span={16} style={{paddingTop:"100px",paddingBottom:"100px"}}>
                    <Row>

                        <Col span={8}>

                        <div style={{marginTop:"100px", marginRight:"20px"}}>
                                <Form.Item

                                   
                                    name="userName"
                                    rules={[
                                        {
                                            type: 'email',
                                            message: 'The input is not valid E-mail!',
                                        },
                                        {
                                            required: true,
                                            message: 'Please enter your user name!',
                                        },
                                    ]}
                                >
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                                </Form.Item>

                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Password!',
                                        },
                                    ]}
                                >
                                    <Input
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        type="password"
                                        placeholder="Password"
                                    />
                
                                </Form.Item>

                                <Form.Item style={{marginTop:"100px"}}>
                                    <Button type="primary" htmlType="submit" block className="login-form-button">
                                        Log in
                                    </Button>
                                </Form.Item>
                        </div>
                        
                        </Col>

                        <Col span={16}>

                            <div>
                            <img src={Img1} style={{Height:"400px", width:"400px", marginTop:"5oopx"}}/>
                            </div>

                        </Col>

                    </Row>
                </Col>
        
        </Row>
        </div>
      
    </div>
  );
}

export default AddCrop