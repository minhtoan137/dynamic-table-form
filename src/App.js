import { Row, Col, Divider, Button, Checkbox, Form, Input } from "antd";
import GridLayout from "react-grid-layout";
import "antd/dist/reset.css";
import "./App.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { useEffect, useState } from "react";

const DEFAULT_POSITIONS = [
  { x: 0, y: 0, w: 4, h: 2, minW: 4, minH: 2, maxH: 2, i: "key" },
  { x: 4, y: 0, w: 4, h: 2, minW: 4, minH: 2, maxH: 2, i: "name" },
  { x: 0, y: 2, w: 8, h: 2, minW: 4, minH: 2, maxH: 2, i: "age" },
  { x: 0, y: 4, w: 12, h: 2, minW: 4, minH: 2, maxH: 2, i: "school" },
];

function App() {
  const [positions, setPositions] = useState(() => DEFAULT_POSITIONS);
  const [positions1, setPositions1] = useState(() => DEFAULT_POSITIONS);

  const [form] = Form.useForm();

  const handleLayoutChange = (layout) => {
    console.log("🚀 ~ file: App.js:73 ~ handleLayoutChange ~ layout", layout);
    setPositions(layout);
  };

  const handleResize = (layout, oldItem, newItem, placeholder) => {
    console.log({ layout, oldItem, newItem, placeholder });

    if (newItem.w > 4) {
      if (newItem.w > 8) {
        newItem.w = 12;
      } else {
        newItem.w = 8;
      }
    }
  };

  return (
    <div className="App" style={{ padding: 16 }}>
      <GridLayout
        className="layout"
        cols={12}
        rowHeight={30}
        width={window.innerWidth - 64}
        margin={[8, 8]}
        layout={positions}
        onLayoutChange={handleLayoutChange}
        isBounded
        onResizeStop={handleResize}
      >
        {positions.map((position) => {
          return (
            <div gutter={16} key={position.i} className="row flex-center">
              Số giấy phép nước ngập mặn {position.i}
            </div>
          );
        })}
      </GridLayout>

      <Divider />

      <div>
        <h3>Thông tin giấy phép</h3>

        <Divider />

        <Form name="basic" form={form} colon={false}>
          {/* <GridLayout
            className="layout"
            cols={12}
            rowHeight={30}
            width={window.innerWidth - 64}
            margin={[8, 8]}
            layout={positions.map((item) => ({ ...item, static: true }))}
            // onLayoutChange={(layout) => {
            //   setPositions1(layout);
            // }}
          >
            {positions.map((position) => {
              return (
                <div key={position.i} className="row1">
                  <Form.Item
                    label={`Số giấy phép ${position.i}`}
                    name="username"
                    labelAlign="left"
                    style={{ height: "100%", padding: 16 }}
                    // labelCol={{ span: 0 }}
                  >
                    <Input placeholder="LMXK001" />
                  </Form.Item>
                </div>
              );
            })}
          </GridLayout> */}

          <Row gutter={16}>
            <Col span={8}>
              <Row>
                {/* <Col span={8} className="gutter-row col"> */}
                <div
                  style={{ backgroundColor: "red", width: "30%" }}
                  className="child-col flex-center"
                >
                  Số giấy phép
                </div>
                {/* </Col> */}

                <Col span={16} className="gutter-row col">
                  <div className="child-col">
                    <Form.Item
                      // label="Số giấy phép"
                      name="username"
                      labelCol={{ span: 24 / 3 }}
                      labelAlign="left"
                      style={{ height: "100%", padding: 16 }}
                    >
                      <Input placeholder="LMXK001" />
                    </Form.Item>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col span={8}>
              <Row>
                <Col span={8} className="gutter-row col">
                  <div className="child-col flex-center">
                    Loại hình cấp phép
                  </div>
                </Col>

                <Col span={16} className="gutter-row col">
                  <div className="child-col">
                    <Form.Item
                      // label="Số giấy phép"
                      name="username"
                      labelCol={{ span: 24 / 3 }}
                      labelAlign="left"
                      style={{ height: "100%", padding: 16 }}
                    >
                      <Input placeholder="LMXK001" />
                    </Form.Item>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col span={8} className="gutter-row col">
              <div className="child-col">
                <Form.Item
                  // label="Ngày ký giấy phép"
                  name="username"
                  labelCol={{ span: 24 / 3 }}
                  labelAlign="left"
                  style={{ height: "100%", padding: 16 }}
                >
                  <Input placeholder="24/12/2022" />
                </Form.Item>
              </div>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12} className="gutter-row col">
              <Row>
                {/* <Col span={5} className="gutter-row col"> */}
                <div
                  className="child-col flex-center"
                  style={{ backgroundColor: "red", width: "30%" }}
                >
                  Số giấy phép
                </div>
                {/* </Col> */}

                <Col className="gutter-row col">
                  <div className="child-col">
                    <Form.Item
                      // label="Số giấy phép"
                      name="username"
                      labelCol={{ span: 24 / 3 }}
                      labelAlign="left"
                      style={{ height: "100%", padding: 16 }}
                    >
                      <Input placeholder="LMXK001" />
                    </Form.Item>
                  </div>
                </Col>
              </Row>
              {/* <div className="child-col">
                <Form.Item
                  label="Số giấy phép"
                  name="username"
                  labelCol={{ span: 24 / 3 }}
                  labelAlign="left"
                  style={{ height: "100%", padding: 16 }}
                >
                  <Input placeholder="24/12/2022" />
                </Form.Item>
              </div> */}
            </Col>

            <Col span={12} className="gutter-row col">
              <div className="child-col">
                <Form.Item
                  label="Loại hình cấp phép"
                  name="username"
                  labelCol={{ span: 24 / 3 }}
                  labelAlign="left"
                  style={{ height: "100%", padding: 16 }}
                >
                  <Input placeholder="24/12/2022" />
                </Form.Item>
              </div>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={24} className="gutter-row col">
              <div className="child-col">
                <Form.Item
                  label="Số giấy phép"
                  name="username"
                  labelCol={{ span: 24 / 8 }}
                  labelAlign="left"
                  style={{ height: "100%", padding: 16 }}
                >
                  <Input placeholder="24/12/2022" />
                </Form.Item>
              </div>
            </Col>
          </Row>
        </Form>

        {/* {elements} */}
      </div>
    </div>
  );
}

export default App;
