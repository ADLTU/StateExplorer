import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'

const StateInformation = () =>  {
    const [stateNames, setStateNames] = useState([{}])

    useEffect(() => {
        fetch("/stateInformation", "qqweq").then(
            response  => response.json()
        ).then(
            data => setStateNames(data)
        )
      },
  []);


    const location = useLocation();

    return (
        <div>
            <h1>{location.state.stt}</h1>

            {(typeof stateNames.states === 'undefined') ?
                (<p>Loading ...</p>) :
                (stateNames.states.map((stateName, i) => (<p key={i}>{stateName}</p>)))
            }
        </div>

    )};

export default StateInformation;
