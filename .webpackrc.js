const pxtorem = require('postcss-pxtorem');
const pxtorem2 = _interopRequireDefault(pxtorem).default;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }export default {
  entry: "./src/index.js",
  "env": {
   "development": {
   extraPostCSSPlugins: [
        pxtorem2({ rootValue: 37.5, propWhiteList: [], })
   ]
   },
   "production": {
   extraPostCSSPlugins: [
   pxtorem2({ rootValue: 37.5, propWhiteList: [], })
   ]
   }
  }
}
