import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import style from '../assets/css/blue.scss'

const Blue = ({ match: { params } }) => (
  <div className={style.blue}>
     <p className={style.blueTitle}>蓝色部分</p>
     <Link to="/login"> 返回登陆 </Link>
     <div className={style.borderOne}>我是一像素边框</div>

     <div className={style.borderTest}>border-test</div>
  </div>
);

export default Blue