import React, { useState } from 'react';

function AccordionItem({header, children}) {

const [ isActive, toggleActive ] = useState(false);

return (
    <div className={ `accordion__item ${ isActive ? 'accordion__item--open' : '' }` }>

      <button
        className="accordion__item-header"
        onClick={ () => isActive ? toggleActive(false) : toggleActive(true) }
      >
       { header }
       <svg className="icon icon--debit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
         <path className="icon__path" d="M22.37,22.33V2.67a2.63,2.63,0,0,1,5.26,0V47.24a2.63,2.63,0,0,1-5.26.09V27.58H2.71a2.63,2.63,0,0,1,0-5.25Zm11.92,5.25a2.63,2.63,0,0,1,0-5.25h13a2.63,2.63,0,0,1,0,5.25Z">
         </path>
       </svg>
     </button>

     <div className="accordion__item-content">
       { children }
     </div>

   </div>
 )

};

export default AccordionItem;
