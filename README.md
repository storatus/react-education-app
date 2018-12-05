<a href="http://www.sebastianglahn.com"><img src="http://www.sebastianglahn.com/images/portfolio/portfolio_education/github/education-github-1.png" alt=""></a>



# React Education App

This is an education App built with React, Redux, Express.js and MongoDB. Additional technologies include google cloud API and the YouTube API.


### Installation

- Please clone this repository using `git clone https://github.com/storatus/react-education-app.git` first. There will be two package.json files, one for the server side and the other for the client side.
This is because server and client have to start at the same time. If you do not have NPM installed, please do so at `https://www.npmjs.com`. This is also a very good project for having a starter platform with react.js and redux.

- In your directory after cloning please do the following:

> Install dependencies for server in `package.json`

```shell
$ cd react-education-app
$ npm install
```
> Install dependencies on client side

```shell
$ cd react-education-app/client
$ npm install
```

### Setup

In order to use the web app you need to register for the Google cloud storage API. Please visit the <a href="https://console.cloud.google.com" target="_blank"> website  </a> for registering.
You will also need an gCloud API key which you can get <a href="https://cloud.google.com/iam/docs/creating-managing-service-account-keys" target="_blank"> here  </a>.

- Please go to `storage.json` and put your gCloud data accordingly
- In `server/config.js` please change the following data:

```javascript
const bucketName = '' // Here comes your bucketName
const Storage = require('@google-cloud/storage');
const projectId = ''; // Here comes your project ID
```
- You can you any database service for MongoDB. I recommend using <a href="https://mlab.com/" target="_blank"> Mlab </a>. The go to `server/configDB.js` and change your data accordingly.

```javascript
mongoose.connect(''); // Here put the database you want to connect to.
```
- Finally, please go to `client/src/components/Course/CourseVideos` and change to your youTube key. You can get it <a href="https://developers.google.com/youtube/v3/" target="_blank"> here </a> :

```javascript
let youtubeKey = ''; // Put your youtube key here
```

## Features

As an Admin you are able to:

- Create Courses
- Create Students
- Enable/Disable Courses
- Upload Files
- Upload YouTube videos

As a student you can:

- Attend Courses
- Review Courses
- Download files
- Watch Youtube videos that were previously uploaded to Youtube.

This web app has been tested regirously and is fully responsive.

## Examples

<img src="http://www.sebastianglahn.com/images/portfolio/portfolio_education/github/education-github-2.png" width="500">

<img src="http://www.sebastianglahn.com/images/portfolio/portfolio_education/github/education-github-3.png" height="300">

<img src="http://www.sebastianglahn.com/images/portfolio/portfolio_education/github/education-github-4.png" height="300">

<img src="http://www.sebastianglahn.com/images/portfolio/portfolio_education/github/education-github-5.png" height="300">


## Support

Please visit my <a href="http://www.sebastianglahn.com" target="_blank"> website </a>. I am always open for new projects and freelance work.

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2018 © <a href="http://www.sebastianglahn.com" target="_blank"> Sebastian Glahn </a>.
