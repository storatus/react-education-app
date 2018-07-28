var path = require('path')

const bucketName = 'final-education-app'
const Storage = require('@google-cloud/storage');
const projectId = 'master-thesis-210210';

const storage = new Storage({
  keyFilename: path.join(__dirname, '/../storage.json'),
  projectId: projectId
});



module.exports = {
  storage,
  bucketName
}
