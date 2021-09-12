import React from "react";
import {Link} from 'react-router-dom'

function interview() {
  return (
    <div>
      <div className="parkagecontent">
        <div className="parkagebody">
          <div className="parkageheader">
            Our packages offer different level of services which you can select
            according to your requirement. Time to complete initial logo designs
            is 3 to 5 working days.
          </div>
          
          <Link to= '/interview2' className='list'>
          <div className="customice">
              Customize your package by clicking here 
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default interview;
