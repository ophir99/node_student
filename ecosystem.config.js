module.exports = {
  apps: [
    {
      name: "prime_nine",
      script: "./index.js"
    }
  ],
  deploy: {
    production: {
      user: "ubuntu",
      host: "ec2-18-232-111-89.compute-1.amazonaws.com",
      key: "./../tutz/tutz.pem",
      ref: "origin/master",
      repo: "https://github.com/ophir99/node_student.git",
      path: "/home/ubuntu/prime",
      "post-deploy": "npm install && pm2 startOrRestart ecosystem.config.js"
    }
  }
};
