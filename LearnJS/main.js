// var x = 'ABCD';
// alert(x); // thong bao

// console.log(x); // in ra o console

// confirm(x); // thong bao co them cancel

// prompt(x); // alert + confirm va co them cho go du lieu

// setTimeout(function() {
//     alert(x)
// },3000) // lenh co delay chay 1 lan duy nhat

// setInterval(function() {
//     console.log(x + Math.random())
// },2000) // lenh co delay, loop

// var a = 1 + 2 // 3
// var b = 1 - 2 // -1
// var c = 1 * 2 // 2
// var d = 1 / 2 // 0.5
// var e = 1 % 2 // 1

//console.log(a) // + la toan tu so hoc

//var a = 80 // = la toan tu gan

// var a = 1
// var b = 2
// if(a < b) {
//     alert('Dung')
// } // toan tu so sanh, == la so sanh bang

// var a = 1
// var b = '2'
// if (a > 0 && b > 0) {
//     alert('Dung')
// } // && la toan tu logic

// var a = 9
// a **= 2 // a = a ** 2
// console.log(a)

// var a = true
// console.log(a)

// var a = '1'
// var b = 2
// var c = a + b
// console.log(c)

// var myObject = {
//     name: 'ABC',
//     age: 20,
//     address: 'NT',
//     myFunction: function () {

//     }
// }
// // console.log('myObject',myObject)
// // console.log(typeof myObject)
// console.log(typeof name)

// var myArray = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ]
// console.log(myArray)
// console.log(typeof myArray)

// function writeLog(message) {
//     console.log(typeof message)
// }
// writeLog('abc')

// function writeLog(message,message2) {
//     console.log(message)
//     console.log(message2)
// }
// writeLog('abc','123')

// const a1 = performance.now();
// smArr.forEach(() => {
//     arr2.forEach(item => console.log(item));
// });
// const a2 = performance.now();
// console.log(`Time: ${a2 - a1}`); // 8 Milliseconds


// const b1 = performance.now();
// bigArr.forEach(() => {
//     arr2.forEach(item => console.log(item));
// });
// const b2 = performance.now();
// console.log(`Time: ${b2 - b1}`); // 307 Milliseconds

// function writeLog() {
//     console.log(arguments)
// }
// writeLog('Log1', 'Log2', 'Log3')

// function writeLog() {
//     var myString = ''
//     for (var param of arguments) {
//         myString += `${param} - `
//     }
// console.log(myString)
// }
// writeLog('Log1', 'Log2', 'Log3')

// function cong(a, b) {
//     return a + b
// }
// var result = cong(2, 8)
// console.log(result)

// var fullName = 'abcd'
// var fullName2 = new String('abcd')
// console.log(fullName2)

// var fullName = 'abcd'
// console.log(fullName.length)

// var a = 'abcd'
// var b = 'efgh'
// console.log(`Bang chu cai: ${a}${b}`)
// console.log('Toi la \'the best\'')

//  Lam viec voi chuoi
// var myString = 'Hoc JS rat JS vui JS!'
//  1. Length (Do dai)
// console.log(myString.length)
//  2. Find index (Tim vi tri cua ki tu)
// console.log(myString.indexOf('JS'))
// console.log(myString.indexOf('JS',6))
// console.log(myString.lastIndexOf('JS'))
// console.log(myString.search('JS'))
// 3. Cut string (Cat chuoi)
// console.log(myString.slice(4,6))
// console.log(myString.slice(4))
// console.log(myString.slice(0))
// console.log(myString.slice(-3,-1))
// 4. Replace (Thay the)
// console.log(myString.replace('JS','JavaScript'))
// console.log(myString.replace(/JS/g,'JavaScript'))
// 5. Convert to upper case (Viet hoa het)
// console.log(myString.toUpperCase())
// 6. Convert to lower case (Viet thuong het)
// console.log(myString.toLowerCase())
// 7. Trim (Loai bo khoang trang)
// console.log(myString.trim())
// 8. Split
// var language = ('Javascript')
// console.log(language.split(''))
// 9. Get a character by index (Lay ki tu theo index)
// const myString2 = 'ABCDEFGH'
// console.log(myString2.charAt(7))
// console.log(myString2[7])

