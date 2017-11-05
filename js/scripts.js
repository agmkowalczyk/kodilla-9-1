//  ----- ZADANIE 9.1 -----

var triangleArea;
function getTriangleArea( a, h ) {
  if ( a > 0 && h > 0 ) {
    return a * h / 2;
  } else {
    return '--Nieprawidłowe dane--';
  }
}

console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(4, 6);
var triangle3Area = getTriangleArea(-3, 7);

console.log('triangle1Area: ', triangle1Area);
console.log('triangle2Area: ', triangle2Area);
console.log('triangle3Area: ', triangle3Area);

//https://github.com/jamesallardice/jslint-error-explanations/blob/master/message-articles/return-conditional.md