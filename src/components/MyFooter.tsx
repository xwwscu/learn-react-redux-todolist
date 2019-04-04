import { Col, Row } from 'antd';
import * as React from 'react';
import '../styles/MyHello.css';

class MyFooter extends React.Component {
    render() {
        return (
            <footer>
                <Row>
                    <Col span={2} />
                    <Col span={20} className="myhello-footer">
                        &copy;&nbsp;2019 ICE-Byton. All Rights Reserved.
                    </Col>
                    <Col span={2} />
                </Row>
            </footer>
        )
    }
}

export default MyFooter;