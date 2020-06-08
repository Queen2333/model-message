import { Layout, Menu } from 'antd';
import { MessageOutlined } from '@ant-design/icons';
import React from 'react';
import './style.less'
import RouteWithSubRoutes from './../../router/routeWithSubRoutes'
import { BrowserRouter as Switch, withRouter } from "react-router-dom";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Home extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    
    routerChange = (url) => {
        console.log(this.props)
        this.props.history.push(url)
    }

    render () {
        const { routes } = this.props
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
                                defaultSelectedKeys={['7']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                <SubMenu key="sub1" title="模板消息">
                                    <Menu.Item
                                        key="7"
                                        onClick={() => this.routerChange('/pages/list')}
                                    >我的模板</Menu.Item>
                                    <Menu.Item
                                        key="8"
                                        onClick={() => this.routerChange('/pages/model')}
                                    >模板库</Menu.Item>
                                </SubMenu>
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
                                <Switch>
                                    {routes.map((route, i) => (
                                        <RouteWithSubRoutes key={i} {...route} />
                                    ))}
                                </Switch>
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
export default withRouter(Home)