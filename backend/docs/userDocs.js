// userDocs.js

// Swagger definition for user login operation
const login = {
    tags: ['Users'],
    description: 'User login',
    operationId: 'login',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              email: { type: 'string' },
              password: { type: 'string' },
            },
            required: ['email', 'password'],
          },
        },
      },
    },
    responses: {
      '200': {
        description: 'User Logged In',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: { type: 'boolean', example: true },
                message: { type: 'string', example: 'User Logged In' },
                token: { type: 'string', example: 'JWT-token' },
              },
            },
          },
        },
      },
      '400': {
        description: 'Validation failed for login',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: { type: 'boolean', example: false },
                message: { type: 'string', example: 'Validation failed for login' },
              },
            },
          },
        },
      },
      '401': {
        description: 'Email Not Found or incorrect password',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: { type: 'boolean', example: false },
                message: { type: 'string', example: 'Email Not Found or incorrect password' },
              },
            },
          },
        },
      },
      '500': {
        description: 'Internal Server Error',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: { type: 'boolean', example: false },
                message: { type: 'string', example: 'Internal Server Error' },
                error: { type: 'string' },
              },
            },
          },
        },
      },
    },
  };
  
  // Swagger definition for user logout operation
  const logout = {
    tags: ['Users'],
    description: 'User logout',
    operationId: 'logout',
    responses: {
      '200': {
        description: 'Logout success',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: { type: 'boolean', example: true },
                message: { type: 'string', example: 'Logout success' },
              },
            },
          },
        },
      },
      '500': {
        description: 'Internal Server Error',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: { type: 'boolean', example: false },
                message: { type: 'string', example: 'Internal Server Error' },
                error: { type: 'string' },
              },
            },
          },
        },
      },
    },
  };
  
  // Swagger definition for get user profile operation
  const getUserProfile = {
    tags: ['Users'],
    description: 'Get user profile',
    operationId: 'getUserProfile',
    security: [{ bearerAuth: [] }],
    responses: {
      '200': {
        description: 'User Profile',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: { type: 'string', example: 'User Profile' },
              },
            },
          },
        },
      },
    },
  };
  
  // Swagger definition for update user profile operation
  const updateUserProfile = {
    tags: ['Users'],
    description: 'Update user profile',
    operationId: 'updateUserProfile',
    security: [{ bearerAuth: [] }],
    responses: {
      '200': {
        description: 'User profile updated successfully',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: { type: 'string', example: 'Update user profile' },
              },
            },
          },
        },
      },
    },
  };
  
  export default { login, logout, getUserProfile, updateUserProfile };
  