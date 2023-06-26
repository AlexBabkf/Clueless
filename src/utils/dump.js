// Equivalent to PHP's var_dump (best thing ever <3)
// Taken from here: https://www.itsupportguides.com/knowledge-base/tech-tips/var_dump-for-javascript/

export function dump(obj) {
  var out = "";
  for (var i in obj) {
    out += i + ": " + obj[i] + "\n";
  }
  alert(out);
}
