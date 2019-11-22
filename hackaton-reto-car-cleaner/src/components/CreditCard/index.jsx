import React from 'react'
import CreditCardInput from 'react-credit-card-input';
import HeaderModal from '../HeaderModal/index';
import {Button} from '../index';
import './style.css'


const CreditCard = () => {
 return(
     <div className="layer">
         <div className="modal-confirmation">
         <HeaderModal/>
         <p>Información de pago: </p>
         <p> dirección aquí</p>
         <CreditCardInput/>
        <Button text="Pagar"/>
         </div>
     </div>
 )
}

export default CreditCard