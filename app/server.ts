// import * as express from 'express';
// import open from 'open';
// import bodyParser from 'body-parser';
// import {WelcomeController} from './controllers';

// const app: express.Application = express();
// const port: number = process.env.PORT || 3000;


// // Mount the WelcomeController at the / route
// // app.use('/', WelcomeController);

// app.get("/", function(req, res) {
//     res.send({ message: "Hello, World!" });
// });

// app.get("/foo", function(req, res) {
//     res.send({ message: "foo foo" });
// });

// app.listen(port, () => {
//     console.log(`Listening at http://localhost:${port}/`);
// });


//https://github.com/kathrynmbrown/node-api-testing-example


// import express, { Request, Response } from 'express';
import * as express from 'express';
import * as bodyParser from 'body-parser';


const app: express.Application = express();
const port: number = 3000;

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

let locationList: any[] = [];

app.get('/users/1', function(req: express.Request, res: express.Response) {
  let user = {
    name: "UserOne",
    email: "userone@example.com",
    phoneNumber: "1234567890",
    role: "admin"
  };
  res.send(user);
});

app.put('/users/1', (req: express.Request, res: express.Response) => {
  let user = {
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    role: req.body.role
  };
  res.send(user);
});

app.post('/locations', (req: express.Request, res: express.Response) => {
  let location = {
    addressStreet: req.body.addressStreet,
    addressCity: req.body.addressCity,
    addressState: req.body.addressState,
    addressZip: req.body.addressZip,
    userId: req.body.userId
  };
  locationList.push(location);
  res.send(location);
});

app.get('/users/1/location', (req: express.Request, res: express.Response) => {
  res.send(locationList[0]);
});

app.get('/users/2/location', (req: express.Request, res: express.Response) => {
  if (req.body.userId == 2) {
    res.send(locationList[0]);
  } else {
    res.send(401);
  }
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});

export default app;
