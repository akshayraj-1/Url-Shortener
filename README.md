# [WIP] URL Shortener

> [!WARNING] 
> This is a work in progress project. Some features may not be implemented yet.

This is a simple URL shortener that allows users to shorten their URLs. It is a simple Node.js project that uses EJS and MongoDB as the database.


## Quick Start
Follow these steps to run the project locally.

### Pre-requisites
- Node.js (v15 or higher)
- npm or yarn

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/akshayraj-1/Url-Shortener.git
cd url-shortener
```

**2. Install dependencies**

```bash
npm install
```

**3. Set up the configuration file**
```dotenv
MONGO_URI=<your_mongodb_uri>
SESSION_SECRET=<your_session_secret>
```
_Replace `<your_mongodb_uri>` with your MongoDB connection string and `<your_session_secret>` with a strong session secret in the `.env.development` or `.env.production` file._

### Run the development server

```bash
npm run dev
```
_This will start the server by default locally at port 3939_
