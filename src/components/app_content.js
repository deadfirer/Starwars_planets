import React from 'react';
import Films from './films';

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
                {nfilms.length > 0 ? arrayTitle.map((title) => (
                    title ? <Films title={title} /> : ''
                )) : ''}
            </div>
        </div>
    </div>

);



export default AppContent;

