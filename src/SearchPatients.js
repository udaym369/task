import React from 'react';
import { Menu } from './Menu';
import { Header } from './Header';

function SearchPatients() {
  return (
    <div>
      <Header/>
      <Menu/>
      <div className="container"><h2><i>Patients history</i></h2>
        <input type='search' placeholder='serch for patient'/><input type='button' value='search'/>
        

      </div>
    </div>
  )
}

export default SearchPatients;