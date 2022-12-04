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
  List,
  Avatar,
  Space,
  Spin,
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
  const [similarCropsList, setSimilarCropsList] = useState([]);
  const [affectedCrop, setAffectedCrop] = useState("");

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

  const showModal = (cropName) => {
    getSimilarCrops(cropName);
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
  const onAffectedCropChange = (value) => {
    //console.log("JI");
    console.log("Inside onAffectedCropChange --> " + value);
    setAffectedCrop(value);
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

  const getSimilarCrops = (cropName) => {
    console.log("Inside --> getSimilarCrops");
    axios
      .get(configs.MODEL_BASE_URL + "getSimilarCrops", {
        params: { cropName: cropName },
      })
      .then((response) => {
        console.log("Inside --> getSimilarCrops : response : " + response);
        console.log(response);
        setSimilarCropsList(response.data);
      });
  };

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  useEffect(() => {
    console.log("executed only once in AlertFrm!");
    getCrops();
  }, [""]);

  return (
    <div>
      <Modal
        title="Predicted Crops"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Row>
          <Col offset={2} span={20}>
            {(() => {
              if (similarCropsList.length > 0) {
                return similarCropsList.map((t, index) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Avatar src="data:image/png;base64,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" />
                      }
                      title={t}
                      // description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                  </List.Item>
                ));
              } else {
                return (
                  <Space size="middle">
                    <Spin size="large" />
                  </Space>
                );
              }
            })()}
          </Col>
        </Row>
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
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item>Alertform</Breadcrumb.Item>
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
                        showSearch
                        placeholder="Select a affected crop from the dropdown list"
                        onChange={onAffectedCropChange}
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
                      <span
                        className="click"
                        onClick={() => {
                          showModal(affectedCrop);
                        }}
                      >
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
