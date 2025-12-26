module.exports = {
  apps: [{
    name: 'housentia',
    script: 'node_modules/next/dist/bin/next',
    args: 'start -p 3000',
    cwd: '/var/www/housentia',
    instances: 1,
    exec_mode: 'fork',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: '/var/log/pm2/housentia-error.log',
    out_file: '/var/log/pm2/housentia-out.log',
    log_file: '/var/log/pm2/housentia.log',
    time: true,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    // Graceful shutdown
    kill_timeout: 5000,
    wait_ready: true,
    listen_timeout: 10000
  }]
};





