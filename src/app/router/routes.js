import React from 'react';
import Loadable from 'react-loadable';
import { Redirect }from "react-router-dom";
import {greenThunk} from '../../store/actions/thunk';

const Loading=(props)=>{
  return <div>Loading...</div>
}

/*
  loader: 需要异步加载的组件,
  loading: 用于组件加载的占位显示loading状态的组件,
  delay：(单位毫秒) 组件加载过快时loading会出现闪烁
  被Loadable包装的组件有一个preload的静态方法，预加载一些组件
*/
const LoadableHome = Loadable({
  loader: () =>import(/* webpackChunkName: 'Home' */'../../containers/Home'),
  loading: Loading,
});
const LoadableRed = Loadable({
  loader: () =>import(/* webpackChunkName: 'Red' */'../../containers/Red'),
  loading: Loading,
});
const LoadableRedChildA = Loadable({
  loader: () =>import(/* webpackChunkName: 'RedChild' */'../../containers/RedChild'),
  loading: Loading,
});
// 如果RedChildTwo名字为RedChildB加载失败
const LoadableRedChildB = Loadable({
  loader: () =>import(/* webpackChunkName: 'RedChildTwo' */'../../containers/RedChildTwo'),
  loading: Loading,
});
const LoadableGreen = Loadable({
  loader: () =>import(/* webpackChunkName: 'Green' */'../../containers/Green'),
  loading: Loading,
});
const LoadableBlue = Loadable({
  loader: () =>import(/* webpackChunkName: 'Blue' */'../../containers/Blue'),
  loading: Loading,
});
const LoadableUser = Loadable({
  loader: () =>import(/* webpackChunkName: 'User' */'../../containers/User'),
  loading: Loading,
});
const LoadableLogin = Loadable({
  loader: () =>import(/* webpackChunkName: 'Login' */'../../containers/Login'),
  loading: Loading,
});

const routesConfig=[
{
  path: '/',
  exact: true,
  component: LoadableHome,
  thunk: ()=>{},
  routes: [
     {
        path: '/red',
        component: LoadableRed,
        thunk: ()=>{},
        routes: [
          {
            path: '/red/red-a',
            component: LoadableRedChildA,
            thunk: ()=>{},
          },
          {
            path: '/red/red-b',
            component: LoadableRedChildB,
            thunk: ()=>{},
          }
        ]
      },{
        path: '/green',
        component: LoadableGreen,
        thunk: greenThunk,
      },{
        path: '/blue',
        component: LoadableBlue,
        thunk: ()=>{},
      },  {
        path: '/user',
        component: LoadableUser,
        thunk: ()=>{},
      }, {
        path: '/login',
        component: LoadableLogin,
        thunk: ()=>{}
      }
  ]}];

export default routesConfig;




