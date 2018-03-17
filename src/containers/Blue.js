import React,{Component} from 'react';
import { Link } from 'react-router-dom';
require('../assets/css/blue.scss')

const Blue = ({ match: { params } }) => (
  <div className="blue">
     <p className="blue-title">蓝色部分</p> 
     <Link to="/login"> 返回登陆 </Link>
     <div className="border-one">我是一像素边框</div>

     <div className="border-test">border-test</div>
  </div>
);

export default Blue