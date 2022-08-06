# Test API

#Prerequisites


Install [node and npm](https://nodejs.org/es/) first of all.

Verify you have node installed.

```bash
node -v
```

Verify you have npm installed.

```bash
npm -v
```

## Installation 🔧

Use the package manager [npm](https://www.npmjs.com/get-npm) to install "each libraries of the project".

```bash
npm install
```

# Endpoints

This project expose 3 endpoints:

1: Helth: 

```bash
curl --location --request GET 'http://localhost:8080/'
```

2: User Token (Login):

```bash
curl --location --request POST 'http://localhost:8080/uber/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "pierre@palenca.com",
    "password": "MyPwdChingon123"
}'
```

3: User Profile:

```bash
curl --location --request GET 'http://localhost:8080/uber/profile/cTV0aWFuQ2NqaURGRE82UmZXNVBpdTRxakx3V1F5'
```