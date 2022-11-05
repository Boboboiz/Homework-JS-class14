// Tóm tắt yêu cầu vẽ mô hình 3 khối, lập trình để xử lý các bài toán sau:
// 1. Viết chương trình nhập vào ngày, tháng, năm (Giả sử nhập đúng, không cần kiểm tra hợp lệ).
// Tìm ngày, tháng, năm của ngày tiếp theo. Tương tự tìm ngày tháng năm của ngày trước đó.
// 2. Viết chương trình nhập vào tháng, năm. Cho biết tháng đó có bao nhiêu ngày. (bao gồm tháng
// của năm nhuận).
// 3. Viết chương trình nhập vào số nguyên có 3 chữ số. In ra cách đọc nó.
// 4. Cho biết tên và tọa độ nhà của 3 sinh viên. Cho biết tọa độ của trường đại học. Viết chương
// trình in tên sinh viên xa trường nhất.

// 1

function handleInput() {
  // e.preventDefault()
  var date = document.getElementById("date").value * 1;
  var month = document.getElementById("month").value * 1;
  var year = document.getElementById("year").value * 1;

  if (date < 30 && month != 2) {
    date = date + 1;
    month = month;
    year = year;
  } else if (date === 29 && month === 2) {
    date = 1;
    month = 3;
    year = year;
  } else if ((date === 30 && month === 4, 6, 9, 11)) {
    date = 1;
    month = month + 1;
    year = year;
  } else if ((date === 31 && month === 1, 3, 5, 7, 8, 10, 12)) {
    date = 1;
    month = month + 1;
    year = year;
  } else if (date === 31 && month === 12) {
    year = year + 1;
    month = 1;
    date = 1;
  }

  var result = "the next day:" + date + "/" + month + "/" + year;

  console.log(date, month, year);

  document.getElementById("nextday").innerHTML = result;
}

function handleInput1() {
  // e.preventDefault()

  var date = document.getElementById("date").value * 1;
  var month = document.getElementById("month").value * 1;
  var year = document.getElementById("year").value * 1;

  if (date < 30 && month != 2 && date > 1) {
    date = date - 1;
    month = month;
    year = year;
  } else if ((month === 4, 6, 9, 11 && date === 1)) {
    date = 31;
    month = month - 1;
    year = year;
  } else if ((date === 1 && month === 5, 7, 8, 10, 12 && month !== 3, 1)) {
    date = 30;
    month = month - 1;
    year = year;
  } else if (date === 1 && month === 3) {
    date = 29;
    month = 2;
  } else if (date === 1 && month === 1) {
    year = year - 1;
    month = 12;
    date = 31;
  }

  var result1 = "the previous day:" + date + "/" + month + "/" + year;

  console.log(date, month, year);

  document.getElementById("preday").innerHTML = result1;
}
//Viết chương trình nhập vào tháng, năm. Cho biết tháng đó có bao nhiêu ngày. (bao gồm tháng
// của năm nhuận).

function handleInfo() {
  var date1 = document.getElementById("date1").value;
  var month1 = document.getElementById("month1").value;
  var year1 = document.getElementById("year1").value;

  if ((month1 === 1, 3, 5, 7, 8, 10, 12)) {
    date1 = 31;
  } else if ((month1 === 4, 6, 9, 11)) {
    date1 = 30;
  } else if (month1 === 2 && year1 % 4 === 0) {
    date1 = 29;
  } else if (month1 === 2) {
    date1 = 28;
  }

  console.log(date1, month1, year1);

  var result2 = "Number of date" + date1;
  document.getElementById("numberOfDate").innerHTML = result2;
}

//Viết chương trình nhập vào số nguyên có 3 chữ số. In ra cách đọc nó.

function handleRead() {
  var number = document.getElementById("number").value;
  var unit = number % 10;
  var ten = Math.floor(number / 100);
  var hundred = Math.floor((number % 100) / 10);

  var read = hundred + " trăm " + ten + "   mươi " + unit;

  console.log(read);
  document.getElementById("readNumber").innerHTML = read;
}

// Cho biết tên và tọa độ nhà của 3 sinh viên. Cho biết tọa độ của trường đại học. Viết chương
// trình in tên sinh viên xa trường nhất.\

