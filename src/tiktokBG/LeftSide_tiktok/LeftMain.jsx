// import { Button, Layout, theme } from 'antd'
// import React, { useState } from 'react'
// import TiktokLogo from './tiktokLogo';
// import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons'
// import Menus from './Menu';
// import ToggleThemeButton from './ToggleThemeButton';
// // import {FireFilled} from "@ant-design/icons"

// const {Header, Sider} =Layout;
// const LeftMain = () => {
//   const [darkTheme, setDarkTheme] = useState(true)
//   const [collapsed, setCollapsed] = useState(false)
//   const toggleTheme = () =>{
//     setDarkTheme(!darkTheme )
//   }
//   const {
//     token: {colorBgContainer},
//   } = theme.useToken();
//   return (
//  <Layout className='don'>
//       <Sider collapsed={collapsed}
//        collapsible
//        trigger={null}
//       theme={darkTheme ? 'dark' : 'light'}
//       className="sidebared">
//         <TiktokLogo/>
//         <Menus darkTheme={darkTheme}/>
//         <ToggleThemeButton darkTheme={darkTheme} 
//         toggleTheme={toggleTheme }/>
//       </Sider>
//       <Layout className='mobiledHam'>
//         {/* <Header style={{padding:"50px", background:"transparent"}}> */}
        
//           <Button type='text' className='toggle'style={{padding:0, background:colorBgContainer}}
//           onClick={()=>setCollapsed(!collapsed)}
//           icon={collapsed ? <MenuUnfoldOutlined /> :
//         <MenuFoldOutlined /> }   />
//         {/* </Header> */}
//       </Layout>
//  </Layout>
//    );
// }

// export default LeftMain