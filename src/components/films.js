import React from 'react';
import PropTypes from 'prop-types';

const Films = ({title}) => (
    <div className="Postfilms">
        <p><img src={require(`../img/films/${title}.jpg`)} alt='' /></p>
        <p><label>{title}</label></p>
    </div>
    
);

Films.propTypes = {
    title : PropTypes.string.isRequired
}

export default Films;