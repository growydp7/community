import * as React from 'react';
import { Button, Row, Col, Image, Typography } from 'antd'
import './index.less';

const { Title, Paragraph } = Typography;

const ListItem: React.FC<any> = ({ item }) => {
  return (
    <div className="article-item">
      <Title>{ item.article_info?.title }</Title>
      <div className="article-item__info">
        <span>{ item.author_user_info?.user_name }</span>
        <span>{ item.article_info?.ctime }</span>
      </div>
      <Row>
        <Col>
          <Image
            width={200}
            src={item.article_info?.cover_image}
          />
        </Col>
        <Col>
          <Paragraph>
            { item.article_info?.brief_content }
          </Paragraph>
        </Col>
      </Row>
    </div>
  )
}

export default ListItem