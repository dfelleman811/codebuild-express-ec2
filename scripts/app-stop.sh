source /home/ec2-user/.bashrc

pgrep -d -l -f "node app.js" | sudo xargs kill