/////////// NUMBER
// Number.isFinite(2 / 0); // false  // Kiem tra so huu han
// Number.isFinite(20 / 5); // true
// Number.isFinite(0 / 0); // false

// Number.isInteger(999999999); // true // Kiem tra so nguyen
// Number.isInteger(0.2);       // false
// Number.isInteger(Math.PI);   // false

// Number.parseFloat('10') // 10 // Chuyen doi chuoi thanh so dau phay dong
// Number.parseFloat('10.00') // 10
// Number.parseFloat('238,21') // 238
// Number.parseFloat('237.22') // 237.22
// Number.parseFloat('34 56 78') // 34
// Number.parseFloat(' 37 ') // 37
// Number.parseFloat('18 is my age') // 18

// Number.parseInt('10') // 10  // Chuyen doi chuoi thanh so nguyen
// Number.parseInt('10.00') // 10
// Number.parseInt('238,21') // 238
// Number.parseInt('237.22') // 237
// Number.parseInt('34 56 78') // 34
// Number.parseInt(' 37 ') // 37
// Number.parseInt('18 is my age') // 18

// var numberObject = 1234.56789;

// numberObject.toFixed(); // '1235' // Chuyen so thanh chuoi va lam tron
// numberObject.toFixed(1); // '1234.6'
// numberObject.toFixed(6); // '1234.567890'

// (11).toString();    // '11'  // Chuyen so thanh chuoi
// (18).toString();    //  '18'
// (17.3).toString();  //  '17.3'

// var a = 20 / 'A'
// console.log(isNaN(a)) // Kiem tra phai NaN hay khong

///////// ARRAY

// var languages = [
//   'JS',
//   'PHP',
//   'Ruby',
//   null,
//   undefined,
//   function () {

//   },
//   {},
//   123,
//   NaN
// ]
// var language2 = [
//   'ABC',
//   456
// ]
// console.log(languages)
// console.log(typeof languages)  // string
// console.log(Array.isArray(languages))  // Kiem tra phai array hay khong
// console.log(languages[3])  // Lay phan tu thu n trong array
// console.log(languages.toString())  // Chuyen array thanh string
// console.log(languages.join(' - '))  // Ngan cach phan tu
// console.log(languages.pop())  // Xoa phan tu cuoi cua array va tra ve phan tu da xoa
// console.log(languages.push('Dart')) // Them phan tu vao cuoi mang
// console.log(languages.shift()) // Xoa phan tu dau cua array va tra ve phan tu da xoa
// console.log(languages.unshift('Dart')) // Them phan tu vao dau mang
// languages.splice(1, 2)  // Xoa mot so phan tu theo vi tri cho truoc
// languages.splice(1, 0, 'Dart')  // Splice cung co the them phan tu vao o vi tri con tro
// console.log(languages.concat(language2)) // Them array sau vao sau array truoc
// console.log(languages.slice(1, 2)) // Cat phan tu tu array
// console.log(languages.slice(-2, -1)) // Co the cat nguoc tu cuoi len dau
// console.log(languages.slice(-1)) // Tra ve phan tu cuoi mang
// console.log(languages.slice(0, 1)) // Tra ve phan tu dau mang

//////// OBJECT
// var emailKey = 'email'
// var myInfo = {
//   name: 'ABC',
//   age: 20,
//   address: 'NT, VN',
//   [emailKey]: 'abcd',
//   'my-email': 'abcd@gmail.com', // Them du lieu vi pham quy tac
//   getName: function () {
//     return this.name
//   }
// }
// myInfo.phone = 'A50s',
//   myInfo['phone-2'] = 'null' // Them du lieu vi pham quy tac
// var myKey = 'address'
// console.log(myInfo.name)
// console.log(myInfo['my-email'])
// console.log(myInfo[myKey])
// console.log(myInfo.getName())

