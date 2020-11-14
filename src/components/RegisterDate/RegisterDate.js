import React from 'react';
import './RegisterDate.css'

const RegisterDate = (props) => (
  <div className={'title-with-border-at-left register-date'}>

      <div className={'register-date__date_elem'}>
          <p className={'title-headline'}>Data rejestracji:</p>
          <p className={'title-description'}>{props.register_date}</p>
      </div>

      <div className={'register-date__button_elem'}>
          <a className={'common-btn download-results-btn'} href={""}>Pobierz wynik</a>
      </div>

  </div>
);


export default RegisterDate;
