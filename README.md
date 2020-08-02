# About this project

This project is an API to scheduling and management system to beauty salons. Applying SOLID principles. 

# Progress

- [:heavy_check_mark:] Database
- [:heavy_check_mark:] UUID
- [:heavy_check_mark:] User CRUD
- [:heavy_check_mark:] Prices CRUD
- [:heavy_check_mark:] Stock CRUD
- [:x:] Schedule of the hairdresser CRUD
- [:x:] Main schedule CRUD
- [:x:] JWT
- [:x:] Validate User
- [:x:] Change Password
- [:x:] Recover Password


## To Contribute
* Fork this repository
* Clone this repository
* Create a new branch from dev (feature/yourBranchName or fix/yourBranchName)
* Make your changes and commit
* Push your changes to GitHub
* Open a pull request

## Dependencies
For the project to run in its environment, it is necessary to install all dependencies, using one of these commands:
~~~
npm install
~~~
or
~~~
yarn
~~~

## Migrations
Run the following command to run startup migrations:
~~~
npx knex migrate:latest
~~~

## Tests
Run the following command to run tests:
~~~
yarn test
~~~