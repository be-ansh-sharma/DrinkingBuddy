import dayjs from 'dayjs';
var isBetween = require('dayjs/plugin/isBetween');

// Extend configs
dayjs.extend(isBetween);

export default dayjs;
