import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import style from '../assets/css/app.scss'
import { config_index } from './config'
import { withRouter } from 'react-router'
import { Icon } from '../components'

class FooterNav extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    selectedTab: '首页',
    fullScreen: false,
  }

  render() {
    const { history, location: {pathname} } = this.props
    if( pathname.includes('/search')||  pathname.includes('/login') ) { // 搜索页面没有底部导航
      return null;
    }
    const { selectedTab } = this.state
    const { nav, commonNav: { color, activeColor, background } } = config_index
    const navbars = nav.filter(_=> _.show === true)
    return(
      <div className={style.tabBar} style={{ width: '100%' }}>
        <TabBar
          className="tabBar"
          unselectedTintColor={color}
          tintColor={activeColor}
          barTintColor={background}>
          {
            navbars.map(({ title, icon, selectedIcon, path }, i)=>
              <TabBar.Item
                selected={selectedTab===title}
                title={title}
                key={title}
                icon={ <Icon type={icon}/> }
                selectedIcon={<Icon type={selectedIcon}/>}

                onPress={() => {
                  this.setState({
                    selectedTab: title,
                  });
                  history.push(path)
                }}
              ></TabBar.Item>
            )
          }
        </TabBar>
      </div>
    )
  }
}

export default withRouter(FooterNav)
