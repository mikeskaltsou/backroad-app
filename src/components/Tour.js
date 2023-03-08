import React from 'react';
import { tours } from '../data';

const Tour = () => {
  return (
    <div className="section-center featured-center">

          {tours.map((tour)=>{
            const {id,img,date,title,text,icon,days,price} = tour;
            return (
              <article key={id} className="tour-card">
            <div className="tour-img-container">
              <img src={img} className="tour-img" alt="" />
              <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{title}</h4>
              </div>
              <p>
                {text}
              </p>
              <div className="tour-footer">
                <p>
                  <span><i className={icon}></i></span> china
                </p>
                <p>{days}</p>
                <p>{price}</p>
              </div>
            </div>
          </article>
            )
          })}
        </div>
  )
}

export default Tour
