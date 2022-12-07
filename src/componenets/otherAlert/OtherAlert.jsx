import { useEffect, useState } from "react";
import axios from "axios";
import {
  Breadcrumb,
  Layout,
  Typography,
  Col,
  Row,
  Button,
  Form,
  Input,
  Select,
  Upload,
  message,
  Progress,
  notification,
  List,
  Avatar,
  Space,
  Spin,
} from "antd";
import Ban from "../../assests/img/oa.jpg";
import CustomNavBar from "../Common/CustomNavBar";
import configs from "../../assests/configs/config.json";
import storage from "../../assests/configs/firebaseConfig";
import {
  ToTopOutlined,
  MenuUnfoldOutlined,
  FileOutlined,
} from "@ant-design/icons";

import {
  ref,
  uploadBytesResumable,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

function OtherAlert() {
  const { Header, Content, Footer } = Layout;
  const { Title } = Typography;
  const { TextArea } = Input;
  const { Option } = Select;
  const [form] = Form.useForm();
  const MODEL_BASE_URL = configs.MODEL_BASE_URL;

  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);
  const [imageList, setImageList] = useState([]);

  const layout = {
    labelCol: {
      span: 24,
    },
    wrapperCol: {
      span: 24,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 0,
      span: 24,
    },
  };

  // Handle file upload event and update state
  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  const onFinish = (values) => {
    console.log("Success:", values);
    console.log("URL is :", MODEL_BASE_URL + "addOtherAlert");
    const config = {
      headers: {
        "Content-Type": "text/plain",
      },
    };
    axios
      .post(
        MODEL_BASE_URL + "addOtherAlert",
        {
          data: {
            alertTitle: values.alertTitle,
            alertDescription: values.alertDescription,
            imageList: imageList,
          },
        },
        config
      )
      .then(
        (response) => {
          console.log(response);
          const args = {
            message: "Alert Added Successfully",
            description: "",
            duration: 4,
          };
          notification.open(args);
          window.location.replace("Dashboard");
        },
        (error) => {
          console.log("Error Occoured : " + error);
        }
      );
  };
  const onReset = () => {
    form.resetFields();
  };

  const fileToDataUri = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.readAsDataURL(file);
    });

  const uploadProps = {
    // name: "file",
    // action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    // headers: {
    //   authorization: "authorization-text",
    // },
    onChange(info) {
      info.file.status = "done";
      console.log("Inside On change");
      console.log(info.file, info.fileList);
      //setFile(info.file);
      //handleUpload();
      fileToDataUri(info).then((dataUri) => {
        console.log("Data Uri : " + dataUri);
        setFile(dataUri);
      });
      // if (info.file.status !== "uploading") {
      //   console.log(info.file, info.fileList);
      // }
      // if (info.file.status === "done") {
      //   message.success(`${info.file.name} file uploaded successfully`);
      // } else if (info.file.status === "error") {
      //   message.error(`${info.file.name} file upload failed.`);
      // }
    },
  };

  function urlToBlob(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.addEventListener("error", reject);
      xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4) {
          resolve(xhr.response);
        }
      });
      xhr.open("GET", url);
      xhr.responseType = "blob"; // convert type
      xhr.send();
    });
  }

  function handleUpload() {
    if (!file) {
      alert("Please choose a file first!");
    }
    const metadata = {
      contentType: "image/jpeg",
    };

    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    console.log("Line 130");
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        console.log("Snapshot retrieved");
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        // update progress
        setPercent(percent);
        console.log(percent);
      },
      (err) => console.log(err),
      () => {
        // download url

        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
          setImageList((current) => [...current, url]);
        });
      }
    );
  }

  return (
    <div>
      <CustomNavBar />
      <Layout className="layout" style={{ paddingTop: "10px" }}>
        <Content
          style={{
            padding: "0 50px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item>Other Alerts</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              minHeight: "280px",
              padding: "24px",
              background: "#fff",
            }}
          >
            <div>
              <div>
                <img src={Ban} class="card-img-top" />
              </div>
              <Row justify={"center"} style={{ marginTop: "20px" }}>
                <Col offset={5} span={12}>
                  <Title style={{ width: "100%", justifyContent: "center" }}>
                    Add Your New Alert Here..
                  </Title>
                </Col>
              </Row>
              <Row>
                <Col offset={2} span={20}>
                  <Form
                    {...layout}
                    form={form}
                    name="control-hooks"
                    onFinish={onFinish}
                  >
                    <Form.Item
                      name="alertTitle"
                      label="Alert Title"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      name="alertDescription"
                      label="Alert Description"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input.TextArea />
                    </Form.Item>
                    <Col span={24}>
                      <div
                        className="uploadfile shadow-none"
                        style={{ marginTop: "15px", marginBottom: "25px" }}
                      >
                        {/* <Spin tip="Loading" size="small">
                          <div className="content" />
                        </Spin> */}
                        <input
                          type="file"
                          onChange={handleChange}
                          accept="/image/*"
                        />

                        <Button
                          type="dashed"
                          className="ant-full-box"
                          icon={<ToTopOutlined />}
                          style={{ width: "1142px" }}
                          onClick={handleUpload}
                        >
                          <span className="click">Upload Images</span>
                        </Button>
                        <div className="uploadfile shadow-none"></div>
                        {percent > 0 && <Progress percent={percent} />}
                      </div>
                    </Col>

                    <Form.Item {...tailLayout}>
                      <Row style={{ marginTop: "30px" }}>
                        <Col span={4}>
                          <Button
                            block
                            type="primary"
                            htmlType="submit"
                            style={{ backgroundColor: "#088F8F" }}
                          >
                            Submit
                          </Button>
                        </Col>
                        <Col offset={1} span={4}>
                          <Button
                            block
                            htmlType="button"
                            onClick={onReset}
                            style={{
                              backgroundColor: "#088F8F",
                              color: "white",
                            }}
                          >
                            Reset
                          </Button>
                        </Col>
                        <Col span={4}></Col>
                      </Row>
                    </Form.Item>
                  </Form>
                </Col>
              </Row>
            </div>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
}

export default OtherAlert;
