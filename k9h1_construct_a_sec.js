// Secure Game Prototype Monitor Configuration File
const GAME_MONITOR = {
  // Game Title
  title: 'K9H1 Secure Game Prototype',
  
  // Game Server Configuration
  server: {
    port: 8080,
    ssl: true,
    cors: {
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      headers: ['Content-Type', 'Authorization']
    }
  },
  
  // Security Features
  security: {
    encryption: {
      algorithm: 'AES-256-CBC',
      key: 'k9h1_secret_key'
    },
    authentication: {
      method: 'OAuth2',
      tokenExpiration: 3600 // 1 hour
    }
  },
  
  // Game State Monitoring
  monitor: {
    interval: 1000 // 1 second
  },
  
  // Logging Configuration
  logging: {
    level: 'DEBUG',
    transports: [
      {
        type: 'console',
        format: 'json'
      },
      {
        type: 'file',
        filename: 'game_monitor.log',
        format: 'json'
      }
    ]
  },
  
  // Alerts and Notifications
  alerts: {
    threshold: 5, // 5 failed login attempts
    notification: {
      type: 'email',
      recipient: 'admin@example.com'
    }
  }
};

module.exports = GAME_MONITOR;