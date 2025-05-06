# 🏡 MiniBnB - Your Home Away From Home 🌟<br> <br>

**MiniBnB** is a full-stack web application that replicates core functionalities of Airbnb, enabling users to browse and list places to stay across the world. Developed using **Node.js**, **Express**, **MongoDB**, and **EJS**, this project showcases `Authentication`, `Error handling`, and `Dynamic routing` in an `MVC Structure`. 🏖️
> Visit the Website: [ Live Demo ](https://minibnb.onrender.com) // https://minibnb.onrender.com

---
---

![MiniBnB Banner](https://github.com/Priyash-Das/Photos/blob/main/MiniBnB%20Photo/main.png)

---
---

## 📖 Project Overview

MiniBnB replicates core Airbnb features while adding its own flair. It allows users to:
- Sign up, log in, and manage their accounts securely.
- Create, edit, and delete property listings with images stored on Cloudinary.
- Leave reviews and ratings for listings with an interactive star system.
- View listing locations on an interactive map using Leaflet.js.
- Enjoy a responsive, user-friendly interface powered by Bootstrap and custom CSS.

The project is designed to be scalable, with clean code architecture and reusable components, making it a great foundation for further enhancements.

---
---

## 📽️ Demo Video 

👉 [Click here](https://drive.google.com/drive/folders/1KL2R9goFYcz9oY0I6iwhuhCdv1MPXCh8?usp=sharing)

---
---

## 📸 Screenshots

<table>
  <tr>
    <td width="33%">
      <img src="https://github.com/Priyash-Das/Photos/blob/main/MiniBnB%20Photo/1.png" alt="Preview 1" width="100%">
      <p align="center">Homepage</p>
    </td>
    <td width="33%" rowspan="4">
      <img src="https://github.com/Priyash-Das/Photos/blob/main/MiniBnB%20Photo/4.png" alt="Preview 4" height="100%">
      <p align="center">Listing Details Page</p>
    </td>
    <td width="33%">
      <img src="https://github.com/Priyash-Das/Photos/blob/main/MiniBnB%20Photo/5.png" alt="Preview 5" width="100%">
      <p align="center">Listing Thumbnails</p>
    </td>
  </tr>
  <tr>
    <td>
      <img src="https://github.com/Priyash-Das/Photos/blob/main/MiniBnB%20Photo/7.png" alt="Preview 7" width="100%">
      <p align="center">Sign Up Page</p>
    </td>
    <td>
      <img src="https://github.com/Priyash-Das/Photos/blob/main/MiniBnB%20Photo/6.png" alt="Preview 6" width="100%">
      <p align="center">Login Page</p>
    </td>
  </tr>
  <tr>
    <td>
      <img src="https://github.com/Priyash-Das/Photos/blob/main/MiniBnB%20Photo/2.png" alt="Preview 2" width="100%">
      <p align="center">Create Listing</p>
    </td>
    <td>
      <img src="https://github.com/Priyash-Das/Photos/blob/main/MiniBnB%20Photo/3.png" alt="Preview 3" width="100%">
      <p align="center">Edit Listing</p>
    </td>
  </tr>
  <tr>
    <td>
      <img src="https://github.com/Priyash-Das/Photos/blob/main/MiniBnB%20Photo/8.png" alt="Preview 8" width="100%">
      <p align="center">DB (Listing)</p>
    </td>
    <td>
      <img src="https://github.com/Priyash-Das/Photos/blob/main/MiniBnB%20Photo/9.png" alt="Preview 9" width="100%">
      <p align="center">DB (Review)</p>
    </td>
  </tr>
</table>

---
---

## 🚀 Features

MiniBnB comes with a wide range of features to enhance user experience:

- **User Authentication** 🔐  
  - Secure signup, login, and logout using Passport.js with `passport-local-mongoose`.
  - Passwords are hashed and salted for security.

- **Listing Management** 🏠  
  - Create, edit, and delete listings with fields like title, description, price, location, and country.
  - Upload and manage images via Cloudinary using `multer`.

- **Review System** ⭐  
  - Add and delete reviews for listings with a 1-5 star rating system.
  - Interactive star rating UI with animations and confetti effects (via `rating.js` and `rating.css`).

- **Dynamic UI/UX** 🎨  
  - Interactive design with Bootstrap 5 and custom CSS.
  - Filter listings by categories with a scrollable filter bar.
  - Toggle tax display for transparent pricing.

- **Interactive Map** 🗺️  
  - Display listing locations on a map using Leaflet.js and OpenStreetMap.

- **Session & Flash Messages** 💬  
  - Persistent sessions with `express-session`.
  - Flash messages for success/error feedback using `connect-flash`.

- **Authorization** 🔒  
  - Restrict actions (e.g., edit/delete) to listing owners and review authors using middleware.
  - Validate data with Joi schemas.

- **Error Handling** ⚠️  
  - Custom error pages with timestamps and status codes.
  - Graceful handling of invalid routes and server errors.

---
---

## 🛠️ Tools & Tech Stack

MiniBnB is built using a modern tech stack for performance and scalability:

```
| Category            | Tools Used                          |	{
|---------------------|-------------------------------------|		"name": "MiniBnB",
|  Frontend           | EJS, Bootstrap 5, Custom CSS,       |		"author": "Priyash Das",
|                     | JavaScript( Leaflet.js )            |	}
|                     |                                     |	{
|  Backend            | Node.js, Express.js                 |		"dependencies": {
|                     |                                     |			"cloudinary": "^1.41.0",
|  Database           | MongoDB, (with Mongoose ORM)        |			"connect-flash": "^0.1.1",
|                     |                                     |			"connect-mongo": "^5.1.0",
|  Image Hosting      | Cloudinary, Multer                  |			"dotenv": "^16.5.0",
|  File Storage       |                                     |			"ejs": "^3.1.10",
|                     |                                     |			"ejs-mate": "^4.0.0",
|  Authentication     | Passport.js, passport-local-mongoose|			"express": "^4.21.2",
|  Sessions           | express-session                     |			"express-session": "^1.18.1",
|                     |                                     |			"joi": "^17.13.3",
|  Package Manager    | npm                                 |			"method-override": "^3.0.0",
|                     |                                     |			"mongoose": "^8.14.1",
|  Environment        | dotenv for environment variables    |			"multer": "^1.4.5-lts.2",
|                     |                                     |			"multer-storage-cloudinary": "^4.0.0",
|  Validation         | Joi for schema validation           |			"nodemon": "^3.1.10",
|                     |                                     |			"passport": "^0.7.0",
|  Utilities          | Method-Override, Connect-Flash      |			"passport-local": "^1.0.0",
|                     |                                     |			"passport-local-mongoose": "^8.0.0"
|  Dev Tools	      | Nodemon for development             |		}
|---------------------|-------------------------------------|	}
```

---
---

## 📁 Folder Structure

```
Mini Airbnb
├─ .env
├─ app.js
├─ cloudConfig.js
├─ controllers
│  ├─ listings.js
│  ├─ reviews.js
│  └─ users.js
├─ init
│  ├─ data.js
│  └─ index.js
├─ middleware.js
├─ models
│  ├─ listing.js
│  ├─ review.js
│  └─ user.js
├─ package-lock.json
├─ package.json
├─ public
│  ├─ css
│  │  ├─ rating.css
│  │  └─ style.css
│  ├─ js
│  │  ├─ rating.js
│  │  └─ script.js
│  └─ updates
│     ├─ default_img.png
│     ├─ MiniBnB.png
│     └─ MiniBnB_logo.png
├─ routes
│  ├─ listing.js
│  ├─ review.js
│  └─ user.js
├─ schema.js
├─ uploads
├─ utilities
│  ├─ ExpressError.js
│  └─ wrapAsync.js
└─ views
   ├─ error.ejs
   ├─ includes
   │  ├─ flash.ejs
   │  ├─ footer.ejs
   │  └─ navbar.ejs
   ├─ layouts
   │  └─ boilerplate.ejs
   ├─ listings
   │  ├─ edit.ejs
   │  ├─ index.ejs
   │  ├─ new.ejs
   │  └─ show.ejs
   └─ users
      ├─ login.ejs
      └─ signup.ejs
```

---
---

## 🧑‍💻 Installation & Setup

1. Clone the repo  
   `git clone https://github.com/Priyash-Das/MiniBnB.git`

2. Install dependencies  
   `npm install`

```
json
{
  "dependencies": {
    "cloudinary": "^1.41.0",
    "connect-flash": "^0.1.1",
    "connect-mongo": "^5.1.0",
    "dotenv": "^16.5.0",
    "ejs": "^3.1.10",
    "ejs-mate": "^4.0.0",
    "express": "^4.21.2",
    "express-session": "^1.18.1",
    "joi": "^17.13.3",
    "method-override": "^3.0.0",
    "mongoose": "^8.14.1",
    "multer": "^1.4.5-lts.2",
    "multer-storage-cloudinary": "^4.0.0",
    "nodemon": "^3.1.10",
    "passport": "^0.7.0",
    "passport-local": "^1.0.0",
    "passport-local-mongoose": "^8.0.0"
  }
}
```

3. Create a `.env` file and add your environment variables:

```
CLOUDINARY_CLOUD_NAME=your_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret
DB_URL=mongodb+srv://...
SECRET=sessionSecret
```

4. Start the app  
`npm run dev`

The app will run at `http://localhost:8080`

---
---

## 🙌 Final Thoughts

MiniBnB was built as a passion project to explore full-stack web development and replicate real-world application behavior. It demonstrates CRUD operations, RESTful routing, secure authentication, file uploads, and database integration — all packed in an interactive interface.

I hope you enjoy exploring the project as much as I enjoyed building it!

Thanks for visiting! 😊
