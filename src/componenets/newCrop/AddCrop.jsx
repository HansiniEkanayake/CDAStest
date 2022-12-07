import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
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
  Spin,
  Space,
} from "antd";
import Ban from "../../assests/img/ac.jpg";
import CustomNavBar from "../Common/CustomNavBar";
import configs from "../../assests/configs/config.json";
import {
  ToTopOutlined,
  MenuUnfoldOutlined,
  FileOutlined,
} from "@ant-design/icons";
function AddCrop() {
  const history = useHistory();
  const { Header, Content, Footer } = Layout;
  const { Title } = Typography;
  const { TextArea } = Input;
  const { Option } = Select;
  const [form] = Form.useForm();
  const MODEL_BASE_URL = configs.MODEL_BASE_URL;

  const [familyName, setFamilyName] = useState("");
  const [tempRange, setTempRange] = useState("");
  const [cropZone, setCropZone] = useState("");
  const [phRange, setPhRange] = useState("");
  const [cropSeason, setCropSeason] = useState("");

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

  const addAlertPage = () => {
    history.push("/Alertform");
  };

  const handleFamilyChange = (value, option) => {
    console.log(value);
    console.log(option.children);
    setFamilyName(option.children);
  };
  const handleSeasonChange = (value, option) => {
    console.log(value);
    console.log(option.children);
    setCropSeason(option.children);
  };
  const handleZoneChange = (value, option) => {
    console.log(value);
    console.log(option.children);
    setCropZone(option.children);
  };
  const handlePhChange = (value, option) => {
    console.log(value);
    console.log(option.children);
    setPhRange(option.children);
  };
  const handleTempChange = (value, option) => {
    console.log(value);
    console.log(option.children);
    setTempRange(option.children);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    console.log("values.season :", values.season);
    console.log("URL is :", MODEL_BASE_URL + "addNewCrop");
    showLoadingSpinner();
    const config = {
      headers: {
        "Content-Type": "text/plain",
      },
    };
    axios
      .post(
        MODEL_BASE_URL + "addnewCrop",
        {
          data: {
            family: values.familyName,
            ph: values.phVal,
            season: values.season,
            temperature: values.tempVal,
            zone: values.zone,

            familyText: familyName,
            temperatureText: tempRange,
            zoneText: cropZone,
            phText: phRange,
            seasonText: cropSeason,

            cropName: values.cropName,
          },
        },
        config
      )
      .then(
        (response) => {
          console.log(response);
          const args = {
            message: "Crop Added Successfully",
            description: "",
            duration: 4,
          };
          notification.open(args);
          addAlertPage();
        },
        (error) => {
          console.log("Error Occoured : " + error);
        }
      );
  };
  const onReset = () => {
    form.resetFields();
  };

  let showLoadingSpinner = () => {
    return (
      <Spin tip="Loading" size="large" wrapperClassName="mainContent">
        <div className="content1" />
      </Spin>
    );
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

  return (
    <div className="mainContent">
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
                <img src={Ban} className="card-img-top" />
              </div>
              <Row justify={"center"} style={{ marginTop: "20px" }}>
                <Col offset={5} span={12}>
                  <Title style={{ width: "100%", justifyContent: "center" }}>
                    Add Your New crop Here..
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
                    <div className="row">
                      <Form.Item
                        name="cropName"
                        label="New Crop Name"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>

                      <div className="col">
                        <Form.Item
                          name="familyName"
                          label="Family Name"
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                          <Select
                            showSearch
                            placeholder="Select a family name from the dropdown list"
                            onChange={handleFamilyChange}
                            allowClear
                            listItemHeight={10}
                            listHeight={250}
                          >
                            <Option value={0}>Agaricaceae</Option>
                            <Option value={1}>Alliaceae</Option>
                            <Option value={2}>Amaranthaceae</Option>
                            <Option value={3}>Amaryllidaceae</Option>
                            <Option value={4}>Anacardiaceae</Option>
                            <Option value={5}>Annonaceae</Option>
                            <Option value={6}>Apiaceca</Option>
                            <Option value={7}>Asteraceae</Option>
                            <Option value={8}>Bombacaceae</Option>
                            <Option value={9}>Brassicaceae</Option>
                            <Option value={10}>Bromiliceae</Option>
                            <Option value={11}>Cactaceae</Option>
                            <Option value={12}>Caricaceae</Option>
                            <Option value={13}>Chenopodiaceae</Option>
                            <Option value={14}>Clusiaceae</Option>
                            <Option value={15}>Convolvulaceae</Option>
                            <Option value={16}>Cucurbitaceae</Option>
                            <Option value={17}>Euphorbiaceae</Option>
                            <Option value={18}>Fabaceae</Option>
                            <Option value={19}>Flacourtiaceae</Option>
                            <Option value={20}>Graminae</Option>
                            <Option value={21}>Lauraceae</Option>
                            <Option value={22}>Malvaceca</Option>
                            <Option value={23}>Mertaceae</Option>
                            <Option value={24}>Moraceae</Option>
                            <Option value={25}>Musaceae</Option>
                            <Option value={26}>Myristiccaceae</Option>
                            <Option value={27}>Myrtaceae</Option>
                            <Option value={28}>Orchidaceae</Option>
                            <Option value={29}>Oxaliadaceae</Option>
                            <Option value={31}>Passifloraciae</Option>
                            <Option value={32}>Pedaliaceae</Option>
                            <Option value={33}>Piperaceae</Option>
                            <Option value={34}>Poaceae</Option>
                            <Option value={35}>Punicaceae</Option>
                            <Option value={36}>Rubiaceae</Option>
                            <Option value={37}>Rutaceae</Option>
                            <Option value={38}>Sapindaceae</Option>
                            <Option value={39}>Sapotaceae</Option>
                            <Option value={40}>Solanaceae</Option>
                            <Option value={41}>Sterculiaceae</Option>
                            <Option value={42}>Vitaceae</Option>
                            <Option value={43}>Zingiberaceae</Option>
                          </Select>
                        </Form.Item>

                        <Form.Item
                          name="tempVal"
                          label="Temperature Range"
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                          <Select
                            showSearch
                            placeholder="Select a Temperature Range from the dropdown list"
                            onChange={handleTempChange}
                            allowClear
                          >
                            <Option value={0}>10.0-15.0</Option>
                            <Option value={1}>10.0-20.0</Option>
                            <Option value={2}>10.0-25.0</Option>
                            <Option value={3}>10.0-30.0</Option>
                            <Option value={4}>10.0-40.0</Option>
                            <Option value={5}>15.0-20.0</Option>
                            <Option value={6}>15.0-25.0</Option>
                            <Option value={7}>15.0-30.0</Option>
                            <Option value={8}>15.0-40.0</Option>
                            <Option value={9}>20.0-25.0</Option>
                            <Option value={10}>20.0-30.0</Option>
                            <Option value={11}>20.0-35.0</Option>
                            <Option value={12}>20.0-40.0</Option>
                            <Option value={13}>25.0-30.0</Option>
                            <Option value={14}>25.0-35.0</Option>
                            <Option value={15}>25.0-40.0</Option>
                            <Option value={16}>30.0-35.0</Option>
                            <Option value={17}>Lesss than 20</Option>
                            <Option value={18}>Lesss than 24</Option>
                            <Option value={19}>Lesss than 30</Option>
                            <Option value={20}>Lesss than 46</Option>
                            <Option value={21}>Greater than 20</Option>
                            <Option value={22}>Greater than 27</Option>
                          </Select>
                        </Form.Item>

                        <Form.Item
                          name="phVal"
                          label="PH Value"
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                          <Select
                            placeholder="Select a PH Value Range from the dropdown list"
                            onChange={handlePhChange}
                            allowClear
                          >
                            <Option value={0}>4.0-6.0</Option>
                            <Option value={1}>4.0-9.0</Option>
                            <Option value={2}>5.0-10.0</Option>
                            <Option value={3}>5.0-6.0</Option>
                            <Option value={4}>5.0-7.0</Option>
                            <Option value={5}>5.0-8.0</Option>
                            <Option value={6}>6.0-10.0</Option>
                            <Option value={7}>6.0-6.5</Option>
                            <Option value={8}>6.0-6.5</Option>
                            <Option value={9}>6.0-8.0</Option>
                            <Option value={10}>6.0-9.0</Option>
                            <Option value={11}>Lesss than 7.0</Option>
                          </Select>
                        </Form.Item>
                      </div>

                      <div className="col">
                        <Form.Item
                          name="zone"
                          label="Zone/s"
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                          <Select
                            placeholder="Select zone/s from the dropdown list"
                            onChange={handleZoneChange}
                            allowClear
                          >
                            <Option value={0}>Dry</Option>
                            <Option value={1}>Wet</Option>
                            <Option value={2}>Intermediate</Option>
                            <Option value={3}>Dry & Wet</Option>
                            <Option value={4}>Dry & Intermediate</Option>
                            <Option value={5}>Wet & Intermediate</Option>
                            <Option value={6}>Dry & Wet & Intermediate</Option>
                          </Select>
                        </Form.Item>

                        <Form.Item
                          name="season"
                          label="Season/s"
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                          <Select
                            placeholder="Select Season/s from the dropdown list"
                            onChange={handleSeasonChange}
                            allowClear
                          >
                            <Option value={0}>Yala</Option>
                            <Option value={1}>Maha</Option>
                            <Option value={2}>Yala & Maha</Option>
                          </Select>
                        </Form.Item>
                      </div>
                    </div>

                    <Form.Item {...tailLayout}>
                      <Row style={{ marginTop: "30px" }}>
                        <Col span={4}>
                          <Button type="primary" htmlType="submit" style={{ backgroundColor:"#825C14"}}>
                            Submit
                          </Button>
                        </Col>
                        <Col span={4}>
                          <Button htmlType="button" onClick={onReset} style={{ backgroundColor:"#825C14", color:"white"}}>
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
          FarmCare ©2022 Created by Ekanayaka
        </Footer>
      </Layout>
    </div>
  );
}

export default AddCrop;
