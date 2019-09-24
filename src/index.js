module.exports = function multiply(first, second) {

  //first solution
  let n1 = BigInt(first);
  let n2 = BigInt(second);
  return (n1*n2).toString(10);

  //second solution - WORKS TOO!!!!
  //**********************
  /*let a = [];
  let b = [];
  let c = [];
  for (i = first.length - 1; i >= 0; i--) {
    a[(first.length - 1) - i] = first[i];
  }
  for (i = second.length - 1; i >= 0; i--) {
    b[(second.length - 1) - i] = second[i];
  }
  
  cSum = 0;
  ost = 0;

  for (i = 0; i < b.length; i++) {
    for (j = 0; j < a.length; j++) {
      if ((i + j) <= (c.length - 1)) {
          cSum = c[i + j];  
      } else {
          cSum = 0;
      }
      cSum = cSum + Number(a[j]) * Number(b[i]) + ost;
      c[i + j] = cSum % 10;
      ost = Math.floor(cSum / 10);
    }

    if (ost != 0) {
        c.push(ost);
    }
    ost = 0;
  }
  
  result = "";
  for (i = c.length - 1; i >= 0; i--) {
    result = result + c[i].toString(10);
  }

  return result;*/

}
