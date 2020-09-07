import React from "react";
import { ChartCard, yuan, Field } from "ant-design-pro/lib/Charts";
import Trend from "ant-design-pro/lib/Trend";
import { Row, Col, Tooltip } from "antd";
import numeral from "numeral";

function Chart(props) {
  const { title } = props;
  return (
    <div>
      <Row>
        <Col span={24}>
          <ChartCard
            title="product"
            action={<Tooltip title="指标说明">Icon</Tooltip>}
            total={() => (
              <span dangerouslySetInnerHTML={{ __html: yuan(126560) }} />
            )}
            footer={
              <Field label="日均销售额" value={numeral(12423).format("0,0")} />
            }
            contentHeight={46}
          >
            <span>
              周同比
              <Trend
                flag="up"
                style={{ marginLeft: 8, color: "rgba(0,0,0,.85)" }}
              >
                12%
              </Trend>
            </span>
            <span style={{ marginLeft: 16 }}>
              日环比
              <Trend
                flag="down"
                style={{ marginLeft: 8, color: "rgba(0,0,0,.85)" }}
              >
                11%
              </Trend>
            </span>
          </ChartCard>
        </Col>
      </Row>
    </div>
  );
}

export default Chart;