///////// OBJECT CONSTRUCTOR
// function User (firstName, lastName, avatar) {
//   this.firstName = firstName
//   this.lastName = lastName
//   this.avatar = avatar
//   this.getName = function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// var author = new User('Son', 'Dang', 'Avatar')
// var user = new User('Vu', 'Nguyen', 'Avatar')

// author.title = 'Chia se'
// user.comment = 'Question'

// console.log(author.constructor)
// console.log(author.getName())
// console.log(user.getName())

////////// OBJECT PROTOTYPE BASIC
// function User (firstName, lastName, avatar) {
//   this.firstName = firstName
//   this.lastName = lastName
//   this.avatar = avatar
//   this.getName = function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// User.prototype.className = 'CLC1'
// User.prototype.getClassName = function () {
//   return this.className
// }
// var user = new User('Son', 'Dang', 'Avatar 1')
// var user2 = new User('Vu', 'Nguyen', 'Avatar 2')
// console.log(user.className) // CLC1
// console.log(user2.getClassName()) // CLC1

//////////// DOI TUONG DATE (THOI GIAN)
// var date = new Date() // Thong tin chung
// var year = date.getFullYear() // Nam
// var month = date.getMonth() + 1 // Thang
// var day = date.getDate() // Ngay
// console.log(`${day}/${month}/${year}`) // In ra ngay thang nam

////////// MATH OBJECT
// console.log(Math.PI) // In ra so Pi
// console.log(Math.round(12.3)) // Lam tron so thap phan thanh so nguyen
// console.log(Math.abs(-4)) // In ra gia tri tuyet doi
// console.log(Math.ceil(4.000001)) // Lam tron tren
// console.log(Math.floor(4.999999)) // Lam tron duoi
// console.log(Math.random()) // In ra so ngau nhien tu 0 den 1
// console.log(Math.floor(Math.random() * 101)) //In ra so ngau nhien tu 0 den 100

//IF ELSE
// var random = Math.floor(Math.random() * 101)    // Gacha go brr,
// if (random <= 2) {
//   console.log('SSR')
// }
// else if (random > 2 && random <= 10) {
//   console.log('SR')
// }
// else if (random > 10) {
//   console.log('R')
// }

// SWITCH CASE
// var date = 9
// switch (date) {
//   case 2:
//     console.log('Hom nay la thu 2')
//     break
//   case 3:
//     console.log('Hom nay la thu 3')
//     break
//   case 4:
//     console.log('Hom nay la thu 4')
//     break
//   default:
//     console.log('Khong biet')
// }

// TERNARY OPERATOR (TOAN TU 3 NGOI)
// var course = {
//   name: 'JS',
//   coin: 250
// }
// if (course.coin > 0) { // Cach 1 dung if else
//   console.log(`${course.coin} Coins`)
// }
// else {
//   console.log('Mien phi')
// }
// var result = course.coin > 0 ? `${course.coin} Coins` : 'Mien phi'
// console.log(result) // Cach 2 dung toan tu 3 ngoi
// var a = 1 // Vi du khac ve toan tu 3 ngoi
// var b = 2
// var c = a > 0 ? a : b
// console.log(c)

