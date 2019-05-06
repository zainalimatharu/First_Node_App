if (process.env.NODE_ENV === 'PRODUCTION') {
    // We are in production - return theb prod set of keys
    module.exports = require('./prod.js');
} else {
    // We are in developmrnt - return theb devss set of keys
    module.exports = require('./dev.js');
}