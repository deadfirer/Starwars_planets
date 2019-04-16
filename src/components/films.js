import React from 'react';
import { request } from 'https';

const Films = ({title}) => (
    <div className="Postfilms">
        <p><img src={require(`../img/films/${title}.jpg`)} alt='' /></p>
        <p><label>{title}</label></p>
    </div>
    
);

export default Films;