////////// LOOP (VONG LAP)
// for (var i = 1; i <= 1000; i++) {
//   console.log(i)
// }
// for (var i = 100; i > 0; i--) {
//   console.log(i)
// }
// for (var i = 0; i <= 100; i += 5) {
//   console.log(i)
// }
// for (var i = 100; i > 0; i -= 5) {
//   console.log(i)
// }
// function getTotal(arr) { // Ham tra ve tong gia tri cac phan tu trong mang
//   var result = 0
//   for (var i = 0; i < arr.length; i++) {
//   result = result + arr[i]
//   }
//   return result
// }
// var myArray = [
//   'JS',
//   'PHP',
//   'Java',
//   'Dart'
// ]
// console.log(myArray[1])
// for (var i = 0; i < myArray.length; i++) {
//   console.log(myArray[i])
// }
// var orders = [ // Bai toan tinh tong gia cac khoa hoc
//   {
//     name: 'Khóa học HTML - CSS Pro',
//     price: 3000000
//   },
//   {
//     name: 'Khóa học Javascript Pro',
//     price: 2500000
//   },
//   {
//     name: 'Khóa học React Pro',
//     price: 3200000
//   }
// ]
// function getTotal (orders) {
//   var orderslength = orders.length
//   var total = 0
//   for (var i = 0; i < orderslength; i++) {
//     total = total + orders[i]['price']
//   }
//   return total
// }
// console.log(getTotal(orders))

/////////// VONG LAP FOR IN
// var myInfo = {
//   name: 'ABC',
//   age: 20,
//   address: 'NT, VN'
// }
// for (var key in myInfo) {
//   console.log(key)
//   console.log(myInfo[key])
// }

// var language = [
//   'JS',
//   'PHP',
//   'Ruby',
//   'Java'
// ]
// for (var key in language) {
//   console.log(key)
//   console.log(language[key])
// }

// var language = 'Javascript'
// for (var key in language) {
//   console.log(key)
//   console.log(language[key])
// }

////////////// VONG LAP FOR OF
// var language = 'Javascript'
// for (var value of language) {
//   console.log(value)
// }

// var myInfo = {
//   name: 'ABC',
//   age: 20
// }
// for (var value of Object.values(myInfo)) {
//   console.log(value)
// }

///////////// VONG LAP WHILE
// var i = 0
// while (i < 1000) {
//   i++
//   console.log(i)
// }
// var myArray = [
//   'JS',
//   'PHP'
// ]
// var i = 0
// while (i < myArray.length) {
//   console.log(myArray[i])
//   i++
// }

////////////  VONG LAP DO WHILE
// var i = 0
// var isSuccess = false
// do {
//   i++
//   console.log('Nap the lan ' + i)
//   if (true) {
//     isSuccess = true
//   }
// }
// while (!isSuccess && i < 3)

/////// BREAK VA CONTINUE
// for (var i = 0; i < 10; i++) {
//   console.log(i)
//   if (i >= 5) {
//     break
//   }
// }

// for (var i = 0; i < 10; i++) {
//   if (i % 2 !== 0) {
//     continue
//   }
//   console.log(i)
// }

// ///////// VONG LAP LONG NHAU (NESTED LOOP)
// var myArray = [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ]
// for (var i = 0; i < myArray.length; i++) {
//   console.log(myArray[i])
// }
// for (var i = 0; i < myArray.length; i++) {
//   for (var j = 0; j < myArray[i].length; j++) {
//     console.log(myArray[i][j])
//   }
// }

////////// DE QUY
// var array = ['a', 'b', 'c', 'a', 'b', 'c']
// console.log([...(new Set(array))]) // Unique

// function countDown (num) {
//   if (num > 0) {
//     console.log(num)
//     return countDown(num - 1)
//   }
//   return num
// }
// countDown(3)

// function loop (start, end, cb) {
//   if (start < end) {
//     cb(start)
//     return loop(start + 1, end, cb)
//   }
// }
// var array = ['JS', 'PHP', 'Ruby']
// loop(0, array.length, function (index) {
//   console.log(array[index])
// })

// function giaiThua (num) { // Tinh giai thua
//   var output = 1
//   for (var i = num; i > 0; i--) {
//     output *= i
//   }
//   return output
// }
// console.log(giaiThua(6))

// function giaiThua (number) { // Tinh giai thua bang de quy
//   if (number > 0) {
//     return number * giaiThua(number - 1)
//   }
//   return 1
// }
// console.log(giaiThua(6))

