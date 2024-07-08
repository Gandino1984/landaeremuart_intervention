import React from 'react'
import { useState, useEffect } from 'react'
import GeneralContext from './GeneralContext';


function StatesProvider({children}){
 
    const [viewportWidth, setviewportWidth] = useState(window.innerWidth);
    
    const contextValue = {
        viewportWidth,
        setviewportWidth,       
    };
  
    return(
      <GeneralContext.Provider value={contextValue}>
        {children}
      </GeneralContext.Provider>
    );
  }
  
  export default StatesProvider
  
  