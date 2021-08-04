// 1. ФУНКЦИЯ ПРОВЕРКИ ВОЗРАСТА---------------------------------------

// const isAdult = function(age){
//   if (isNaN(age)){
//     return null;
//   }
//   if (age<0){
//     return null;
//   }
//   if (age>=18){
//     return true;
//   } else {
//     return false;
//   }
// }

// 2. ФУНКЦИЯ ПРОВЕРКИ КРАТНОСТИ--------------------------------------

// const checkMultiplicity = function(value1, value2){
//   if (isNaN(value1) || isNaN(value2)){
//     return null;
//   }
//   if (value1<=0 || value2<=0){
//     return null;
//   }
//   if (value1 % value2 === 0){
//     return true;
//   } else {
//     return false;
//   }
// }

// 3. ФУНКЦИЯ ПРОВЕРКИ ВОЗМОЖНОСТИ СОЗДАНИЯ ТРЕУГОЛЬНИКА--------------

// const checkTrianglePossibility = function(length1, length2, length3){
//   if (isNaN(length1) || isNaN(length2) || isNaN(length3)){
//     return null;
//   }
//   if (length1<=0 || length2<=0 || length3<=0){
//     return null;
//   }
//   if (length1 + length2 > length3 && length3 + length2 > length1 && length1 + length3 > length2){
//     return true;
//   } else {
//     return false;
//   }
// }

// 4. ФУНКЦИИ РАСЧЕТА ПЛОЩАДЕЙ (ПОВЕРХНОСТИ)--------------------------

// 4.1 Ромб----------------------

// const calculationAreaRhombus = function(diagonal1, diagonal2){
//   if (isNaN(diagonal1) || isNaN(diagonal2)){
//     return null;
//   }
//   if (diagonal2<=0 || diagonal1<=0){
//     return null;
//   }
//   return 0.5*diagonal1*diagonal2;
//
// }

// 4.2 Цилиндр -------------------

//
// const calculationAreaCylinder = function(radius, height){
//   if (isNaN(radius) || isNaN(height)){
//     return null;
//   }
//   if (radius<=0 || height<=0){
//     return null;
//   }
//   return 2*3.14*radius*(radius+height);
// }

// 4.3 Треугольник --------------------

// const calculationAreaTriangle = function(length1, length2, length3){
//   if (isNaN(length1) || isNaN(length2) || isNaN(length3)){
//     return null;
//   }
//   if (length1<=0 || length2<=0 || length3<=0){
//     return null;
//   }
//   if (length1 + length2 < length3 || length3 + length2 < length1 || length1 + length3 < length2){
//     return null;
//   }
//   let p=(length1+length2+length3)/2;
//   return Math.sqrt(p*(p-length1)*(p-length2)*(p-length3));
//
// }

// 4.4 Прямоугольник -----------------

// const calculationAreaRectangle = function(length1, length2){
//   if (isNaN(length1) || isNaN(length2)){
//     return null;
//   }
//   if (length1<=0 || length1<=0){
//     return null;
//   }
//   return length1*length2;
// }

// *** ВОЗВЕДЕНИЕ В СТЕПЕНЬ------------------------------------------

// const calculationDegree = function(number, degree){
//   if (isNaN(number) || isNaN(degree)){
//     return null;
//   }
//   if (degree === 0){
//     return 1;
//   }
//   if (degree > 0){
//     let result = 1;
//     for(let i=0; i < degree; i++){
//       result *= number;
//     }
//     return result;
//   }
//   if (degree < 0){
//     let result = 1;
//     for(let i=0; i > degree; i--){
//       result /= number;
//     }
//     return result;
//   }
// }
