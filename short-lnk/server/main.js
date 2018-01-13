import 'babel-polyfill';
import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';//this gives access to the webapp behind the scenes
//that serves the content. Allows allows to attach middleware.

import '../imports/api/links';
import '../imports/startup/simple-schema-configuration';

import '../imports/api/users';
/*Calls the imports/api/user.js file and runs it. There are no exports returned
so no need for the from portion*/


Meteor.startup(() => {
  // code to run on server at startup
  WebApp.connectHandlers.use((req, res, next) => {//connect in connectHandlers refers to the connect library.
    // .use has three areguments; req, the request made, res, the response sent and the most important is next.
    //next is a function that gets called  when the middleware is done, it calls next and te application keeps running.
    console.log("This is from middleware.");
    console.log(req.url + "req.url log", req.method, req.headers, req.query);
    //req.url = url of application
    //req.method = GET or POST method
    //req.headers = shows information like cookies, encoding, languages etc
    //req.query would be populated with key:value pairs if query was run.
    // This need to explore in the res object include, HTTP status code, HTTP Headers, HTTP body and then need to End HTTP request
    // res.statusCode = 404;//status code can be any code. www.httpstatuses.com lists all.
    // res.setHeader('my-customerHeader', 'Set the header');//two arguments, name of the header trying to set, Second is value
    // res.write('<h1>This is res.write</h1>');//this will override all programmed elements on page.
    // res.end();//this will prevent anything from displaying on page as it terminates the response to the HTTP request.
    next();
  });
});