//////////// ARRAY PT.2
// var courses = [
//   {
//     id: 1,
//     name: 'JS',
//     coin: 250
//   },
//   {
//     id: 2,
//     name: 'HTML, CSS',
//     coin: 0
//   },
//   {
//     id: 3,
//     name: 'Ruby',
//     coin: 0
//   },
//   {
//     id: 4,
//     name: 'PHP',
//     coin: 400
//   },
//   {
//     id: 5,
//     name: 'ReactJS',
//     coin: 500
//   }
// ]
// courses.forEach(function (course, index) { // In ra cac phan tu trong mang
//   console.log(index, course)
// })
// var isFree = courses.every(function (course, index) { // Kiem tra xem co phai tat ca cac khoa hoc la free hay khong
//   return course.coin === 0
// })
// console.log(isFree)
// var isFree = courses.some(function (course, index) { // Kiem tra xem 1 trong so cac khoa hoc co free hay khong (chi can 1)
//   return course.coin === 0
// })
// console.log(isFree)
// var course = courses.find(function (course, index) { // Tim kiem phan tu
//   return course.name === 'Ruby'
// })
// console.log(course)
// var course = courses.filter(function (course, index) { // Tim tat ca phan tu thoa dieu kien
//   return course.name === 'Ruby'
// })
// console.log(course)

//////// ARRAY MAP METHOD
// var courses = [
//   {
//     id: 1,
//     name: 'JS',
//     coin: 250
//   },
//   {
//     id: 2,
//     name: 'HTML, CSS',
//     coin: 0
//   },
//   {
//     id: 3,
//     name: 'Ruby',
//     coin: 0
//   },
//   {
//     id: 4,
//     name: 'PHP',
//     coin: 400
//   },
//   {
//     id: 5,
//     name: 'ReactJS',
//     coin: 500
//   }
// ]
// function courseHandler (course, index) {
//   return {
//     id: course.id,
//     name: `Khoa hoc: ${course.name}`,
//     coin: course.coin,
//     coinText: `Gia: ${course.coin}`,
//     index: index,
//     originArray: courses,
//   }
// }
// var newCourses = courses.map(courseHandler)
// console.log(newCourses)

/////////// ARRAY REDUCE METHOD
// var courses = [
//   {
//     id: 1,
//     name: 'JS',
//     coin: 250
//   },
//   {
//     id: 2,
//     name: 'HTML, CSS',
//     coin: 0
//   },
//   {
//     id: 3,
//     name: 'Ruby',
//     coin: 0
//   },
//   {
//     id: 4,
//     name: 'PHP',
//     coin: 400
//   },
//   {
//     id: 5,
//     name: 'ReactJS',
//     coin: 500
//   }
// ]
// var totalCoin = 0 // Tinh tong tien cac khoa hoc bang vong lap
// for (var course of courses) {
//   totalCoin += course.coin
// }
// console.log(totalCoin)

// var i = 0
// function coinHandler (accumulator, currentValue, currentIndex, originArray) {
//   i++
//   var total = accumulator + currentValue.coin
//   console.table({
//     'Luot chay: ': i,
//     'Bien tich tru: ': accumulator,
//     'Gia khoa hoc: ': currentValue.coin,
//     'Tich tru duoc': total
//   })
//   return total
// }
// var totalCoin = courses.reduce(coinHandler, 0) // Initial value
// console.log(totalCoin) // Tinh tong tien cac khoa hoc bang reduce()

// var totalCoin = courses.reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue.coin
// }, 0)
// console.log(totalCoin) // Ngan gon hon

// var totalCoin = courses.reduce((a, b) =>
//   a + b.coin, 0
// )
// console.log(totalCoin) // Su dung ES6

// var numbers = [250, 0, 0, 400, 500]
// var totalCoin = numbers.reduce(function (total, number) {
//   return total + number
// })
// console.log(totalCoin)

///////// FLAT (LAM PHANG MANG) DEPTH ARRAY (MANG SAU)
// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]]
// var flatArray = depthArray.reduce(function (flatOutput, depthItem) {
//   return flatOutput.concat(depthItem)
// }, [])
// console.log(flatArray) // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// var topics = [ // Lay ra cac khoa hoc va dua vao 1 mang moi
//   {
//     topic: 'Frontend',
//     courses: [
//       {
//         id: 1,
//         title: 'HTML, CSS'
//       },
//       {
//         id: 2,
//         title: 'Javascript'
//       }
//     ]
//   },
//   {
//     topic: 'Backend',
//     courses: [
//       {
//         id: 1,
//         title: 'PHP'
//       },
//       {
//         id: 2,
//         title: 'NodeJS'
//       }
//     ]
//   }
// ]
// var newCourses = topics.reduce(function (courses, topic) {
//   return courses.concat(topic.courses)
// }, [])
// console.log(newCourses)

// var htmls = newCourses.map(function (course) {
//   return `
//     <div>
//       <h2>${course.title}</h2>
//       <p>ID: ${course.id}<p>
//       </div>`
// })
// console.log(htmls.join('')) // HTML hien ra tren trang web

// Array.prototype.reduce2 = function (callback, result) {
//   var i = 0
//   if (arguments.length < 2) {
//     i = 1
//     result = this[0]
//   }
//   for (var i = 0; i < this.length; i++) {
//     result = callback(result, this[i], i, this)
//   }
//   return result
// }
// var numbers = [1, 2, 3, 4, 5]
// var result = numbers.reduce2(function (total, number, index, array) {
//   console.log(total, number, index, array)
//   return total + number
// }, 0)
// console.log(result)

///////////// INCLUDES METHOD
// var title = 'Responsive web design'
// console.log(title.includes('web')) // Kiem tra xem chuoi da cho co trong chuoi chinh hay khong
// console.log(title.includes('Responsive', 1)) // So 1 chi vi tri bat dau tim kiem
// var courses = ['JS', 'PHP', 'Dart']
// console.log(courses.includes('JS', -1)) //3 + (-1) = 2

/////////// CALLBACK
// function myFunction (param) {
//   if (typeof param === 'function') {
//     param('Hoc lap trinh')
//   }
// }
// function myCallback (value) {
//   console.log('Value: ', value)
// }
// myCallback(123)
// myFunction(myCallback)

/////////// MY MAP() METHOD
// Array.prototype.map2 = function (callback) { // callback map2
//   var output = []
//   var arrayLength = this.length
//   for (var i = 0; i < arrayLength; ++i) {
//     var result = callback(this[i], i)
//     output.push(result)
//     console.log('result: ', result)
//   }
//   return output
// }
// var courses = [
//   'JS',
//   'PHP',
//   'Ruby'
// ]
// courses.map2(function (course, index) {
//   console.log(index, course)
// })
// var htmls = courses.map2(function (course) {
//   return `<h2>${course}</h2>`
// })
// console.log(htmls.join(''))

/////////////// CALLBACK PART 2
// var courses = [
//   'JS',
//   'PHP'
// ]
// courses.length = 10
// for (var i = 0; i < courses.length; ++i) {
//   console.log(courses[i]) // Mang trong
// }
// for (var index in courses) {
//   console.log(courses[index])
// } // Dung for in trong truong hop nay

// var courses = new Array(10) // Cach them phan tu vao mang trong
// courses.push('JS', 'PHP')
// console.log(courses)
// for (var index in courses) {
//   console.log(courses[index])
// }

////////////// MY FOREACH() METHOD
// Array.prototype.forEach2 = function (callback) {
//   for (var index in this) {
//     if (this.hasOwnProperty(index)) {
//       callback(this[index], index, this)
//     }
//     console.log(index, this.hasOwnProperty(index))
//   }
// }
// var courses = [
//   'JS',
//   'PHP',
//   'Ruby'
// ]
// courses.length = 1000
// courses.forEach2(function (course, index, array) {
//   console.log(course, index, array)
// })

