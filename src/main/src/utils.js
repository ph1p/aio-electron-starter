const path = require('path');

const isDev = process.env.NODE_ENV === 'development';

const getPathToFile = fileName => {
  if (isDev) {
    return `${path.join(__dirname, `../../app/${fileName}`)}`;
  }
  return `${path.join(__dirname, `../${fileName}`)}`;
};

module.exports = {
  isDev,
  getPathToFile
};
