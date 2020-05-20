import React from 'react';
import "./menu-item.styles.scss";

const MenuItem = (props)=>(
    <div style={{
        backgroundImage: `url(${props.imageUrl})`
    }} className={`${props.size} menu-item`}> 
        <div className="content">
            <h1 className="title">{ props.title }</h1>
            <span className="subTitle">SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem;