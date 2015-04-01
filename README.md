This is a way to ensure any required environment variables are set. You can also specify defaults.

### Installation:

`npm install required_env`

### Example:
```javascript
var required = require('required_env');

required([
  'SOMETHING_SECRET',
  {
    var: 'DATABASE_LOCATION',
    default: 'LOCALHOST'
  }
]);
```
