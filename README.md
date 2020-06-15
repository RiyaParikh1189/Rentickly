# Rentickly (Assignment - 2)
This repository is to work on assignment for course CSCI5709.

* [Source Code](https://github.com/RiyaParikh1189/Rentickly)
* [App  Link](https://myrentickly.herokuapp.com/)

* Date Created: 08 JUN 2020
* Last Modification Date: 14 JUN 2020

# About Project

The purpose of web application is to provide guidance and information to the people who are in the search of rental apartment. The application will be recognized as “Rentickly”. The Application will not only be helpful for the citizens, but it will be also useful for the new immigrants who are willing to move in the city and worried about searching an apartment. Users can rate the Apartments as per their experience and can also use chat forums to solve their query regarding the apartment.

## Authors

* [Riya Parikh - B00834638](Riya.Parikh@dal.ca)


## Getting Started

In order to contribute to this project perform following setps on your system carefully.


### Prerequisites

To have a local copy of  assignment up and running on your local machine, you will first need to install the following software and environment.

1. [Node JS](https://nodejs.org/en/download/)
2. [npm](https://www.npmjs.com/get-npm)
3. [React Library](https://www.npmjs.com/package/create-react-app)
4. [Code Editor](https://code.visualstudio.com/download)


### Installing

1. Open terminal/ Command Prompt from project directory.

2. Install npm package using following command.
```sh
npm install
```

3. Install react libraries with the help of npm packet manager.
```sh
npm i -g create-react-app
```

4. Run the application in development server and open `localhost:3000` in browser.
 ```sh
npm start
```

5. To build application for Production Server, run following command.
```sh
npm run build
```

## Deployment

Used [Heroku](www.heroku.com) to deploy the web application.

## Built With

- Cross-browser CSS with [LambdaTest](https://www.lambdatest.com/blog/how-to-make-a-cross-browser-compatible-website/)
- Unit tests using [Jasmine](http://jasmine.github.io)
- Static code analysis using [HTMLHint](http://htmlhint.com/)


## Typography

- The application uses Segoe UI, Black and Regular font.

## Color Palatte

- Color palette of the application is primarily derived from w3school color.

| UI Element | Color Code
|------------|-----------
| Backgroun color - Header   | #3c3c3c, #EEE
| Background color - Content| #efefef
| Font color | #000000



## Sources Used

### app.js

**Lines 66-73**

```
const menuBar = ['About Us','Our Products','Services','FAQ','Contact Us']
    const menuItems = menuBar.map((val,index)=>{
      return (
        <MenuItem 
          key={index} 
          delay={`${index * 0.1}s`}
          onClick={()=>{this.handleLinkClick();}}>{val}</MenuItem>)
    });
```
The code above was created by adapting the code in [Codepen](ttps://codepen.io/naturalclar/pen/zEwvbg) as shown below: 

```
const menu = ['About Us','Our Products','Services','FAQ','Contact Us']
      return (
        <MenuItem 
          key={index} 
          onClick={()=>{this.handleLinkClick();}}>{val}</MenuItem>)
    });
```

- The code in [Codepen](https://codepen.io/naturalclar/pen/zEwvbg
) is used in the IDE of React to demonstrate use of responsive Hamburger Menu.
- [Codepen](https://codepen.io/naturalclar/pen/zEwvbg
)'s Code is used to implement responsive Hamburger Menu that modifies its behaviour according to screen size.
- [Codepen](https://codepen.io/naturalclar/pen/zEwvbg
)'s Code is modified to redirect in the web application. Moreover, the original code behaves same for all screen size, but I have changed that to work different for different screen size.

### index.css

**Lines 60-75**

```
.faqs .faq .faq-question::after {
	content: '';
	position: absolute;
	top: 50%;
	right: 0px;
	transform: translateY(-50%);
	width: 30px;
	height: 30px;

	background-image: url('./arrow-down-mint.svg');
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;

	transition: all 0.4s ease-out;
}
```
The code above was created by adapting the concept from in [w3school](https://www.w3schools.com/css/) as shown below: 

```
.content {
	position: absolute;
	top: 50%;
	right: 0px;
	transform: translateY(-50%);
	width: 30px;
	height: 30px;
	background-position: center;

	transition: all 0.4s ease-out;
}
```

- The code in [w3school](https://www.w3schools.com/css/) is used in the example of Dialog component.
- [w3school](https://www.w3schools.com/css/)'s Code is used to toggle question-answer in the faq page.
- [w3school](https://www.w3schools.com/css/)'s Code is modified to display the toggle view. I have added background iamge and other property for better result.



## References
* [Form Validation](https://github.com/MyNameIsURL/react-form-validation-tutorial)
* [Page Routing](https://github.com/MyNameIsURL/react-bootstrap-website)
* [Hamburger Menu](https://codepen.io/naturalclar/pen/zEwvbg)




## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
