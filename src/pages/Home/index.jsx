import { Layout, Menu } from 'antd';
import { MessageOutlined } from '@ant-design/icons';
import React from 'react';
import './style.less'
import MessageList from '../../pages/Model/MessageList'

const { Header, Content, Sider } = Layout;

class App extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render () {
        return (
            <div className="page">
                <Layout>
                    <Header className="header">
                        <div className="logo" />
                    </Header>
                    <Layout>
                        <Sider width={200} className="site-layout-background">
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                <Menu.Item key="1" icon={<MessageOutlined />}>
                                    模板消息
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Content
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}
                            >
                                <MessageList />
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
export default App