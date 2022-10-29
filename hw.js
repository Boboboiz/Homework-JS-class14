// Tóm tắt yêu cầu vẽ mô hình 3 khối, lập trình để xử lý các bài toán sau:
// 1. Viết chương trình nhập vào ngày, tháng, năm (Giả sử nhập đúng, không cần kiểm tra hợp lệ).
// Tìm ngày, tháng, năm của ngày tiếp theo. Tương tự tìm ngày tháng năm của ngày trước đó.
// 2. Viết chương trình nhập vào tháng, năm. Cho biết tháng đó có bao nhiêu ngày. (bao gồm tháng
// của năm nhuận).
// 3. Viết chương trình nhập vào số nguyên có 3 chữ số. In ra cách đọc nó.
// 4. Cho biết tên và tọa độ nhà của 3 sinh viên. Cho biết tọa độ của trường đại học. Viết chương
// trình in tên sinh viên xa trường nhất.


// 1

function handleInput (){
   var date = document.getElementById("date").value*1; 
   var month = document.getElementById("month").value*1;
   var year = document.getElementById("year").value*1;

   if ( date <30 && month != 2) {
    date = date + 1;
    month = month ;
    year = year ;
   } else if ( date === 29 && month === 2 ){
    date = 1 ;
    month = 3 ;
    year = year ;
   } else if ( date === 30 && month === 4 , 6 ,9 ,11){
    date = 1;
    month = month +1 ;
    year = year ;
   } else if ( date === 31 && month === 1, 3 ,5, 7 ,8 ,10,12) {
    date = 1;
    month = month +1 ;
    year = year ;
   } else if ( date === 31 && month === 12){
    year = year + 1 ;
    month = 1; 
    date = 1;
   }
   
  var result = "the next day:" +date + "/" + month + "/" + year; 

  console.log( date ,month, year)

  document.getElementById("nextday").innerHTML= result;
   
}


function handleInput1 (){
    var date = document.getElementById("date").value*1; 
    var month = document.getElementById("month").value*1;
    var year = document.getElementById("year").value*1;
 
    if ( date <30 && month != 2) {
     date = date - 1;
     month = month ;
     year = year ;
    } else if (  month === 4 , 6 ,9 ,11 && date === 1){
     date = 31;
     month = month - 1 ;
     year = year ;
    } else if ( date === 1 && month ===  5, 7 ,8 ,10,12 && month !== 3, 1) {
     date = 30;
     month = month - 1 ;
     year = year ;
    } else if (date === 1 && month === 3){
        date = 29 ;
        month = 2 ;
    }else if ( date === 1 && month === 1){
     year = year - 1 ;
     month = 12; 
     date = 31;
    };
    
   var result1 = "the next day:" +date + "/" + month + "/" + year; 
 
   console.log( date ,month, year)
 
   document.getElementById("preday").innerHTML= result1;
    
 }