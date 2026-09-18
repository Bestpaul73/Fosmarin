import aitLogo from '../assets/partners/ait.png';
import melcanoLogo from '../assets/partners/melcano.svg';
import sintelaLogo from '../assets/partners/sintela.png';
import additessLogo from '../assets/partners/additess.jpg';
import forthLogo from '../assets/partners/forth.jpg';
import plocanLogo from '../assets/partners/plocan.png';
import nbgLogo from '../assets/partners/nbg.png';
import kemeaLogo from '../assets/partners/kemea.png';
import canalinkLogo from '../assets/partners/canalink.png';
import laresLogo from '../assets/partners/lares-italia.png';
import globalConnectLogo from '../assets/partners/global-connect.png';
import grnetLogo from '../assets/partners/grnet.png';
import shefaLogo from '../assets/partners/shefa.jpg';

export const partners = [
  {
    name: 'AIT',
    legalName: 'AIT Austrian Institute of Technology GmbH',
    role: 'Coordinator, Technology Development',
    country: 'Austria',
    countryCode: 'AT',
    logo: aitLogo,
    website: 'https://www.ait.ac.at/',
    coordinator: true,
  },
  {
    name: 'MELCANO',
    legalName: 'Melcano IT and Trading GmbH',
    role: 'System Integration',
    country: 'Austria',
    countryCode: 'AT',
    logo: melcanoLogo,
    website: 'https://melcano.at/',
    logoClass: 'partner-logo--melcano',
  },
  {
    name: 'SINTELA',
    legalName: 'Sintela Limited',
    role: 'Technology Provider',
    country: 'United Kingdom',
    countryCode: 'UK',
    logo: sintelaLogo,
    website: 'https://sintela.com/',
  },
  {
    name: 'ADDITESS',
    legalName: 'Additess Advanced Integrated Technology Solutions & Services Ltd.',
    role: 'Systems Integrator',
    country: 'Cyprus',
    countryCode: 'CY',
    logo: additessLogo,
    website: 'https://additess.com/',
  },
  {
    name: 'FORTH',
    legalName: 'Idryma Technologias Kai Erevnas',
    role: 'Research Partner',
    country: 'Greece',
    countryCode: 'EL',
    logo: forthLogo,
    website: 'https://www.forth.gr/',
  },
  {
    name: 'PLOCAN',
    legalName:
      'Consortio Para el Diseño, Construccion, Equipamiento y Explotacion de la Plataforma Oceanica de Canarias',
    role: 'Operator, Research Partner',
    country: 'Spain',
    countryCode: 'ES',
    logo: plocanLogo,
    website: 'https://plocan.eu/',
  },
  {
    name: 'NBG',
    legalName: 'NBG Tube GmbH',
    role: 'Industry Partner',
    country: 'Austria',
    countryCode: 'AT',
    logo: nbgLogo,
    website: 'https://www.nbg.tech/',
  },
  {
    name: 'KEMEA',
    legalName: 'Kentro Meleton Asfaleias',
    role: 'Training',
    country: 'Greece',
    countryCode: 'EL',
    logo: kemeaLogo,
    website: 'https://kemea.gr/',
    logoClass: 'partner-logo--kemea',
  },
  {
    name: 'CANALINK',
    legalName: 'Canarias Submarine Link S.L.',
    role: 'Operator, Research Partner',
    country: 'Spain',
    countryCode: 'ES',
    logo: canalinkLogo,
    website: 'https://www.canalink.tel/',
  },
  {
    name: 'LARES ITALIA',
    legalName: 'LARES ITALIA – Unione Nazionale Laureati Esperti in Protezione Civile APS',
    role: 'Authority',
    country: 'Italy',
    countryCode: 'IT',
    logo: laresLogo,
    website: 'https://www.uniprotezionecivile.it/',
    logoClass: 'partner-logo--lares',
  },
  {
    name: 'GLOBAL CONNECT',
    legalName: 'Global Connect A.S.',
    role: 'Operator',
    country: 'Denmark',
    countryCode: 'DK',
    logo: globalConnectLogo,
    website: 'https://globalconnectgroup.com/our-network/',
  },
  {
    name: 'GRNET',
    legalName: 'National Infrastructures for Research and Technology',
    role: 'Operator',
    country: 'Greece',
    countryCode: 'EL',
    logo: grnetLogo,
    website: 'https://grnet.gr/',
  },
  {
    name: 'SHEFA',
    legalName: 'P/F Shefa',
    role: 'Operator',
    country: 'Faroe Islands',
    countryCode: 'FO',
    logo: shefaLogo,
    website: 'https://www.shefa.fo/',
  },
];

export const coordinator = partners.find((partner) => partner.coordinator);

export const consortiumCountries = [
  {
    code: 'FO',
    name: 'Faroe Islands',
    x: 32,
    y: 10,
  },
  {
    code: 'UK',
    name: 'United Kingdom',
    x: 29,
    y: 32,
  },
  {
    code: 'DK',
    name: 'Denmark',
    x: 49,
    y: 22,
  },
  {
    code: 'AT',
    name: 'Austria',
    x: 51,
    y: 48,
  },
  {
    code: 'IT',
    name: 'Italy',
    x: 52,
    y: 65,
  },
  {
    code: 'ES',
    name: 'Spain',
    x: 29,
    y: 72,
  },
  {
    code: 'EL',
    name: 'Greece',
    x: 65,
    y: 70,
  },
  {
    code: 'CY',
    name: 'Cyprus',
    x: 77,
    y: 75,
  },
];
