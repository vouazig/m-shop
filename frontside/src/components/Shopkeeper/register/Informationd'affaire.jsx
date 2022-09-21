import React from 'react'
import './/style.css'

const Informationdaffaire = ({formData, setFormData}) => {
  


  return (
    <>
    
    <div>
      <label htmlFor="comp">Avez-vous déja une / plusieurs<br/>boutiques sur m-shop</label>
      <select className="comp" value={formData.unePlusieursBoutiques}
      onChange={(event) => {
        console.log(event.target.value);
        setFormData({...formData, unePlusieursBoutiques:event.target.value});
      }} >
        <option value="choisir une option">-Choisir une option-</option>
        <option value="oui">oui</option>
        <option value="non">non</option>
      </select>
    </div>
    <div>
      <label htmlFor="Nom de la boutique">Si oui, veuillez indiquer le nom de la<br/>/ des boutiques. *</label>
      <input id="Nom de la boutique" type="text" value={formData.siOuiLaQuel}
       onChange={(event) => {
        setFormData({...formData, siOuiLaQuel:event.target.value});
      }} />
    </div>
   
    <div>
      <label htmlFor="pourquoi ">Si oui, pourquoi souhaitez-vous<br/> ouvrir une nouvelle boutique sur<br/> m-shop?</label>
      <input id="pourquoi " value={formData.siOuiPourquoi}
       onChange={(event) => {
        setFormData({...formData, siOuiPourquoi:event.target.value});
      }} />
    </div>
    <div>
      <label htmlFor="Nom de la société / raison sociale">Nom de la société / raison sociale </label>
      <input id="Nom de la société / raison sociale" type="numero" value={formData.nomDeLaSociété}
       onChange={(event) => {
        setFormData({...formData, nomDeLaSociété:event.target.value});
      }} />
    </div>
    <div>
      <label htmlFor="Adresse">Adresse 1 *</label>
      <input id="Adresse" type="text" value={formData.adresse1}
       onChange={(event) => {
       setFormData({...formData, adresse1:event.target.value});
      }}/>
    </div>
    <div>
      <label htmlFor="Code postal">Code postal</label>
      <input id="Code postal" type="text" value={formData.codePostal}
       onChange={(event) => {
        setFormData({...formData, codePostal:event.target.value});
      }}/>
    </div>
    <div>
      <label htmlFor="Ville">Ville *</label>
      <input id="Ville" type="text" value={formData.ville}
       onChange={(event) => {
        setFormData({...formData, ville: event.target.value});
      }}/>
    </div>
    <div>
      <label htmlFor="Pays">Pays</label>
      <select className='comp' value={formData.pays}
      onChange={(event) => {
        console.log(event.target.value);
        setFormData({...formData, pays: event.target.value});
      }} >
        <option value="choisir une option">-Choisir une option-</option>
        <option value="1">Tunisie</option>
        <option value="2">France</option>
      </select>
    </div>
    <div>
      <label htmlFor="Pays">Prénoms et nom du propriétaire de<br/> la société ou représentant légal <br/> (Gérant, Directeur général, Cadres<br/> supérieurs)</label>
      <input id="Pays" type="text" value={formData.prénomsEtNomDuPropriétaire}
       onChange={(event) => {
        setFormData({...formData, prénomsEtNomDuPropriétaire: event.target.value});
      }} />
    </div>
    <div>
      <label htmlFor="Deuxièmeprénom">Deuxième prénom du propriétaire <br/> de la société ou représentant légal</label>
      <input id="Deuxièmeprénom" type="text" value={formData.deuxièmePrénomDuPropriétaire}
       onChange={(event) => {
        setFormData({...formData, deuxièmePrénomDuPropriétaire: event.target.value});
      }} />
    </div>
  
    <div>
      <label htmlFor="Type de pièce">Type de pièce d'identité du<br/>propriétaire de la société ou<br/> représentant légal</label>
      <select className='comp' value={formData.pièceDidentité}
      onChange={(event) => {
        console.log(event.target.value);
        setFormData({...formData, pièceDidentité: event.target.value});
      }} >
        <option value="choisir une option">-Choisir une option-</option>
        <option value="Passport">Passport</option>
        <option value="Carte d'identité nationale">Carte d'identité nationale</option>
      </select>
    </div>
    <div>
      <label htmlFor="Type de pièce">Si vous êtes une entité commerciale<br/> / entreprise / personne morale,<br/> sélectionnez le nombre d'employés</label>
      <select className='comp' value={formData.nombreDemployés}
      onChange={(event) => {
        console.log(event.target.value);
        setFormData({...formData, nombreDemployés: event.target.value});
      }} >
        <option value="choisir une option">-Choisir une option-</option>
        <option value="1">1-3</option>
        <option value="2">4-10</option>
        <option value="3">11-99</option>
        <option value="4">100 and more</option>
      </select>
    </div>
    <div>
      <label htmlFor="Numérod'immatriculation">Numéro d'immatriculation au Registre National des Entreprises (RNE)</label>
      <input id="Numérod'immatriculation" type="text" value={formData.numéroDimmatriculation}
       onChange={(event) => {
        setFormData({...formData, numéroDimmatriculation: event.target.value});
      }} />
    </div>
    <div>
      <label htmlFor="matricule">Avez-vous un matricule fiscal ? *</label>
      <select className='comp' value={formData.matriculeFiscal}
      onChange={(event) => {
        console.log(event.target.value);
        setFormData({...formData, matriculeFiscal: event.target.value});
      }} >
        <option value="choisir une option">-Choisir une option-</option>
        <option value="oui">oui</option>
        <option value="non">non</option>
        
      </select>
    </div>
    <div>
      <label htmlFor="Identifiantfiscal">Identifiant fiscal</label>
      <input id="Identifiantfiscal" type="text" value={formData.identifiantFiscal}
       onChange={(event) => {
        setFormData({...formData, identifiantFiscal: event.target.value});
      }} />
    </div>
    <div>
      <label htmlFor="country">Which country will you shipping from *</label>
      <select className='comp' value={formData.country}
      onChange={(event) => {
        console.log(event.target.value);
        setFormData({...formData, country: event.target.value});
      }} >
        <option value="choisir une option">-Choisir une option-</option>
        <option value="1">Tunisie</option>
        <option value="2">France</option>
      </select>
    </div> 
</>
  )
}

export default Informationdaffaire;