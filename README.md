# Ionic IOS App
## *Description*

 - This is an IOS accounting App supports users to add, delete, search,
   view their daily bills.   
 - Currently support U.S./Canada phone authentication.
 - `LAMP `Built using `Ionic4` + `PHP` + `MySQL` + `Redis`+`Apache`
 - Frontend: `Angular.js` + `HTML` + `SCSS` + `TypeScript` + `Axios`
 - Backend: `PHP` + `MySQL` + `Redis`

## Backend API 

 - REST API is written in PHP and database is MySQL and Redis.  
 - One could use SQLite, PostgreSQL, MongoDb, and etc. There are many
   choices of database.

## To Run
`npm install -g ionic`
`npm i`
`ionic serve --browser google chrome`

 1. Install database support: `MySQL` `Redis`, and configure PHP extensions for MySQL and Redis.
 2. Get your DB ready. Locate file: `API/createDataBase.sql` and run to create database tables.
 3. Get ready PHP -> DB connection. Locate `Api/api/connection/` to set connection information for MySQL and Redis.
 4. Set base url of Backend API. Locate `src/app/app.module.ts`. Change `axios.defaults.baseURL=''` to your own server path.
 5. Install `node.js`
 6. Run `npm install -g ionic`
 7. Locate project folder run `npm i`
 8. Web Debugging. Locate project folder and run `ionic serve --browser google chrome`
 
 
## Demo
### Sign up
![img](https://github.com/jimjimliu/Bill-Ionic-/blob/master/demo/1.gif)
### 2FA Verification
![img](https://github.com/jimjimliu/Bill-Ionic-/blob/master/demo/2.gif)
###
![img](https://github.com/jimjimliu/Bill-Ionic-/blob/master/demo/3.gif)
### 
![img](https://github.com/jimjimliu/Bill-Ionic-/blob/master/demo/4.gif)

