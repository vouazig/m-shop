import React from 'react'
import './/style.css'



const Comptebancaire = ({formData, setFormData})=>{

  return (
   <>
    <div>
      <label htmlFor="Titulaire du compte">Titulaire du compte</label>
      <input id="Titulaire du compte" type="text" value={formData.titulaireDuCompte}
       onChange={(event) => {
        setFormData({...formData, titulaireDuCompte: event.target.value});
      }}/>
    </div>
    <div>
      <label htmlFor="Nom de la banque">Nom de la banque</label>
      <input id="Nom de la banque" type="text" value={formData.nomDeLaBanque}
       onChange={(event) => {
        setFormData({...formData, nomDeLaBanque:event.target.value});
      }}/>
    </div>
    <div>
      <label htmlFor="Code bancaire">Code bancaire</label>
      <input id="Code bancaire" type="text" value={formData.codeBancaire}
       onChange={(event) => {
        setFormData({...formData, codeBancaire:event.target.value});
      }}/>
    </div>
    <div>
      <label htmlFor="Code IBAN - IBAN">Code IBAN - IBAN</label>
      <input id="Code IBAN - IBAN" type="text" value={formData.codeIban}
       onChange={(event) => {
        setFormData({...formData, codeIban: event.target.value});
      }}/>
    </div>
    <div>
      <label htmlFor="Code Swift">Code Swift</label>
      <input id="Code Swift" type="text" value={formData.codeSwift}
       onChange={(event) => {
        setFormData({...formData, codeSwift:event.target.value});
      }}/>
    </div>
   </>
  )
};

export default Comptebancaire;