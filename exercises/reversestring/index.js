// --- Directions
//! Given a string, return a new string with the reversed
//! order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//~ \\\\\\\\\\.REVERSE METHOD\\\\\\\\\\\
//! function reverse(str) {
// !   const arr = str.split('');
//!    arr.reverse();
//!   return arr.join('');
//! }
//~ \\\\\\\\\ CLEANED UP \\\\\\\\\\\\
//! function reverse(str) {
//!   return str
//!       .split('')
//!      .reverse()
//!      .join('');
//! }


module.exports = reverse;
