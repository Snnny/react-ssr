/*
*   宝妈头条
* */
import React, { Component } from 'react'
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import style from '../../../assets/css/home.scss'

class News extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className={style.news}>
        <div className={style.newsHeader}>Lottery</div>
        <div className={style.newsBody}>
          <Carousel className="my-carousel"
                    vertical
                    dots={false}
                    dragging={false}
                    swiping={false}
                    autoplay
                    infinite
                    speed={1000}
                    autoplayInterval={2000}
                    resetAutoplay={false}>
            {
              ['ring', 'ruby', 'iPhone', 'iPod', 'sorry', 'tourism', 'coke', 'ticket', 'note'].map(type => (
                <div className={style.newsItem} key={type}>
                  {type}
                </div>
              ))
            }
          </Carousel>
        </div>
    </div>
    )
  }
}

export default News
