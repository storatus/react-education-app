/**
 * config module - google storage
 * @module config
 */

var path = require('path')

const bucketName = '' // Put here your bucketName
const Storage = require('@google-cloud/storage');
const projectId = ''; // Put here your id

const storage = new Storage({
  keyFilename: path.join(__dirname, '/../storage.json'),
  projectId: projectId
});


module.exports = {
  storage,
  bucketName
}
