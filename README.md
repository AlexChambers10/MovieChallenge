# MovieChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

To build the solution pull down the repository run npm install and then ng serve. 

Then navigate to http://localhost:4200

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

#Improvements

If developing again I would build a more robust filter service. Something that would take a list of objects with a type and then a value. This way you it would work with any new filters that may be applied and would also be easier to implement when filtering data.

For the movie list I would update the interface as the genres for movies can be long and they are cut short by material input.

I would look further into styling but given time restraints didn't want to improve for now.

I am yet to investigate how to do testing with angular so have not been able to implement in a good fashion so this is something I would also attempt to update in the future.
