// Khai bao bien
var fullName = 'Phan Nguyen Chu Kiet'
//Goi ham thong bao
alert(fullName)
console.log('thuan tien cho viec debug')

confirm('Xac nhap ban du tuoi!')

prompt('Xac nhan ban du tuoi') //Giong confirm nhung co them o input


// chạy một lệnh sau khoảng tg
setTimeout(function (){
    alert('thong bao')
}, 4000)


//Chạy liên tục lệnh sau khoảng tg
setInterval(function (){
    alert('thong bao')
}, 4000)


var firstName = 'Phan'
var lastName = 'Kiet'
// sử dụng dấu `` để đưa giá trị biết vào chuỗi
console.log(`Toi la : ${firstName} ${lastName}`)

//làm tròn số
var i = 3.4564
console.log(i.toFixed(2)) //làm tròn 2 số thập phân

//
var mang = [
    kiet1,
    kiet2,
    kiet3,
];
var mang2= [
    kiet1,
    kiet2,
    kiet3,
];
console.log(mang.join(' - '))                   //chèn kí tự vào giữa cấc phần tử
console.log(mang.pop())                         //xóa phần tử cuối và trả về phần tử đó
console.log(mang.push('kiet4', 'kiet5'))        //thêm các phần tử vào cuối
console.log(mang.shift())                       //xóa đi phần tử ở đầu mảng và trả về phần tử đó
console.log(mang.unshift('kiet0'))        //thêm phần tử vào đầu mảng
console.log(mang.splice(1,1))   //bắt đầu từ vị trí 1 rồi xóa 1 phần tử trong mảng
console.log(mang.concat(mang2))                 //hợp 2 mảng lại với nhau và truyền giá trị cho mảng trước
console.log(mang.slice(1,2))                    //cắt mảng bắt đầu từ vị trí [1] đến vị trí [2]


// 1.getElementById
// 2.getElementsByClassName
// 3.getElementsByTagName
// 4.querySelector
// 5.querySelectorAll
// 6.HTML collection

