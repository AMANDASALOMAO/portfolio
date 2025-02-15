import React from 'react';
import styles from './Contact.module.scss'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import Section from '../../components/section/Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact () {

const phoneNumber = '+5575981264552';
const message = encodeURIComponent(
  'Olá! Gostaria de saber mais'
);

  return (
    <Section height={'50%'} flexDirection={'column'}>
      <h1>Entre em <span>contato</span></h1>
      <div className={styles.details}>
      <a href="mailto:a.salo.andrade@outlook.com"
      target="_blank" 
      rel="noreferrer"
      >
      <FontAwesomeIcon icon={faEnvelope} color="#72a117" />
      <br/>
      a.salo.andrade@outlook.com
      </a>
      <a href={`https://www.google.com/search?q=Esplanada%2C+bahia&oq=Esplanada%2C+bahia&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQLhiABDIHCAIQABiABDIHCAMQLhiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABNIBCDM1MzNqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#eim=CAEQCRoTLTExLjk1NzkwNDU1MDAwMDAwMiISLTM3LjkxNjY2MTY0OTk5OTk4`}
      target="_blank" 
      rel="noreferrer"
      >
      <FontAwesomeIcon icon={faMapMarkedAlt} color="#72a117" />
      <br/>
      Esplanada-BA
      </a>
      
      <a href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank" 
      rel="noreferrer"
      >
      <FontAwesomeIcon icon={faMobileAlt} color="#72a117" />
      <br/>
      (75) 98126-4552
      </a>
      </div>
    </Section>
  );
}

export default Contact;
