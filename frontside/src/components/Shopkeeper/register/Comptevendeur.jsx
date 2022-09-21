import React from "react";
import './/style.css'



const Comptevendeur =  ({formData, setFormData}) => {


// const [nomDeLaBoutique, setNomDeLaBoutique] = useState(null);
// const [option, setOption] = useState(null);
// const [nomEtPrenomDeGestionnaire, setNomEtPrenomDeGestionnaire] = useState(null);
// const [numeroDeTelephone, setNumeroDeTelephone] = useState(null);
// const [adresseEmail, setAdresseEmail] = useState(null);
// const [confirmeEmail, setConfirmeEmail] = useState(null);
// const [password, setPassword] = useState(null);
// const [confirmePassword, setConfirmePassword] = useState(null);





return(
        <>
   
         
    <div>
      <label htmlFor="Nom de la boutique">Nom de la boutique *</label>
      <input id="Nom de la boutique" value={formData.nameDeLaBoutique}
        onChange={(event) => {
        console.log({...formData});
        setFormData({ ...formData, nameDeLaBoutique : event.target.value})}} />
        </div>
    <div>
      <label htmlFor="comp">Veuillez sélectionner si vous êtes *<br/> une personne physique ou une<br/> entreprise</label>
      <select className="comp" value={formData.persone}
      onChange={(event) => {
        console.log(event.target.value);
        setFormData({...formData, persone:event.target.value});
      }}
       >
        <option value="choisir une option">-Choisir une option-</option>
        <option value="Personne physique">Personne physique</option>
        <option value="Entité commercial/ Entreprise">Entité commercial/ Entreprise</option>
      </select>
    </div>
    <div>
      <label htmlFor="Nom et prénom du gestionnaire de compte">Nom et prénom du gestionnaire de *<br/> compte </label>
      <input id="Nom et prénom du gestionnaire de compte" value={formData.nomEtPrénomDuGestionnaireDeCompte}
       onChange={(event) => {
        setFormData({...formData, nomEtPrénomDuGestionnaireDeCompte: event.target.value});
      }} 
      />
    </div>
    <div>
      <label htmlFor="Numéro de téléphone du gestionnaire de compte ">Numéro de téléphone du *<br/>gestionnaire de compte </label>
      <input id="Numéro de téléphone du gestionnaire de compte " type="numero" value={formData.numeroDeTelephone}
       onChange={(event) => {
        setFormData({...formData, numeroDeTelephone:event.target.value});
      }}
      />
    </div>
    <div>
      <label htmlFor="Adresse e-mail ">Adresse e-mail *</label>
      <input id="Adresse e-mail " type="text" value={formData.email}
       onChange={(event) => {
        setFormData({...formData, email: event.target.value});
      }}
      />
    </div>
    <div>
      <label htmlFor="confirmeEmail">Retaper l'adresse e-mail *</label>
      <input id="confirmeEmail" type="text" value={formData.confirmeEmail}
       onChange={(event) => {
        setFormData({...formData, confirmeEmail:event.target.value});
      }}
      />
    </div>
    <div>
      <label htmlFor="password">Mot de passe *</label>
      <input id="password" type="text"  value={formData.password}
       onChange={(event) => {
        setFormData({...formData, password:event.target.value});
      }}
      />
    </div>
    <div>
      <label htmlFor="confirmePassword">Retaper le mot de passe *</label>
      <input id="confirmePassword" type="text" value={formData.confirmePassword}
       onChange={(event) => {
        setFormData({...formData, confirmePassword:event.target.value});
      }} 
      />
    </div>
    
    </>
    )
}

export default Comptevendeur;