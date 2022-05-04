///////// DATE //////////
/**
 * When called as a function, returns a string representation of the current date and time,
 * exactly as new Date().toString() does.
 */
let now = Date()
/* is equal to */
let nowAlias = new Date().toString()
/* Date Object */
let dateObj = new Date()

/////// STATIC METHODS //////
/**
 * Returns the numeric value corresponding to the current time—the
 * number of milliseconds elapsed since January 1,1970 00:00:00 UTC,
 * with leap seconds ignored.
 */
let dateNow = Date.now()
/**
 * Parses a string representation of a date and returns the number of milliseconds
 * since 1 January, 1970, 00:00:00 UTC, with leap seconds ignored.
 * 
 * Note: Parsing of strings with Date.parse is strongly discouraged due
 * to browser differences and inconsistencies.
 */
let parsedDate = Date.parse('01 Jan 1970 00:00:00 GMT')
/**
 * Accepts the same parameters as the longest form of the constructor (i.e. 2 to 7
 * and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC,
 * with leap seconds ignored.
 * Date.UTC(year, month, day, hour, minute, second, millisecond)
 */
let ary = new Date(Date.UTC(89, 0, 8, 0, 0, 0, 0)).toString()

console.table({
  now, nowAlias, dateObj, dateNow, parsedDate, ary
})

/////// INSTANCE METHODS //////
let instance = new Date('05 October 2011 14:48 UTC')
let instanceToString = instance.toString()
/** Returns the day of the month (1–31) for the specified date according to local time. */
let getDate = instance.getDate()
/** Returns the day of the week (0–6) for the specified date according to local time. */
let getDay = instance.getDay()
/** Returns the year (4 digits for 4-digit years) of the specified date according to local time. */
let getFullYear = instance.getFullYear()
/** Returns the hour (0–23) in the specified date according to local time */
let getHours = instance.getHours()
/** Returns the milliseconds (0–999) in the specified date according to local time. */
let getMill = instance.getMilliseconds()
/** Returns the minutes (0–59) in the specified date according to local time. */
let getMinutes = instance.getMinutes()
/** Returns the month (0–11) in the specified date according to local time. */
let getMonth = instance.getMonth()
/** Returns the seconds (0–59) in the specified date according to local time. */
let getSeconds = instance.getSeconds()
/**
 * Returns the numeric value of the specified date as the number of milliseconds
 * since January 1, 1970, 00:00:00 UTC.
 * (Negative values are returned for prior times.)
 */
let getTime = instance.getTime()
/** Returns the time-zone offset in minutes for the current locale. */
let getTimezoneOffset = instance.getTimezoneOffset()
/** Returns the day (date) of the month (1–31) in the specified date according to universal time. */
let getUTCDate = instance.getUTCDate()
/** Returns the day of the week (0–6) in the specified date according to universal time. */
let getUTCDay = instance.getUTCDay()
/** Returns the year (4 digits for 4-digit years) in the specified date according to universal time. */
let getUTCFullYear = instance.getUTCFullYear()
/** Returns the hours (0–23) in the specified date according to universal time. */
let getUTCHours = instance.getUTCHours()
/** Returns the milliseconds (0–999) in the specified date according to universal time */
let getUTCMilliseconds = instance.getUTCMilliseconds()
/** Returns the minutes (0–59) in the specified date according to universal time. */
let getUTCMinutes = instance.getUTCMinutes()
/** Returns the month (0–11) in the specified date according to universal time. */
let getUTCMonth = instance.getUTCMonth()
/** Returns the seconds (0–59) in the specified date according to universal time. */
let getUTCSeconds = instance.getUTCSeconds()
/**
 * Returns the year (usually 2–3 digits) in the specified date according to local time.
 * Use getFullYear() instead
 * */
