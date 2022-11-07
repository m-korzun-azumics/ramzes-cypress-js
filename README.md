# Overview
  Ramzes-cypress-js is a starter kit that will help you create end-to-end tests using [Cypress](https://www.cypress.io/), run them in a [docker container](https://github.com/cypress-io/cypress-docker-images), configure the CI pipeline using [GitHub Actions](https://blog.testproject.io/2021/02/01/using-github-actions-to-run-automated-tests/), visualize your test runs using [Mochawesome Reporter](https://www.npmjs.com/package/cypress-mochawesome-reporter) and deploy them to GitHub Pages.

# Built With

![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)


# Usage

##### Local mode - running tests on local machine (NO CONTAINERS)
 
1) Run ```npm install``` to get all dependencies

2) Run ```npm run test``` to run your tests

##### Local mode - running tests on local machine (CONTAINERS)

1) Run ```make build``` to build your container for run testing in container mode
  
2) Run ```make test``` to run your tests in the container

Regardless of whether you run the tests locally on your machine or in a container, after executing the entire test suite, you can find the HTML file with the results of their run in the ```cypress/reports/html``` folder.


##### CI mode - running tests on CI environment 

The ```.github/workflows/ci-flow.yml``` file is responsible for running the pipeline in the GitHub Action. In case you need some additional settings, we recommend using [this](https://github.com/cypress-io/github-action/blob/master/README.md) instruction provided by the developers of the Cypress framework. 

