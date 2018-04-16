import React from 'react';
import Loadable from 'react-loadable';
import { Redirect }from "react-router-dom";
import {homeThunk} from '../../store/actions/thunk';
import PersonCenter from "../../pages/PersonalCenter/PersonalCenter";

const Loading=(props)=>{
  return <div>Loading...</div>
}

/*
  loader: 需要异步加载的组件,
  loading: 用于组件加载的占位显示loading状态的组件,
  delay：(单位毫秒) 组件加载过快时loading会出现闪烁
  被Loadable包装的组件有一个preload的静态方法，预加载一些组件
*/
const LoadableIndex = Loadable({
  loader: () =>import(/* webpackChunkName: 'Home' */'../../pages'),
  loading: Loading,
});
const LoadableCategory = Loadable({
  loader: () =>import(/* webpackChunkName: 'Home' */'../../pages/Category/Category'),
  loading: Loading,
});
const LoadablePinTuan = Loadable({
  loader: () =>import(/* webpackChunkName: 'Home' */'../../pages/PinTuan/PinTuan'),
  loading: Loading,
});
const LoadableSearch = Loadable({
  loader: () =>import(/* webpackChunkName: 'Home' */'../../pages/Search/Search'),
  loading: Loading,
});
const LoadableShoppingCar = Loadable({
  loader: () =>import(/* webpackChunkName: 'Home' */'../../pages/ShoppingCar/ShoppingCar'),
  loading: Loading,
});
const LoadablePerson = Loadable({
  loader: () =>import(/* webpackChunkName: 'Home' */'../../pages/PersonalCenter/PersonalCenter'),
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
const LoadableHome = Loadable({
  loader: () =>import(/* webpackChunkName: 'Green' */'../../pages/Home/Home'),
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
  loader: () =>import(/* webpackChunkName: 'Login' */'../../pages/Login/Login'),
  loading: Loading,
});

const routesConfig=[
{
  path: '/',
  exact: true,
  component: LoadableIndex,
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
        path: '/home',
        component: LoadableHome,
        thunk: homeThunk,
      }, {
        path: '/category',
        component: LoadableCategory,
        thunk: ()=>{},
      }, {
        path: '/pintuan',
        component: LoadablePinTuan,
        thunk: ()=>{},
      }, {
        path: '/shoppingcar',
        component: LoadableShoppingCar,
        thunk: ()=>{},
      }, {
        path: '/person',
        component: LoadablePerson,
        thunk: ()=>{},
      }, {
        path: '/search',
        component: LoadableSearch,
        thunk: ()=>{}
    }, {
        path: '/blue',
        component: LoadableBlue,
        thunk: ()=>{},
      },  {
        path: '/user',
        component: LoadableUser,
        thunk: ()=>{},
      }, {
        path: '/Login',
        component: LoadableLogin,
        thunk: ()=>{}
      }
  ]}];

export default routesConfig;




