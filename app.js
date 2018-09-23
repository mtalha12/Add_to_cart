/*let cartListItem;
if(localStorage.getItem("cartListItems")){
    cartListItems=localStorage.getItem("cartListItem");
}
else{
    cartListItem=[];
}*/
let cartListItems = localStorage.getItem("cartListItems") || [];
cartListItems = JSON.parse(cartListItems);
//Example
/*let cartListItems = [{
    id:"33",
    name:"Huawei_Honor_7",
    image:"All_Images/Huawei/honor_7x_blue_3.png",
    price:0,
    quantity:0,
},{
    id:"33",
    name:"Huawei_Honor_7",
    image:"All_Images/Huawei/honor_7x_blue_3.png",
    price:0,
    quantity:0,
}]*/
