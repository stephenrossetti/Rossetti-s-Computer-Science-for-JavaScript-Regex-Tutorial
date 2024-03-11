# Rossetti-s-Computer-Science-for-JavaScript-Regex-Tutorial

https://gist.github.com/stephenrossetti/1d42300d64ce943e8cf477e55d45d3fc

<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]

<br />
<div align="center">
<a href="https://github.com/stephenrossetti/Rossetti-s-Model-View-Controller-MVC-Tech-Blog">
<img src="./images/gist.png" alt="Homework Logo" width="100" height="100">
</a>

<h3 align="r">Model View Controller (MVC) Tech Blog</h3>
<p align="center">
    Login/Sign-up and starting posting here!
<br />

<br />
<a href="https://rossetti-mvc-tech-blog-5f23ac01a35f.herokuapp.com/">View Demo</a>
    ·
<a href="https://github.com/stephenrossetti/Rossetti-s-Model-View-Controller-MVC-Tech-Blog/issues">Report Bug</a>
    ·
<a href="https://github.com/stephenrossetti/Rossetti-s-Model-View-Controller-MVC-Tech-Blog/issues">Request Feature</a>
  </p>
</div>


<details>
<summary>Table of Contents</summary>
<ol>
<li><a href="#overview-of-rossettis-tech-blog"> Overview of MVC Tech Blog</a></li>
<li><a href="#user-story">User Story</a></li>
<li><a href="#acceptance-criteria">Acceptance Criteria</a></li>
<li><a href="#getting-started">Getting Started</a><li>
<ul>
<li><a href="#prerequisites">Prerequisites</a></li>
<li><a href="#installation">Installation</a></li>
</ul>
</li>
<li><a href="#built-with-&-technology-used">Technology Used</a></li>
<li><a href="#usage">Usage</a></li>
<li><a href="#links">Links</a></li>
<li><a href="#contributing">Contributing</a></li>
<li><a href="#license">License</a></li>
<li><a href="#contact-us">Contact Us </a></li>
<li><a href="#credits">Credits</a></li>
<li><a href="#acknowledgments">Acknowledgments</a></li>
</ol>
</details>

## Overview of Rossetti's Tech Blog

Model-View-Controller (MVC) Challenge: Tech-Blog, or Module-14's Challenge, was to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This site was built completely from scratch and deployed to Heroku. The apps follows the MVC paradigm in its architectural structure, uses Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

Along with other skills learned in previous challenges, this challenge tested our ability to utilize express-handlebars, MySQL2 and Sequelize, Express.js, dotenv, bcrypt, express-session and connect-session-sequelize.

## User Story

```
AS A web development student
I WANT a tutorial explaining a specific regex
SO THAT I can understand the search pattern the regex defines
```

## Acceptance Criteria

```
GIVEN a regex tutorial
WHEN I open the tutorial
THEN I see a descriptive title and introductory paragraph explaining the purpose of the tutorial, a summary describing the regex featured in the tutorial, a table of contents linking to different sections that break down each component of the regex and explain what it does, and a section about the author with a link to the author’s GitHub profile
WHEN I click on the links in the table of contents
THEN I am taken to the corresponding sections of the tutorial
WHEN I read through each section of the tutorial
THEN I find a detailed explanation of what a specific component of the regex does
WHEN I reach the end of the tutorial
THEN I find a section about the author and a link to the author’s GitHub profile
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Built With & Technology Used

- ![MySQL2](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

- ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)

- ![Handlebars](https://img.shields.io/badge/Handlebars%20js-f0772b?style=for-the-badge&logo=handlebarsdotjs&logoColor=black)

- ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

- ![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)

- ![Heroku](https://ziadoua.github.io/m3-Markdown-Badges/badges/Heroku/heroku1.svg)

- ![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)

## Getting Started

How to get started with the MVC Tech Blog!

### Prerequisites

- npm

### Installation

Instructions on how to download our app.

1. Visit us @ [https://github.com/stephenrossetti](https://github.com/stephenrossetti/Rossetti-s-Model-View-Controller-MVC-Tech-Blog)
2. Clone the repo
   ```sh
   git clone git@github.com:stephenrossetti/Rossetti-s-Model-View-Controller-MVC-Tech-Blog.git
   ```
3. Install NPM packages

   ```sh
   npm install i
   ```

4. Source the database

   ```sh
   mysql -u root -p
   ```
   [Enter password]
    ```sh
   source db/schema.sql;
   ```
   [Exit]

5. Seed the database
     ```sh
   node seeds/seed.js
   ```

6. To run our app

   ```sh
   node server.js
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

![MVC Tech Blog](./public/images/02-Home.png)
![MVC Tech Blog](./public/images/03-Login.png)
![MVC Tech Blog](./public/images/04-Signup.png)
![MVC Tech Blog](./public/images/05-Signin.png)
![MVC Tech Blog](./public/images/06-Dashboard.png)
![MVC Tech Blog](./public/images/07-Post.png)
![MVC Tech Blog](./public/images/08-Edit.png)
![MVC Tech Blog](./public/images/09-Homenew.png)
![MVC Tech Blog](./public/images/10-Comment.png)
![MVC Tech Blog](./public/images/11-Commentnew.png)
![MVC Tech Blog](./public/images/12-Delete.png)

## Links
[The URL of the Heroku deployed application](https://rossetti-mvc-tech-blog-5f23ac01a35f.herokuapp.com/)

[The URL of the Github Repository](https://github.com/stephenrossetti/Rossetti-s-Model-View-Controller-MVC-Tech-Blog)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing

Here is how you can be apart of creating MVC Tech Blog.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b [BRANCH NAME]`)
3. Commit your Changes (`git commit -m 'Add my commits to main'`)
4. Push to the Branch (`git push origin main`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

N/A

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact Us

Contact me ([Stephen Rossetti](https://github.com/stephenrossetti)) if you have any questions or feedback.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Credits

Coding help from external sources:

- Utilized Module-14-Mini-Project (Crowdfunding App) as a template to begin coding the website. Included most of the functionality except for comment models, relationships, and javascript/controllers for adding comments and editing blog posts.
- Utilized my own Project-2 (Convention Planner) app for design and handlebars.
- Utilzied TAs and office hours for help with front-end/back-end GET requests that involved multiple models. Also, applying those GET requests within handlebars.
- Utilized StackOverflow for miscellaneous code help and ideas.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acknowledgments

Thanks to our resources on creating our app!

- [Visual Studio Code](https://code.visualstudio.com/)
- [Heroku Installation](https://coding-boot-camp.github.io/full-stack/heroku/deploy-with-heroku-and-mysql)
- [Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)
- [Static Badges](https://shields.io/badges)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[contributors-shield]:https://img.shields.io/badge/CONTRIBUTORS%20--4?style=for-the-badge&logo=gitlab&labelColor=WHITE
[contributors-url]: https://github.com/stephenrossetti/Rossetti-s-Model-View-Controller-MVC-Tech-Blog/graphs/contributors