let getYear = instance.getYear()
/** Sets the day of the month for a specified date according to local time. */
let setDate = instance.setDate(6)
/** Sets the full year (e.g. 4 digits for 4-digit years) for a specified date according to local time */
let setFullYear = instance.setFullYear(2022)
/** Sets the hours for a specified date according to local time. */
let setHours = instance.setHours(12)
/** Sets the milliseconds for a specified date according to local time. */
let setMilliseconds = instance.setMilliseconds(100)
/** Sets the minutes for a specified date according to local time. */
let setMinutes = instance.setMinutes(60)
/** Sets the month for a specified date according to local time. */
let setMonth = instance.setMonth(4)
/** Sets the seconds for a specified date according to local time. */
let setSeconds = instance.setSeconds(2)
/**
 * Sets the Date object to the time represented by a number of milliseconds
 * since January 1, 1970, 00:00:00 UTC.
 * Use negative numbers for times prior.
 */
let setTime = instance.setTime(1651834802101)
/** Sets the day of the month for a specified date according to universal time */
let setUTCDate = instance.setUTCDate(22)
/** Sets the full year (e.g. 4 digits for 4-digit years) for a specified date according to universal time. */
let setUTCFullYear = instance.setUTCFullYear(2011)
/** Sets the hour for a specified date according to universal time. */
let setUTCHours = instance.setUTCHours(10)
/** Sets the milliseconds for a specified date according to universal time. */
let setUTCMilliseconds = instance.setUTCMilliseconds(999)
/** Sets the minutes for a specified date according to universal time. */
let setUTCMinutes = instance.setUTCMinutes(80)
/** Sets the month for a specified date according to universal time. */
let setUTCMonth = instance.setUTCMonth(4)
/** Sets the seconds for a specified date according to universal time. */
let setUTCSeconds = instance.setUTCSeconds(20)
/**
 * Sets the year (usually 2–3 digits) for a specified date according to local time.
 * Use setFullYear() instead.
 */
let setYear = instance.setYear(1977)
/** Returns the "date" portion of the Date as a human-readable string like 'Thu Apr 12 2018'. */
let toDateString = instance.toDateString()
/** Converts a date to a string following the ISO 8601 Extended Format. */
let toISOString = instance.toISOString()
/**
 * Returns a string representing the Date using toISOString().
 * Intended for use by JSON.stringify().
 */
let toJSON = instance.toJSON()
/**
 * Returns a string with a locality sensitive representation of the date portion
 * of this date based on system settings.
 */
let toLocaleDateString = instance.toLocaleDateString()
/**
 * Returns a string with a locality-sensitive representation of this date.
 * Overrides the Object.prototype.toLocaleString() method.
 */
let toLocaleString = instance.toLocaleString()
/**
 * Returns a string with a locality-sensitive representation of the time
 * portion of this date, based on system settings
 */
let toLocaleTimeString = instance.toLocaleTimeString()
/**
 * Returns a string representing the specified Date object.
 * Overrides the Object.prototype.toString() method.
 */
let toString = instance.toString()
/** Returns the "time" portion of the Date as a human-readable string. */
let toTimeString = instance.toTimeString()
/** Converts a date to a string using the UTC timezone. */
let toUTCString = instance.toUTCString()
/** Returns the primitive value of a Date object. Overrides the Object.prototype.valueOf() method. */
let valueOf = instance.valueOf()

console.table({
  instanceToString, getDate, getDay, getFullYear, getHours,
  getMill, getMinutes,  getMonth, getSeconds, getTime, getTimezoneOffset,
  getUTCDate, getUTCDay, getUTCFullYear, getUTCHours,
  getUTCMilliseconds, getUTCMinutes, getUTCMonth, getUTCSeconds,
  getYear, setDate, setFullYear, setHours,
  setMilliseconds,  setMinutes, setMonth, setSeconds,
  setTime, setUTCDate, setUTCFullYear, setUTCHours,
  setUTCMilliseconds, setUTCMinutes, setUTCMonth, setUTCSeconds,
  setYear, toDateString, toISOString, toJSON,
  toLocaleDateString, toLocaleString, toLocaleTimeString, toString,
  toTimeString, toUTCString, valueOf,
})