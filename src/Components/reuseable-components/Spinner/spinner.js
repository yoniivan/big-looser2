import React from 'react';
import './spinner.css';

const Spinner = () => {

    return(
        <div id="sppiner">
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>  
    );
}

export default Spinner;