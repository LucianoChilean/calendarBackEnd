const { timezone } = require('../config/globals'); // Env TIMEZONE= "America/Santiago" (no requerido)

const dayJS = require('dayjs');
const tz = require('dayjs/plugin/timezone');
const utc = require('dayjs/plugin/utc');
const parser = require('dayjs/plugin/customParseFormat');

dayJS.extend(parser);
dayJS.extend(utc);
dayJS.extend(tz);

if (timezone) dayJS.tz.setDefault(timezone);

/**
 * Get current date by specified format.
 * @param { String | undefined } format Format to use.(Optional)
 * @returns { String } Current formatted date.
 */
const nowJSON = (format) => dayJS.tz(new Date()).format(format);

/**
 * Get current date.
 * @returns { Date } Current date.
 */
const now = () => new Date(nowJSON('YYYY-MM-DD HH:mm:ss.SSS'));

/**
 * Convert string date to specified format.
 * @param { String } dateStr Date.(String)
 * @param { String } fromFormat Date parameter format.(dateStr)
 * @param { String } toFormat Output format.
 * @returns Formatted date by toFormat parameter.
 * @example datetime.convert('20220612','YYYYMMDD','DD/MM/YYYY') => '12/06/2022'
 */
const convert = (dateStr, fromFormat, toFormat) =>
  dayJS.tz(dayJS(dateStr, fromFormat)).format(toFormat);
/**
 * Parse string date to date object.
 * @param { String } dateStr Date.(String)
 * @param { String } fromFormat Date parameter format.(dateStr)
 * @returns { Date } Formatted date object.
 */
const parseToDate = (dateStr, fromFormat) => dayJS(dateStr, fromFormat).toDate();

module.exports = {
  now,
  nowJSON,
  convert,
  parseToDate,
  instance: dayJS
};