var a = 10; // tọa độ hs1 so với trường
var b = 20; // tọa độ hs2 so với trường
var c = 30; // tọa độ hs3 so với trường

if ((a > b, c)) {
  console.log("sv1");
} else if ((b > a, c)) {
  console.log("sv2");
} else if ((c > a, b)) {
  console.log("sv3");
}

// 1. Cho người dùng nhập vào 3 số nguyên. Viết chương trình xuất 3 số theo thứ tự tăng dần
// 2. Viết chương trình “Chào hỏi” các thành viên trong gia đình với các đặc điểm. Đầu tiên máy sẽ
// hỏi ai sử dụng máy. Sau đó dựa vào câu trả lời và đưa ra lời chào phù hợp. Giả sử trong gia
// đình có 4 thành viên: Bố (B), Mẹ (M), anh Trai (A) và Em gái (E)
// 3. Cho 3 số nguyên. Viết chương trình xuất ra có bao nhiêu số lẻ và bao nhiêu số chẵn.
// 4. Viết chương trình cho nhập 3 cạnh của tam giác. Hãy cho biết đó là tam giác gì?
// • Ví dụ: a=2, b=2, c=1 => Tam giác cân
// • a = 3, b=3 c=3 => Tam giác đều
// • a = 3, b = 4, c=5 => Tam giác vuông (đinh lý Pytago)

// 1
function handleRangeNum() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var num3 = document.getElementById("num3").value;
  var read = "";
  if (num1 < num2 && num2 < num3) {
    read = num1 + " " + num2 + " " + num3;
  } else if (num1 < num2 && num3 < num2) {
    (read = num1 + " " + num3), num2;
  } else if (num2 < num1 && num1 < num3) {
    (read = num2 + " " + num1), num3;
  } else if (num2 < num1 && num3 < num1) {
    (read = num2 + " " + num3), num1;
  } else if (num3 < num1 && num1 < num2) {
    (read = num3 + " " + num1), num2;
  } else if (num3 < num1 && num2 < num1) {
    read = num3 + " " + num2 + " " + num1;
  }

  var result = read;

  document.getElementById("rangeNum").innerHTML = result;
}

//2
function handleLogin() {
  var name = document.getElementById("login").value;
  var log = "";
  if (name === "B") {
    log = "Hello dad";
  } else if (name === "M") {
    log = "Hello mom";
  } else if (name === "A") {
    log = "Hello brother";
  } else if (name === "E") {
    log = "Hello sister";
  } else {
    alert("Invalid login");
  }
  console.log(log);
  document.getElementById("helloUser").innerHTML = log;
}

//3
function handleCount1() {
  var num1 = document.getElementById("number1").value;
  var num2 = document.getElementById("number2").value;
  var num3 = document.getElementById("number3").value;
  var countEvenNumber = 0;
  var countOddNumber = 0;

  if (num1 % 2 === 0) {
    countEvenNumber++;
  } else {
    countOddNumber++;
  }
  if (num2 % 2 === 0) {
    countEvenNumber++;
  } else {
    countOddNumber++;
  }
  if (num3 % 2 === 0) {
    countEvenNumber++;
  } else {
    countOddNumber++;
  }

  var count =
    "số lẻ là: " +
    countOddNumber +
    "số " +
    " ,số chẵn là: " +
    countEvenNumber +
    "số";
  document.getElementById("count").innerHTML = count;
}

// 4

function handleInfo() {
  var ed1 = +document.getElementById("edge1").value;
  var ed2 = +document.getElementById("edge2").value;
  var ed3 = +document.getElementById("edge3").value;
  var a = Math.pow(ed1, 2);
  var b = Math.pow(ed2, 2);
  var c = Math.pow(ed3, 2);
  var infoTriangle = "";

  if (ed1 == ed2 && ed2 == ed3) {
    infoTriangle = " Tam giác đều";
  } else if (ed1 == ed2 || ed1 == ed3 || ed2 == ed3) {
    infoTriangle = " Tam giác cân";
  } else if (a == b + c || b == a + c || c == a + b) {
    infoTriangle = "Tam giác vuông";
  } else {
    infoTriangle = "Tam giác thường";
  }
  document.getElementById("infoTriangle").innerHTML = infoTriangle;
}
