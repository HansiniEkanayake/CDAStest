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
  Modal,
  notification,
} from "antd";
import Ban from "../../assests/img/formb.jpg";
import CustomNavBar from "../Common/CustomNavBar";
import configs from "../../assests/configs/config.json";
import {
  ToTopOutlined,
  MenuUnfoldOutlined,
  FileOutlined,
} from "@ant-design/icons";
function Alertform() {
  const { Header, Content, Footer } = Layout;
  const { Title } = Typography;
  const { TextArea } = Input;
  const { Option } = Select;
  const [form] = Form.useForm();
  const MODEL_BASE_URL = configs.MODEL_BASE_URL;

  const [api, contextHolder] = notification.useNotification();

  const [cropsList, setCropsList] = useState([]);

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const getCrops = () => {
    console.log("Inside --> getCrops");
    const config = {
      headers: {
        "Content-Type": "text/plain",
      },
    };
    axios
      .get(configs.MODEL_BASE_URL + "getCropsList", config)
      .then((response) => {
        console.log("Inside --> getCrops : response : " + response);
        console.log(response);
        setCropsList(response.data);
      });
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    console.log("URL is :", MODEL_BASE_URL + "addAlert");
    const config = {
      headers: {
        "Content-Type": "text/plain",
      },
    };
    axios
      .post(
        MODEL_BASE_URL + "addAlert",
        {
          data: {
            cropName: values.cropName,
            affectedCrop: values.affectedCrop,
            preventMethods: values.preventMethods,
            otherDetails: values.otherDetails,
            imageList: ["1", "2"],
          },
        },
        config
      )
      .then(
        (response) => {
          console.log(response);
          // notification["success"].open({
          //   message: "Alert Added Successfully",
          //   description: "",
          // });
          // api["success"]({
          //   message: "Alert Added Successfully",
          //   description: "",
          // });
          const args = {
            message: "Alert Added Successfully",
            description: "",
            duration: 4,
          };
          notification.open(args);
          window.location.replace("Alertform");
        },
        (error) => {
          console.log("Error Pccoured : " + error);
        }
      );
  };
  const onReset = () => {
    form.resetFields();
  };
  const onGenderChange = () => {
    console.log("JI");
  };

  const uploadProps = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  useEffect(() => {
    console.log("executed only once!");
    getCrops();
  }, [""]);

  return (
    <div>
      <Modal
        title="Add Note"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <TextArea rows={6} placeholder="Type your note here" />
      </Modal>
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
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
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
                      name="affectedCrop"
                      label="Affected Crop"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Select
                        placeholder="Select a affected crop from the dropdown list"
                        onChange={onGenderChange}
                        allowClear
                      >
                        {(() => {
                          if (cropsList.length > 0) {
                            return cropsList.map((t, index) => (
                              <Option value={t.Crop}>{t.Crop}</Option>
                            ));
                          } else {
                            return <Option value={""}>Loading...</Option>;
                          }
                        })()}
                      </Select>
                    </Form.Item>
                    <Form.Item
                      name="preventMethods"
                      label="Prevention Methods"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input.TextArea />
                    </Form.Item>
                    <Form.Item name="otherDetails" label="Other Details">
                      <Input.TextArea />
                    </Form.Item>
                    <Col span={24}>
                      <div
                        className="uploadfile shadow-none"
                        style={{ marginTop: "15px", marginBottom: "25px" }}
                      >
                        <Upload {...uploadProps}>
                          <Button
                            type="dashed"
                            className="ant-full-box"
                            icon={<ToTopOutlined />}
                            style={{ width: "1142px" }}
                          >
                            <span className="click">Upload Images</span>
                          </Button>
                        </Upload>
                        <div className="uploadfile shadow-none"></div>
                      </div>
                    </Col>

                    <Button block icon={<FileOutlined />}>
                      <span className="click" onClick={showModal}>
                        Get Predictions
                      </span>
                    </Button>

                    <Form.Item {...tailLayout}>
                      <Row style={{ marginTop: "30px" }}>
                        <Col span={4}>
                          <Button type="primary" htmlType="submit">
                            Submit
                          </Button>
                        </Col>
                        <Col span={4}>
                          <Button htmlType="button" onClick={onReset}>
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

export default Alertform;
