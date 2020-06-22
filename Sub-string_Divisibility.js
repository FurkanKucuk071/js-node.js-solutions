const checkSubString = (d1, d2, d3, prime) => `${d1}${d2}${d3}` % prime === 0;
const main = () => {
  let total = 0;
  const pandigitalNumbers = permut('1234567890').filter(char => char[0] !== '0');
  for (const i of pandigitalNumbers) {
    var d = [...String(i)];
    if (checkSubString(d[1], d[2], d[3], 2) &&
      checkSubString(d[2], d[3], d[4], 3) &&
      checkSubString(d[3], d[4], d[5], 5) &&
      checkSubString(d[4], d[5], d[6], 7) &&
      checkSubString(d[5], d[6], d[7], 11) &&
      checkSubString(d[6], d[7], d[8], 13) &&
      checkSubString(d[7], d[8], d[9], 17)) {
      total += Number(i);
    }
  }
  return total;
};
console.log(main());

function permut(string) {
  const arr = [];
  if (string.length < 2) return string;
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (!string.includes(char)) continue;
    const remainingString = string.slice(0, i) + string.slice(i + 1, string.length);
    for (var subPermutation of permut(remainingString))
      arr.push(char + subPermutation)
  }
  return arr;
}
