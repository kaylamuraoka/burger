# "Eat-Da-Burger" Restaurant Application

<p align="center">
  <img src="https://img.shields.io/badge/LICENSE-mit-green"/>

  <img src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>

  <img src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/>

  <img src="https://img.shields.io/badge/bootstrap%20-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white"/>

  <img src="https://img.shields.io/badge/mysql-%2300f.svg?&style=for-the-badge&logo=mysql&logoColor=white"/>
</p>

## Description

Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat and stores every burger in a database, whether devoured or not. Following the MVC design pattern, this application uses Node and MySQL to query and route data in the app, and Handlebars to generate the HTML that renders in the browser.

### How it works

The following steps explain how this "Eat-Da-Burger" application works:

1. A user submits a burger's name that they'd like to eat.

2. The app displays the burger in the waiting area - located on the left side of the page, waiting for it to be devoured, with a `Devour it!` button.

3. When a user clicks the `Devour it!` button, the selected burger will move to the right side of the page.

Note: The app stores every burger in the MySQL database, whether devoured or not.

## Table of Contents

- [**Installation**](#installation)
- [**Usage**](#usage)
- [**License**](#license)
- [**Contributing**](#contributing)
- [**Questions**](#questions)

## Installation

Follow the following steps to setup this application locally:

1. Create a `package.json` file by running `npm init` from the command line.

2. Install the Express npm package: `npm install express`.

3. Install the Handlebars npm package: `npm install express-handlebars`.

4. Install MySQL npm package: `npm install mysql`.

This app stores every burger in a MySQL database, whether it is devoured or not, thus, run the `schema.sql` and `seeds.sql` files into the mysql server from the command line. To do so, follow the steps below:

1. Make sure you're in the `db` folder of your app.

2. Start MySQL command line tool and login: `mysql -u root -p`.

3. With the `mysql>` command line tool running, enter the command `source schema.sql`. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.

4. Now insert the entries you defined in `seeds.sql` by running the file: `source seeds.sql`.

5. Close out of the MySQL command line tool: `exit`.

In the [**connection.js**](config/connection.js) file in the `config` folder, make sure to change this part of the code with your specific credentials

```
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  // Be sure to update with your own MySQL password!
  password: "",
  database: "burgers_db",
});
```

## Usage

Click [**here**](https://secure-ravine-36989.herokuapp.com/) to view deployed application on Heroku.

## License

This project is licensed under the [**MIT**](https://opensource.org/licenses/MIT) license.

## Contributing

All comments and suggestions regarding improvements to this project are welcomed. To contribute to this project, clone this [**project repository**](https://github.com/kaylamuraoka/burger) locally and commit your code on a separate branch. You may then modify the code to your liking, submit well-formed pull requests and open useful issues. For steps on how to clone a repository using the command line, read this section of the Github Docs [**about cloning a repository**](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository#about-cloning-a-repository).

## Questions

Please use the contact information below if you would like to reach me with any questions.

- Github Profile: [**@kaylamuraoka**](https://github.com/kaylamuraoka)

- Email: [**kmurs98@gmail.com**]
