import React,{Component} from 'react';
import {Route, NavLink } from 'react-router-dom';
import  { RouteWithSubRoutes } from '../app/router'

const Red = ({ match, routes}) => {
  console.log(match, routes)

  return(
    <div style={{ height: '100%', display: 'flex'}}>
      <div style={{width: '80px', background: '#ccc'}}>
        <div style={{margin: '10px 0px'}}>
          <NavLink activeStyle={{color:'red'}} to="/red/red-a">红色一区</NavLink>
        </div>
        <div>
          <NavLink activeStyle={{color:'red'}} to="/red/red-b">红色二区</NavLink>
        </div>
      </div>
      <div style={{flex: 1}}>
        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
      </div> 
    </div>
    )
};

export default Red