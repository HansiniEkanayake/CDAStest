import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Img1 from "../../assests/hmpg/welcome.jpg";
import { Col, Row, Form, Input, Button, Layout, notification } from "antd";
import {
  UserOutlined,
  LockOutlined,
  GoogleOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import logo from "../../assests/hmpg/logo.png";
import configs from "../../assests/configs/config.json";

function LoginPg() {
  const history = useHistory();
  const { Header, Content, Footer } = Layout;
  const [form] = Form.useForm();
  const MODEL_BASE_URL = configs.MODEL_BASE_URL;
  const layout = {
    labelCol: {
      span: 24,
    },
  };

  const dashboardPage = () => {
    history.push("/Dashboard");
  };

  const onRequestAccountClicked = () => {
    const args = {
      message: "Send the following details to '36-cs-0003@kdu.ac.lk'",
      description:
        "Name , Gender , NIC number , Service ID number , Service Area , Contact Number , Soft copies of NIC and Service ID with GS signature",
      duration: 500,
    };
    notification.open(args);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    console.log("URL is :", MODEL_BASE_URL + "userLogin");
    const config = {
      headers: {
        "Content-Type": "text/plain",
      },
    };
    axios
      .post(
        MODEL_BASE_URL + "userLogin",
        {
          data: {
            userName: values.userName,
            password: values.password,
          },
        },
        config
      )
      .then(
        (response) => {
          console.log(response);
          if (response.data == "Invalid Password") {
            const args = {
              message: "Password you entered is incorrect",
              description: "",
              duration: 5,
            };
            notification.open(args);
          } else if (response.data == "Invalid User") {
            const args = {
              message: "Invalid User",
              description: "",
              duration: 5,
            };
            notification.open(args);
          } else {
            const args = {
              message: "Logged in Successfully",
              description: "",
              duration: 5,
            };
            notification.open(args);
            dashboardPage();
          }
        },
        (error) => {
          console.log("Error Pccoured : " + error);
        }
      );
  };

  return (
    <div>
      <Layout className="layout" style={{ paddingTop: "10px" }}>
        <Content
          style={{
            padding: "0 50px",
          }}
        >
          <Row>
            <Col offset={4} span={16}>
              <div
                style={{
                  minHeight: "280px",
                  padding: "24px",
                  background: "#fff",
                  marginTop: "100px",
                }}
              >
                <Row>
                  <Col span={12}>
                    <img
                      src={logo}
                      style={{
                        height: "100px",
                        width: "120px",
                        marginLeft: "150px",
                      }}
                    />

                    <Form
                      {...layout}
                      form={form}
                      name="control-hooks"
                      onFinish={onFinish}
                    >
                      <Form.Item
                        style={{
                          marginRight: "50px",
                          marginLeft: "30px",
                          marginTop: "50px",
                        }}
                        name="userName"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your user name!",
                          },
                        ]}
                      >
                        <Input
                          prefix={
                            <UserOutlined className="site-form-item-icon" />
                          }
                          placeholder="Username"
                        />
                      </Form.Item>

                      <Form.Item
                        style={{
                          marginRight: "50px",
                          marginLeft: "30px",
                          marginTop: "50px",
                        }}
                        name="password"
                        rules={[
                          {
                            required: true,
                            message: "Please input your Password!",
                          },
                        ]}
                      >
                        <Input
                          prefix={
                            <LockOutlined className="site-form-item-icon" />
                          }
                          type="password"
                          placeholder="Password"
                        />
                      </Form.Item>

                      <Form.Item
                        style={{
                          marginTop: "50px",
                          marginRight: "50px",
                          marginLeft: "30px",
                        }}
                      >
                        <Button
                          type="primary"
                          htmlType="submit"
                          block
                          className="login-form-button"
                        >
                          Login
                        </Button>
                      </Form.Item>

                      <Form.Item
                        style={{
                          marginTop: "50px",
                          marginRight: "50px",
                          marginLeft: "30px",
                        }}
                      >
                        <Button
                          type="primary"
                          block
                          className="login-form-button"
                          onClick={onRequestAccountClicked}
                        >
                          Request Account
                        </Button>
                      </Form.Item>
                    </Form>
                  </Col>

                  <Col span={12}>
                    <div>
                      <img
                        src={Img1}
                        style={{ height: "500px", width: "450px" }}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
}

export default LoginPg;
