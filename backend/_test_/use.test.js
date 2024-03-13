import UserControllers from '../controllers/user.controller.js';
import User from '../models/User.model.js';
import validateUserCreation from '../function/userValidation.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

jest.mock('../models/User.model.js');
jest.mock('../function/userValidation.js');
jest.mock('jsonwebtoken');
jest.mock('bcryptjs');

describe('UserControllers', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('signup', () => {
    it('should create a user successfully', async () => {
      const req = {
        body: {
          username: 'TestUser',
          email: 'test@example.com',
          password: 'testpassword',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };

      validateUserCreation.mockReturnValueOnce({ error: null });
      bcrypt.hash.mockResolvedValueOnce('hashedPassword');
      User.create.mockResolvedValueOnce({});
      User.save.mockResolvedValueOnce({});

      await UserControllers.signup(req, res);

      expect(validateUserCreation).toHaveBeenCalledWith(req.body);
      expect(bcrypt.hash).toHaveBeenCalledWith('testpassword', 10);
      expect(User.create).toHaveBeenCalledWith({
        username: 'TestUser',
        email: 'test@example.com',
        password: 'hashedPassword',
      });
      expect(User.save).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.send).toHaveBeenCalledWith({
        message: 'User created with success',
      });
    });

    // Add more test cases for error scenarios, validation failures, etc.
  });

  describe('login', () => {
    it('should login a user successfully', async () => {
      const req = {
        body: {
          email: 'test@example.com',
          password: 'testpassword',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
        cookie: jest.fn(),
      };

      validateUserCreation.mockReturnValueOnce({ error: null });
      User.findOne.mockResolvedValueOnce({ password: 'hashedPassword' });
      bcrypt.compare.mockResolvedValueOnce(true);
      jwt.sign.mockReturnValueOnce('mockedToken');

      await UserControllers.login(req, res);

      // Add assertions for the expected behavior in a successful login
    });

    // Add more test cases for error scenarios, login failures, etc.
  });
  describe('logout', () => {
    it('should log out a user successfully', async () => {
      const req = {
        cookies: {
          accessToken: 'mockedToken',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
        clearCookie: jest.fn(),
      };

      await UserControllers.logout(req, res);

      // Add assertions for the expected behavior in a successful logout
    });

    // Add more test cases for error scenarios, logout failures, etc.
  });

  describe('getUserProfile', () => {
    it('should get user profile successfully', async () => {
      const req = {
        user: {
          // Mock user data or use a library to create a mock user object
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await UserControllers.getUserProfile(req, res);

      // Add assertions for the expected behavior in getting user profile
    });

    // Add more test cases for error scenarios, profile not found, etc.
  });

  describe('updateUserProfile', () => {
    it('should update user profile successfully', async () => {
      const req = {
        // Mock request body with updated profile data
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await UserControllers.updateUserProfile(req, res);

      // Add assertions for the expected behavior in updating user profile
    });

    // Add more test cases for error scenarios, update failures, etc.
  });

  // Add more test cases for other controller methods (logout, getUserProfile, updateUserProfile, etc.)
});
