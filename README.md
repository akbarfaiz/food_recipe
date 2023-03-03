<h1 align="center">Food Recipe API</h1>
Food Recipe API is an API that functions as a Backend containing user, category, and recipe data. This API is built with <a href="https://expressjs.com">ExpressJs</a> which is a simple and flexible web application framework that uses <a href="https://nodejs.org/en/about/">NodeJs<a/>.<br>

<h1 align="center"><img src="Flowchart_Aplikasi.png"></h1>

## Requirements
1. <a href="https://nodejs.org/en/">Node Js</a>
2. <a href="https://www.postman.com/downloads/">Postman</a>
3. Database (PostgreSQL or PhpMyAdmin)
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
8. Open Postman, choose HTTP request method and  request URL like localhost:8080/

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

## My Project
 * <a href="https://long-tan-monkey-veil.cyclic.app">Food Recipe API Web Server</a>
