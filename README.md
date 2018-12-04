<a href="http://www.sebastianglahn.com"><img src="http://www.sebastianglahn.com/images/portfolio/portfolio_education/education_2_portfolio.png" alt=""></a>



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

In order to use the web app you need to register for the Google cloud storage API. Please visit `https://console.cloud.google.com` for registering.
You will also need an gCloud API key which you can get here `https://cloud.google.com/iam/docs/creating-managing-service-account-keys`.

- Please go to `storage.json` and put your gCloud data accordingly
- In `server/config.js` please change the following data:

```javascript
const bucketName = '' // Here comes your bucketName
const Storage = require('@google-cloud/storage');
const projectId = ''; // Here comes your project ID
```
- You can you any database service for MongoDB. I recommend using `https://mlab.com/`. The go to `server/configDB.js` and change your data accordingly.

```javascript
mongoose.connect(''); // Here put the database you want to connect to.
```
- Finally, please go to `client/src/components/Course/CourseVideos` and change to your youtube key ( you can get it here: `https://developers.google.com/youtube/v3/` )     

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



## Support

Please visit my website `www.sebastianglahn.com`. I am always open for new projects and freelance work.

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2018 © <a href="http://www.sebastianglahn.com" target="_blank"> Sebastian Glahn </a>.





<!--
## Team

> Or Contributors/People

| <a href="http://fvcproductions.com" target="_blank">**FVCproductions**</a> | <a href="http://fvcproductions.com" target="_blank">**FVCproductions**</a> | <a href="http://fvcproductions.com" target="_blank">**FVCproductions**</a> |
| :---: |:---:| :---:|
| [![FVCproductions](https://avatars1.githubusercontent.com/u/4284691?v=3&s=200)](http://fvcproductions.com)    | [![FVCproductions](https://avatars1.githubusercontent.com/u/4284691?v=3&s=200)](http://fvcproductions.com) | [![FVCproductions](https://avatars1.githubusercontent.com/u/4284691?v=3&s=200)](http://fvcproductions.com)  |
| <a href="http://github.com/fvcproductions" target="_blank">`github.com/fvcproductions`</a> | <a href="http://github.com/fvcproductions" target="_blank">`github.com/fvcproductions`</a> | <a href="http://github.com/fvcproductions" target="_blank">`github.com/fvcproductions`</a> |

- You can just grab their GitHub profile image URL
- You should probably resize their picture using `?s=200` at the end of the image URL.

---

## FAQ

- **How do I do *specifically* so and so?**
    - No problem! Just do this.

---

## Support

Reach out to me at one of the following places!

- Website at <a href="http://fvcproductions.com" target="_blank">`fvcproductions.com`</a>
- Twitter at <a href="http://twitter.com/fvcproductions" target="_blank">`@fvcproductions`</a>
- Insert more social links here.

---

## Donations (Optional)

- You could include a <a href="https://cdn.rawgit.com/gratipay/gratipay-badge/2.3.0/dist/gratipay.png" target="_blank">Gratipay</a> link as well.

[![Support via Gratipay](https://cdn.rawgit.com/gratipay/gratipay-badge/2.3.0/dist/gratipay.png)](https://gratipay.com/fvcproductions/)


---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2015 © <a href="http://fvcproductions.com" target="_blank">FVCproductions</a>.

-->
