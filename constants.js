// If __PROD__ is not defined, then it is Node environment without Babel
const isProd = (typeof __PROD__ === 'boolean' && __PROD__) || process.env.NODE_ENV === 'production'

const CONSTANTS_MAP = {
  DEV_SERVER_URL: 'http://localhost:3001/',
  DEV_ROOT_URL: 'http://localhost:3000/',
  PROD_ROOT_URL: 'https://rahuljain.work/',
  get ROOT_URL() {
    return isProd ? this.PROD_ROOT_URL : this.DEV_SERVER_URL
  },
  DEV_MONGO_URL: 'mongodb://localhost:27017/rahuljain',
  PROD_MONGO_URL: 'mongodb://localhost:27017/rahuljain',
  get MONGO_URL() {
    return isProd ? this.PROD_MONGO_URL : this.DEV_MONGO_URL
  },
}

module.exports = CONSTANTS_MAP
