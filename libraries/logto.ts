import LogtoClient from '@logto/next';

export const logtoClient = new LogtoClient({
  appId: '2y2YX3wI5ZESs0zuGwf97',
  appSecret: 'XxUVVmA3v46pwMWIFjfoZ',
  endpoint: 'http://localhost:3001', // E.g. http://localhost:3001
  baseUrl: 'http://localhost:3000', // E.g. http://localhost:3000
  cookieSecret: 'complex_password_at_least_32_characters_long',
  cookieSecure: process.env.NODE_ENV === 'production',
});