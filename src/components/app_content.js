import React from 'react';
import Films from './films';
import PropTypes from 'prop-types';

const AppContent = ({ planet, population, climate, terrain, nfilms, arrayTitle }) => (
    <div className='content'>
        <div className='planet'>
            <label>{planet}</label>
        </div>
        <div className='planetImg'>
            <img src={require(`../img/planets/${planet}.jpg`)} alt='planets'/>
        </div>

        <div className='planetDesc'>
            <div className='divQuest'><label>Population</label></div>
            <div className='divResp'><label>{population}</label></div>
            <div className='divQuest'><label>Climate</label></div>
            <div className='divResp'><label>{climate}</label></div>
            <div className='divQuest'><label>Terrain</label></div>
            <div className='divResp'><label>{terrain}</label></div>
            <div className='divFilms'><label>Feature in {nfilms.length} films</label></div>
            <div className='divFilms'>
                {nfilms.length > 0 ? arrayTitle.map((title,index) => (
                    title ? <span key={index}><Films title={title}/></span>: ''
                )) : ''}
            </div>
        </div>
    </div>

);


AppContent.propTypes = {
    planet : PropTypes.string.isRequired,
    population : PropTypes.string.isRequired,
    climate : PropTypes.string.isRequired,
    terrain : PropTypes.string.isRequired,
    nfilms : PropTypes.array.isRequired, 
    arrayTitle : PropTypes.array.isRequired
}


export default AppContent;

