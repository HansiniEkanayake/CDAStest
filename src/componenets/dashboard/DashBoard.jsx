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
  Avatar,
  List,
  Select,
  Upload,
  message,
  Modal,
  notification,
  Card,
  Tag,
  Space,
  Spin,
} from "antd";

import Ban from "../../assests/img/formb.jpg";
import CustomNavBar from "../Common/CustomNavBar";
import configs from "../../assests/configs/config.json";
import Alt from "../../assests/img/alertimg.png";
import Tst2 from "../../assests/img/tst.png";
import Crops from "../../assests/hmpg/phone-features.png";
import All from "../../assests/img/vfs.jpg";
import Cd from "../../assests/img/cd.webp";

function Dashboard(navigation) {
  const history = useHistory();
  const { Header, Content, Footer } = Layout;
  const { Title, Text } = Typography;
  const { Meta } = Card;
  const MODEL_BASE_URL = configs.MODEL_BASE_URL;

  const [alertsList, setAlertsList] = useState([]);
  const [similarCropsList, setSimilarCropsList] = useState([]);
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

  const alertformPage = () => {
    history.push("/Alertform");
  };
  const OtherAlertPage = () => {
    history.push("/OtherAlert");
  };
  const cropDisPage = () => {
    history.push("/CropDis");
  };
  const categoriesPage = () => {
    history.push("/Categories");
  };

  const getAlerts = () => {
    console.log("Inside --> getAlerts");
    const config = {
      headers: {
        "Content-Type": "text/plain",
      },
    };
    axios
      .get(configs.MODEL_BASE_URL + "getAlertsList", config)
      .then((response) => {
        console.log("Inside --> getAlerts : response : " + response);
        console.log(response);
        setAlertsList(response.data);
      });
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

  useEffect(() => {
    console.log("executed only once in dashboard!");
    getAlerts();
  }, [""]);

  let createElements = () => {
    const elments = [];
    if (alertsList.length > 0) {
      alertsList.forEach((i) => {
        elments.push(
          <div style={{ marginBottom: "3%" }}>
            <Card
              hoverable
              size="small"
              title={<Title level={3}>Desease in {i.AffectedCrop}</Title>}
              extra={<Tag color="#FF0000">Red Alert</Tag>}
              style={{ width: 900 }}
            >
              <Row>
                <Col span={5}>
                  <Text strong>Prevention Methods :</Text>
                </Col>
                <Col offset={1} span={18}>
                  <p>{i.PreventMethods}</p>
                </Col>
              </Row>
              <Row>
                <Col span={5}>
                  <Text strong>Other Details :</Text>
                </Col>
                <Col offset={1} span={18}>
                  <p>{i.OtherDetails}</p>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Button
                    type="primary"
                    block
                    ghost
                    onClick={() => {
                      showModal(i.AffectedCrop);
                    }}
                  >
                    View Predictions
                  </Button>
                </Col>
                {/* <Col offset={1} span={18}>
                  <p>Content</p>
                </Col> */}
              </Row>
            </Card>
          </div>
        );
      });
    } else {
      elments.push(
        <Card size="small" style={{ width: 900 }}>
          <Title level={2}>Loading Alerts...</Title>
        </Card>
      );
    }
    return elments;
  };

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
          </Breadcrumb>
          <Row>
            <Col span={16}>
              <div
                style={{
                  minHeight: "280px",
                  padding: "24px",
                  background: "#fff",
                }}
              >
                <Title>Desease Alerts</Title>
                {createElements()}
              </div>
            </Col>
            <Col offset={1} span={7}>
              <div
                style={{
                  minHeight: "280px",
                  padding: "24px",
                  background: "#fff",
                }}
              >
                <Card
                  hoverable
                  style={{ width: 365, marginBottom: "25px" }}
                  cover={<img alt="example" src={Alt} />}
                  title="Set Alert"
                >
                  <Button
                    style={{ marginBottom: "20px" }}
                    type="primary"
                    block
                    onClick={alertformPage}
                  >
                    Add New Disease Alert
                  </Button>
                  <Button type="primary" block onClick={OtherAlertPage}>
                    Add Other Alert
                  </Button>
                </Card>

                <Card
                  hoverable
                  style={{ width: 365, marginBottom: "25px" }}
                  cover={<img alt="example" src={Cd} />}
                  title="Crop Diseases"
                >
                  <Button style={{}} type="primary" block onClick={cropDisPage}>
                    See More
                  </Button>
                </Card>

                <Card
                  hoverable
                  style={{ width: 365, marginBottom: "25px" }}
                  cover={<img alt="example" src={All} />}
                  title="Crop Details"
                >
                  <Button
                    style={{}}
                    type="primary"
                    block
                    onClick={categoriesPage}
                  >
                    See More
                  </Button>
                </Card>
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        FarmCare ©2022 Created by Ekanayaka
      </Footer>
    </div>
  );
}

export default Dashboard;
