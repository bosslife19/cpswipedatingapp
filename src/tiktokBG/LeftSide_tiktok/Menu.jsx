import React from 'react'
import { Menu } from 'antd'
import {HomeOutlined} from "@ant-design/icons"
import { IoPersonAddSharp } from 'react-icons/io5'
import { GrUserManager } from 'react-icons/gr'
import { SiHomeassistantcommunitystore } from 'react-icons/si'
import { MdGirl, MdOutlineConnectWithoutContact } from 'react-icons/md'
import { Link } from 'react-router-dom'
const Menus = ({darkTheme}) => {
  return (
    <Menu theme={darkTheme ? 'dark': 'light'} mode='inline' className='menu-bar'> 
        <Menu.Item key="home" icon={<HomeOutlined/>}>
          <Link to="/">
          For you 
          </Link>
        </Menu.Item>
        <Menu.Item key="activity" icon={<IoPersonAddSharp/>}>
        <Link to="/potential">
        Potential Matches 
        </Link>
        </Menu.Item>
        <Menu.Item key="progress" icon={<GrUserManager/>}>
        <Link to="/searchingleft">
           Search 
           </Link>
        </Menu.Item>
        <Menu.Item key="payment" icon={<SiHomeassistantcommunitystore/>}>
        <Link to="/peopleArea">
        People in Your Area
        </Link>
        </Menu.Item> 
        <Menu.Item key="setting" icon={<MdOutlineConnectWithoutContact/>}>
        <Link to="/matched">
        Matched
        </Link>
        </Menu.Item> 
        <Menu.Item key="girl" icon={<MdGirl/>}>
        <Link to="/singleladies">
        Single Women
        </Link>
        </Menu.Item> 
        <Menu.Item key="men" icon={<GrUserManager/>}>
        <Link to="/singleMen">
        Single Men
        </Link>
        </Menu.Item> 
    </Menu>
  )
}

export default Menus