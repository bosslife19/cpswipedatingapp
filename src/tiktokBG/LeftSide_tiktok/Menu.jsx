import React from 'react'
import { Menu } from 'antd'
import {HomeOutlined} from "@ant-design/icons"
import { IoPersonAddSharp } from 'react-icons/io5'
import { GrUserManager } from 'react-icons/gr'
import { SiHomeassistantcommunitystore } from 'react-icons/si'
import { MdGirl, MdOutlineConnectWithoutContact } from 'react-icons/md'
const Menus = ({darkTheme}) => {
  return (
    <Menu theme={darkTheme ? 'dark': 'light'} mode='inline' className='menu-bar'> 
        <Menu.Item key="home" icon={<HomeOutlined/>}>
           For you 
        </Menu.Item>
        <Menu.Item key="activity" icon={<IoPersonAddSharp/>}>
        Potential Matches 
        </Menu.Item>
        <Menu.Item key="progress" icon={<GrUserManager/>}>
           Search 
        </Menu.Item>
        <Menu.Item key="payment" icon={<SiHomeassistantcommunitystore/>}>
        People in Your Area
        </Menu.Item> 
        <Menu.Item key="setting" icon={<MdOutlineConnectWithoutContact/>}>
        Matched
        </Menu.Item> 
        <Menu.Item key="girl" icon={<MdGirl/>}>
        Single Women
        </Menu.Item> 
        <Menu.Item key="men" icon={<GrUserManager/>}>
        Single Men
        </Menu.Item> 
    </Menu>
  )
}

export default Menus