/////////// MY FILTER() METHOD (LOC)
// Array.prototype.fllter2 = function (callback) {
//   var output = []
//   for (var index in this) {
//     if (this.hasOwnProperty(index)) {
//       var result = callback(this[index], index, this)
//       if (result) {
//         output.push(this[index])
//       }
//     }
//   }
//   return output
// }
// var courses = [
//   {
//     name: 'JS',
//     coin: 680
//   },
//   {
//     name: 'PHP',
//     coin: 860
//   },
//   {
//     name: 'Ruby',
//     coin: 980
//   }
// ]
// var filterCourses = courses.filter(function (course, index, array) {
//   return course.coin > 700 // Loc cac mon hoc co gia cao hon 700
// })
// console.log(filterCourses) // Note: Khong ap dung cho array trong

//////////// MY SOME() METHOD (KIEM TRA PHAN TU THOA MAN DIEU KIEN)
// Array.prototype.some2 = function (callback) {
//   for (var index in this) {
//     if (this.hasOwnProperty(index)) {
//       if (callback(this[index], index, this)) {
//         return true
//       }
//     }
//   }
//   return false
// }
// var courses = [
//   {
//     name: 'JS',
//     coin: 680,
//     isFinish: true
//   },
//   {
//     name: 'PHP',
//     coin: 860,
//     isFinish: false
//   },
//   {
//     name: 'Ruby',
//     coin: 980,
//     isFinish: false
//   }
// ]
// var result = courses.some2(function (course, index, array) {
//   return course.isFinish
// })
// console.log(result) // true, chi can 1 phan tu dung se dung
// // also ko chay voi array rong

/////////// MY EVERY() METHOD (KIEM TRA TAT CA CAC PHAN TU THOA MAN DIEU KIEN)
// Array.prototype.every2 = function (callback) {
//   var output = true
//   for (var index in this) {
//     if (this.hasOwnProperty(index)) {
//       var result = callback(this[index], index, this)
//       if (!result) {
//         output = false
//         break
//       }
//     }
//   }
//   return output
// }
// var courses = [
//   {
//     name: 'JS',
//     coin: 680,
//     isFinish: true
//   },
//   {
//     name: 'PHP',
//     coin: 860,
//     isFinish: false
//   },
//   {
//     name: 'Ruby',
//     coin: 980,
//     isFinish: false
//   }
// ]
// var result = courses.every2(function (course, index, array) {
//   return course.isFinish // false, tat ca phan tu phai true thi moi tra ve true
// })
// console.log(result)
// x = Math.random().toPrecision(1)
// console.log(x)
// function getRandomOperator () {
//   let operators = ["+", "-", "*"];
//   let ran = Math.floor(Math.random() * operators.length);
//   return operators[ran];
// }
// var y = getRandomOperator()
// console.log(y)
// var a = 10
// var b = 12
// var c = 0
// if (y == '+') {
//   c = a + b
// } else if (y == '-') {
//   c = a - b
// } else if (y == '*') {
//   c = a * b
// }
// console.log(c)
// var d = 0.1 + 0.05
// console.log(d)
// for (var i = 1; i < 101; i++) {
//   e = Math.floor(Math.random() * 101)
//   console.log(e)

// let a = [1, 83093, 332, 98, 4649, 57340, 6, 736, 90131]
// console.log(a.sort())

// let canvas = document.getElementById("canvas");
// let context = canvas.getContext("2d")

// console.log(window.innerHeight);
// console.log(window.innerWidth);

// console.log(Date.prototype.getFullYear())

// let a = function(x, y) {
//   return(x + y);
// }

// let b = (x, y) => {
//   return(x + y);
// }

let x = 101;
let s;

s = (x % 2 == 0) ? x + 2 : x - 2;

console.log(s);

