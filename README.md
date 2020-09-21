# Galactic Age Calculator

#### Calculates and displays the user's age in various galactic forms, 2020

#### By David McCaslin

## Description

This application allows uers to input an age and returns the age of the user in years for various planets. For example, a user inputted their age as roughly 25 will receive a value over 100 for their age in Mercury years. The app bases calculations off the conversion between each planet's year and Earth's year.

## Setup/Installation Requirements

* Find repository on GitHub or otherwise obtain repo link
* Clone or download repository
* Use <strong>npm run start</strong> to start a live server and run the application through your browser
* The recommended editor for viewing the application is Visual Studio Code

## Specs & Tests

* <strong>Spec: </strong> The application will create an Age object which stores the inputted age.
  * <strong>Input: </strong> age(50)
  * <strong>Output: </strong> 50
* <strong>Spec: </strong> The application will return the inputted age in Mercury years, assuming a Mercury year is .24 Earth years.
  * <strong>Input: </strong> age(26.4)
  * <strong>Output: </strong> 110
* <strong>Spec: </strong> The application will return the inputted age in Venus years, assuming a Venus year is .62 Earth years.
  * <strong>Input: </strong> age(49.6)
  * <strong>Output: </strong> 80
* <strong>Spec: </strong> The application will return the inputted age in Mars years, assuming a Mars year is 1.88 Earth years.
  * <strong>Input: </strong> age(94)
  * <strong>Output: </strong> 50
* <strong>Spec: </strong> The application will return the inputted age in Jupiter years, assuming a Jupiter year is 11.86 Earth years.
  * <strong>Input: </strong> age(237.2)
  * <strong>Output: </strong> 20


## Known Bugs

There are no known bugs. The application is optimzed for a desktop and is not guaranteed to be fully viewable on all devices.

## Support and contact details

Contact: davidmccaslin94@gmail.com

## Technologies Used

* Languages: HTML, CSS, JavaScript (ES6)
* Libraries: Bootstrap, jQuery, npm
* Development Tools: Visual Studio Code, Git, GitHub

### License

MIT Open Source

Copyright (c) 2020 David McCaslin