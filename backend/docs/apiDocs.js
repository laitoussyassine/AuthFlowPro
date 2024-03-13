// Import des fonctions de gestion des utilisateurs
import userDocs from './userDocs.js';   

// Définition de la documentation de l'API
const apiDocumentation = {
  openapi: '3.0.1',
  info: {
    version: '1.3.0',
    title: 'My REST API - Documentation',
    description: 'Description of my API here',
    contact: {
      name: 'Your Name',
      email: 'your.email@example.com',
      url: 'https://www.yourwebsite.com',
    },
  },
  servers: [
    {
      url: `http://localhost:3020`,
      description: 'Local Server',
    },
    {
      url: 'https://api.mysite.com',
      description: 'Production Server',
    },
  ],
  tags: [
    {
      name: 'Users',
    },
  ],
  paths: {
    '/users/signup': {post:userDocs.signup},
    '/users/login': {post:userDocs.login},
    '/users/logout': {get: userDocs.logout},
    '/users/profile': {
        get: userDocs.getUserProfile,
        put: userDocs.updateUserProfile,
    },
  },
  components: {
    schemas: {
      // Define user-related schemas here if needed
    },
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
};

// Export de la documentation de l'API
export default apiDocumentation;
