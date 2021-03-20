let x=prompt("nhập số kiểm tra");
let mang=["chúc","mừng","bạn","đã","trúng","thưởng","xin","chúc","mừng","xin","chúc","mừng"]
function check1(){
    let check=false;
    let c =1;
    for (i=0;i<mang.length;i++){

        if (mang[i]==x){
           c++ ;
           check=true

        }return c
    }if (!check){
        return -1;
    }
}alert(check1())