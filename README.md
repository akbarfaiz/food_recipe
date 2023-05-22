<h1 align="center">Food Recipe API</h1>
<div align="center">
  <img src='https://github.com/akbarfaiz/recipe-react-web/assets/87055460/260204ac-5591-4c4f-a08b-30e23f4a5a22' width="150" height="150" />
</div>

## Table of Contents

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#requirements">Requirements</a></li>
    <li><a href="#installation-and-usage-steps">Installation and Usage Steps</a></li>
    <li><a href="#api-route">API Route</a></li>
    <li><a href="#related-project">Related Project</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

## About The Project
Food Recipe API is an API that functions as a Backend containing user, category, and recipe data. This API is built with <a href="https://expressjs.com">ExpressJs</a> which is a simple and flexible web application framework that uses <a href="https://nodejs.org/en/about/">NodeJs<a/>.<br>

<div align="center"><img src="Flowchart_Aplikasi.png"></div>

### Built With

This app was built with some technologies below:

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [JSON Web Tokens](https://jwt.io/)
- [PostgreSQL](https://www.postgresql.org/)

## Requirements
1. <a href="https://nodejs.org/en/">Node Js</a>
2. <a href="https://www.postman.com/downloads/">Postman</a>
3. Database (<a href="https://www.postgresql.org/download/">PostgreSQL</a>)
4. Server (Localhost or Online Server)
5. <a href="https://cloudinary.com">Cloudinary</a>

## Installation and Usage Steps
1. Clone the repo to your project directory
```
git clone https://github.com/akbarfaiz/food_recipe.git
```
2. Open your project directory in CMD or terminal
3. Run command 'npm i' or 'npm install' to download the package on this API
```
npm install
```
4. Make Cloudinary account to get cloud storage for recipe photo
5. Turn on your server like Xampp for localhost
6. Create database in your database
7. Make new file in your project directory callad '.env' and copy this code to that file :
```
DB_USER=root
DB_HOST=localhost
DB_NAME= //Your Database Name
DB_PASS=
DB_PORT=8080

NODE_ENV=development //If your project still under development, if not you can change to production

JWT_KEY= //Your JWT key or Random Number

EMAIL_NAME= //Your Admin Email
EMAIL_PASSWORD= //Your Admin Email Password

PHOTO_NAME= //Your Cloudinary CLoud Name
PHOTO_KEY= //Your Cloudinary API Key
PHOTO_SECRET= //Your Cloudinary API Secret
```
8. Run your project with command below
```bash
  nodemon //To Start Development
```
9. Open Postman, choose HTTP request method and  request URL like localhost:4000/

## API Route
 * `/`
   * GET
 * `/auth/register`
   * POST
   ```
   body{"email":"ex@email.com","name":"Bob","password":"test123"}
   ```
 * `/auth/otp/:id/:code`
   * GET
   ```
   :id = Users ID , :code = OTP
   ```
 * `/auth/login`
   * GET
   ```
   body{"email":"ex@email.com","password":"test123"}
   ```
 * `/users`
   * GET
 * `/users/myProfile`
   * GET
   ```
   Authorization {Token Type = Bearer Token , Token = User Token}
   ```
 * `/users/updateProfile` 
   * PUT
   ```
   body{"name":"Bob"}
   ```
 
 * `/category`
   * GET
   * POST 
   ```
   For POST Request
   body{"name":"Dessert"}
   ```
 * `/category/:id`
   * GET
   * PUT
   ```
   For PUT Request
   body{"name":"Dessert"}
   ```
   ```
   :id = Category ID 
   ```
 * `/category/delete/:id`
   * DELETE
   ```
   :id = Category ID 
   ```

 * `/recipe`
   * GET
   * POST
   ```
   For POST Request
   body{"name":"Fried Chicken","ingredient":"Chicken","photo" = file(png,jpg,jpeg,jfif),"category_id":1}
   ```
 * `/recipe?search=Sate&sortby=created_at&sort=desc&page=1&limit=10`
 * `/recipe/myRecipe`
   * GET
   ```
   Authorization {Token Type = Bearer Token , Token = User Token}
   ```
 * `/recipe/update/:id`
   * PUT
   ```
   id = Recipe ID , 
   Authorization = Bearer Token , 
   Token = User Token , 
   body{"name":"Fried Chicken","ingredient":"Chicken","photo" = file(png,jpg,jpeg,jfif),"category_id":1} 
   ```
 * `/recipe/delete/:id`
   * Delete
   ```
   id = Recipe ID , Autorization = Bearer Token , Token = User Token  
   ```
  
# Related Project
:rocket: [API](https://long-tan-monkey-veil.cyclic.app)<br>
:rocket: [Recipe Website](https://github.com/akbarfaiz/recipe-react-web)<br>
:rocket: [Recipe Mobile App](https://github.com/akbarfaiz/recipe-mobile-app)<br>

## License
Distributed under the [MIT](/LICENSE) License.
