import React from 'react';
import PropTypes from 'prop-types';

const Next = ({nextPlanet}) => (
    <div className='next'>
        <button onClick={nextPlanet}>Next</button>
    </div>    
)

Next.propTypes = {
    nextPlanet : PropTypes.func.isRequired
}

export default Next;