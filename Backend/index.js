require('dotenv').config();
const cors = require('cors')
const express = require("express")

const app = express();
const PORT = process.env.PORT || 4000

const corsOptions = {
  origin: "http://localhost:3000", // Allow requests from frontend running on this domain
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cors(corsOptions));

app.get('/', (req, res) => {
   res.send('Hello from the backend!');
});

app.listen(PORT, () => {
   console.log('Server running on port 4000');
});