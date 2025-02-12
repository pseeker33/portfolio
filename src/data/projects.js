import dashboard1Image from '../assets/images/dashboard1-portrait.png'
import store1Image from '../assets/images/lifestyle1-portrait.png'
import game1Image from '../assets/images/tic-tac-toe-portrait.png'

export const projectCategories = {
  data: [
    {
      id: 'data1',
      title: {
        en: 'Road Accident Analytics',
        es: 'Analítica de Siniestros Viales'
      },
      description: {
        en: 'Data analysis of traffic accidents in the City of Buenos Aires using data preparation, analysis, and interactive visualization techniques.',
        es: 'Análisis de datos de los siniestros viales en la Ciudad de Buenos Aires aplicando técnicas de preparacion, análisis y visualización interactiva de datos'
      },
      technologies: [
        'Python', 
        'Pandas', 
        'Matplotlib', 
        'NumPy',
        'Power BI'
      ],
      image: dashboard1Image,
      demo: null,
      github: 'https://github.com/pseeker33/Data_Analytics_Siniestros_Viales_en_Ciudad_de_Buenos_Aires'
    },
    {
      id: 'data2',
      title: {
        en: 'Machine Learning Pipeline',
        es: 'Pipeline de Machine Learning'
      },
      description: {
        en: 'End-to-end ML pipeline using scikit-learn and MLflow for predicting customer churn with 89% accuracy',
        es: 'Pipeline completo de ML usando scikit-learn y MLflow para predecir la deserción de clientes con 89% de precisión'
      },
      technologies: [
        'React', 
        'Node.js', 
        'MongoDB', 
        'Express'
      ],
      image: '/data-project-2.jpg',
      demo: 'https://demo.example.com/ml-pipeline',
      github: 'https://github.com/example/ml-pipeline'
    },
    {
      id: 'data3',
      title: {
        en: 'NLP Tool',
        es: 'Herramienta de LNP'
      },
      description: {
        en: 'NLP tool built with spaCy and BERT for sentiment analysis and text classification in multiple languages',
        es: 'Herramienta de NLP construida con spaCy y BERT para análisis de sentimientos y clasificación de texto en múltiples idiomas'
      },
      technologies: [
        'React', 
        'Node.js', 
        'MongoDB', 
        'Express'
      ],
      image: '/data-project-3.jpg',
      demo: 'https://demo.example.com/nlp-tool',
      github: 'https://github.com/example/nlp-tool'
    }
  ],
  webdev: [
    {
      id: 'web1',
      title: {
        en: 'Lyfestyle Store',
        es: 'Lyfestyle Store'
      },
      description: {
        en: 'A modern, responsive e-commerce platform for branded accessories. It offers an elegant and user-friendly shopping experience, built with HTML, CSS, and vanilla JavaScript.',
        es: 'Plataforma e-commerce moderna y responsive para accesorios de marca. Ofrece una experiencia de compra elegante y fácil de usar, construida con HTML, CSS y JavaScript puro.'
      },
      technologies: [
        'Javascript', 
        'HTML', 
        'CSS'
      ],
      image: store1Image,
      demo: 'https://pseeker33.github.io/lifestyle-store/',
      github: 'https://github.com/pseeker33/lifestyle-store'
    },
    {
      id: 'web2',
      title: {
        en: 'Tic Tac Toe',
        es: 'Tres en Raya'
      },
      description: {
        en: 'A nice Tic-Tac-Toe game with sound effects. Chill out and beat the computer!',
        es: 'Un bonito juego de Tres en Raya con efectos de sonido. ¡Relájate y vence a la computadora!'
      },
      technologies: [
        'Javascript',
        'React',
        'HTML',
        'CSS'
      ],
      image: game1Image,
      demo: 'https://tic-tac-toe-game-eight-gold.vercel.app',
      github: 'https://github.com/pseeker33/tic-tac-toe-game'
    },
    {
      id: 'web3',
      title: {
        en: 'Social Media Dashboard',
        es: 'Dashboard de Redes Sociales'
      },
      description: {
        en: 'Responsive social media analytics dashboard with real-time data visualization using D3.js and Vue.js',
        es: 'Dashboard responsive de análisis de redes sociales con visualización de datos en tiempo real usando D3.js y Vue.js'
      },
      technologies: [
        'React', 
        'Node.js', 
        'MongoDB', 
        'Express'
      ],
      image: '/web-project-3.jpg',
      demo: 'https://demo.example.com/social-dashboard',
      github: 'https://github.com/example/social-dashboard'
    }
  ],
  blockchain: [
    {
      id: 'blockchain1',
      title: {
        en: 'DeFi Lending Platform',
        es: 'Plataforma de Préstamos DeFi'
      },
      description: {
        en: 'Decentralized lending platform built on Ethereum using Solidity and Web3.js with automated interest rates',
        es: 'Plataforma descentralizada de préstamos construida en Ethereum usando Solidity y Web3.js con tasas de interés automatizadas'
      },
      image: '/blockchain-project-1.jpg',
      demo: 'https://demo.example.com/defi-platform',
      github: 'https://github.com/example/defi-platform'
    },
    {
      id: 'blockchain2',
      title: {
        en: 'NFT Marketplace',
        es: 'Mercado de NFTs'
      },
      description: {
        en: 'Full-featured NFT marketplace with minting capabilities built on Polygon using ERC-721 standards',
        es: 'Mercado completo de NFTs con capacidades de acuñación construido en Polygon usando estándares ERC-721'
      },
      technologies: [
        'React', 
        'Node.js', 
        'MongoDB', 
        'Express'
      ],
      image: '/blockchain-project-2.jpg',
      demo: 'https://demo.example.com/nft-market',
      github: 'https://github.com/example/nft-market'
    },
    {
      id: 'blockchain3',
      title: {
        en: 'DAO Governance Platform',
        es: 'Plataforma de Gobernanza DAO'
      },
      description: {
        en: 'Decentralized governance platform with proposal creation and voting mechanisms using smart contracts',
        es: 'Plataforma de gobernanza descentralizada con mecanismos de creación y votación de propuestas usando contratos inteligentes'
      },
      technologies: [
        'React', 
        'Node.js', 
        'MongoDB', 
        'Express'
      ],
      image: '/blockchain-project-3.jpg',
      demo: 'https://demo.example.com/dao-platform',
      github: 'https://github.com/example/dao-platform'
    }
  ],
  nocode: [
    {
      id: 'nocode1',
      title: {
        en: 'Automated CRM System',
        es: 'Sistema CRM Automatizado'
      },
      description: {
        en: 'Custom CRM solution built with Airtable and Zapier, featuring automated email campaigns and lead scoring',
        es: 'Solución CRM personalizada construida con Airtable y Zapier, con campañas de email automatizadas y puntuación de leads'
      },
      technologies: [
        'React', 
        'Node.js', 
        'MongoDB', 
        'Express'
      ],
      image: '/nocode-project-1.jpg',
      demo: 'https://demo.example.com/crm-system',
      github: null
    },
    {
      id: 'nocode2',
      title: {
        en: 'Event Management Platform',
        es: 'Plataforma de Gestión de Eventos'
      },
      description: {
        en: 'Comprehensive event management solution using Bubble.io with integrated payment processing and attendee tracking',
        es: 'Solución integral de gestión de eventos usando Bubble.io con procesamiento de pagos integrado y seguimiento de asistentes'
      },
      technologies: [
        'React', 
        'Node.js', 
        'MongoDB', 
        'Express'
      ],
      image: '/nocode-project-2.jpg',
      demo: 'https://demo.example.com/event-platform',
      github: null
    },
    {
      id: 'nocode3',
      title: {
        en: 'Membership Site',
        es: 'Sitio de Membresía'
      },
      description: {
        en: 'Subscription-based learning platform built with Webflow and Memberstack, featuring gated content and user authentication',
        es: 'Plataforma de aprendizaje basada en suscripción construida con Webflow y Memberstack, con contenido protegido y autenticación de usuarios'
      },
      technologies: [
        'React', 
        'Node.js', 
        'MongoDB', 
        'Express'
      ],
      image: '/nocode-project-3.jpg',
      demo: 'https://demo.example.com/membership-site',
      github: null
    }
  ]
};

export const categoryNames = {
  data: { en: 'Data', es: 'Datos' },
  webdev: { en: 'Web Dev', es: 'Desarrollo Web' },
  blockchain: { en: 'Blockchain', es: 'Blockchain' },
  nocode: { en: 'No Code', es: 'Sin Código' }
};