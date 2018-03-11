import React,{Component} from 'react';
import { Link } from 'react-router-dom';
const styles = {};

styles.fill = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};

styles.rgb = {
  ...styles.fill,
  color: "white",
  paddingTop: "20px",
  fontSize: "30px"
};

const Blue = ({ match: { params } }) => (
  <div>
     <p>蓝色部分</p> 
     <Link to="/login"> 返回登陆 </Link>
  </div>
);

export default Blue