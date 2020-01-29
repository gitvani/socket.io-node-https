# Generate SSL certificate:

```
sudo openssl req -x509 -sha256 -nodes -newkey rsa:2048 -days 365 -subj "/C=US/ST=Oregon/L=Portland/O=Company Name/OU=Org/CN=localhost" -keyout privkey.pem -out fullchain.pem


```
# Start server:

```
node app.js
```

# Open client:

Access https://localhost:3000 and open Developer JS Console to see the message.
