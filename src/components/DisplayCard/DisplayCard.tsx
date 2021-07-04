import React, { ReactElement } from "react";
import { Card, Skeleton } from "antd";
import { IDisplayCardProps } from "./interface";

function DisplayCard(
  props: IDisplayCardProps
): ReactElement<IDisplayCardProps> {
  return (
    <>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Skeleton loading={props.loading}>
          <span dangerouslySetInnerHTML={{ __html: props.description }}></span>
        </Skeleton>
      </Card>
    </>
  );
}

export default DisplayCard;
