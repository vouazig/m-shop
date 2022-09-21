import React, { useState } from "react";
import { Steps } from "rsuite";
import Comptevendeur from "./Comptevendeur";
import Informationdaffaire from "./Informationd'affaire";
import Comptebancaire from "./Comptebancaire";
import Summary from "./Summary";
import axios from "axios";
<<<<<<< HEAD
import IP from "../../api/ip";
=======
import IP from "../../api/ip.js";
>>>>>>> 61b2b828c1bf04428988704fbcf8d4adacc1f01c
import "../register/style.css";

const Form = ( ) => {
  
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    nameDeLaBoutique: "",
    persone: "",
    nomEtPrénomDuGestionnaireDeCompte: "",
    numeroDeTelephone: "",
    email: "",
    confirmeEmail: "",
    password: "",
    confirmePassword: "",
    unePlusieursBoutiques: "",
    siOuiLaQuel: "",
    siOuiPourquoi: "",
    nomDeLaSociété: "",
    adresse1: "",
    codePostal: "",
    ville: "",
    pays: "",
    prénomsEtNomDuPropriétaire: "",
    deuxièmePrénomDuPropriétaire: "",
    dateDeNaissance:"",
    pièceDidentité: "",
    téléchargezUneCopieduPropriétaireDeLaSociété:"",
    nombreDemployés: "",
    numéroDimmatriculation: "",
    matriculeFiscal: "",
    identifiantFiscal: "",
    TéléchargezUneCopieDeIdentificationFiscale:"",
    country: "",
    titulaireDuCompte: "",
    nomDeLaBanque: "",
    codeBancaire: "",
    codeIban: "",
    codeSwift: "",
  });

  const FormTitles = [
    "Comptevendeur",
    "Information d'affaire",
    "Compte bancaire"
  ];

  const send = () => {
    console.log(formData)
    axios
      .post(`${IP}/shopkeepers/register`, formData)

      .then((response) => {
        console.log(response.data);
        // if(response.data[0]=="connected")
        // localStorage.setItem('shopowner',JSON.stringify(response.data[1]))
      });
  };

  const PageDisplay = () => {
    if (page === 0) {
      return <Comptevendeur formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return (
        <Informationdaffaire formData={formData} setFormData={setFormData} />
      );
    } else if (page === 2) {
      return <Comptebancaire formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <>
    
      <div >
        
        <a type="button" href="/sellercenter" className="button-user" id="log">
          SELLER CENTER
        </a>
      </div>
      <hr />
      <div className="form">
        <div className="form-container">
          <div className="header">
            <div>
              <Steps current={page} id="steps">
                <Steps.Item title="Votre compte vendeur" />
                <Steps.Item title="informations d'affaire" />
                <Steps.Item title="compte bancaire" />
                <Steps.Item title="summary" />
              </Steps>
            </div>
            <hr />
          </div>
          <div className="body">{PageDisplay()}</div>
          <hr />
          <div className="footer">
            <button
              id="button-back"
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Back
            </button>
            <button
              id="button-next"
              disabled={page === FormTitles.length - 0}
              hidden={page === 3}
              onClick={() => {
                setPage((currPage) => currPage + 1);
              }}
            >
              Next
            </button>
            <button
              id="button-next"
              hidden={page === 0 || page === 1 || page === 2}
              onClick={send}
            >
              submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
