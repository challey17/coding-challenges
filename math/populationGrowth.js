//https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript

function nbYear(p0, percent, aug, p) {
  //p0 => num
  //percent => num / 100 to get percent
  //aug => num
  //p => num
  //based on initial/current pop + (current pop * percent) + aug = pop for 1 year
  percent = percent / 100;
  let currentp0 = p0;
  let numYears = 0;
  //while currentp0 is less than p, loop again
  for (let i = 0; currentp0 < p; i++) {
    //check if currentp0 is already >= p
    if (currentp0 >= p) {
      return numYears;
    }
    currentp0 = currentp0 + currentp0 * percent + aug;

    numYears++;
  }

  return numYears;
}
