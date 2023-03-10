import { FileOutlined, PieChartOutlined, UserOutlined, DesktopOutlined,TeamOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Home', '1', <PieChartOutlined />),
  getItem('Order', '2', <DesktopOutlined />),
  getItem('Product', 'Smart Phone', <UserOutlined />, [
    getItem('Apple', '3'),
    getItem('Samsung', '4'),
    getItem('GooglePixel', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];
const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  // Return 
  return (
    <Layout style={{minHeight: '100vh'}}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)',}}/>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>

      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer,}}/>
        <Content style={{margin: '0 16px'}}>
          <Breadcrumb style={{margin: '16px 0'}}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{padding: 24, minHeight: "75vh", background: colorBgContainer,}}>
            ss a cat.
          </div>
        </Content>


        <Footer style={{textAlign: 'center', }}>
          lonborey @{new Date().getFullYear()} Created by Lon Borey
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Dashboard;