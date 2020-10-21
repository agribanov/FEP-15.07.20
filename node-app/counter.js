const logger = require('./logger');

let counts = 0;



module.exports = {
    inc: () => ++counts,
    dec: () => --counts,
    get: () => counts,
    set: (val) => counts = val, 
    show: () => logger.log(counts)
}