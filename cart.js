let total=0;
Render();
function Render(){
    total=0;
    document.getElementById("cartList_Portion").innerHTML=null;
    let table = '<table style="width:80%;margin:0 auto"><tr><td>Item</td><td>Name</td><td>Quantity</td><td>Price</td><td>Delete</td></tr>';
    for(var i=0;i<cartListItems.length;i++){
        table+=makingRow(i);
    }
    table+='</table>';
    document.getElementById("total").innerHTML="<h5>Total Amount = "+total+"/-</h5>"
    document.getElementById("cartList_Portion").innerHTML=table;
}
function makingRow(i){
    const item=cartListItems[i];
    total=total + item.price*item.quantity;
    return(
        "<tr><td><img src="+item.image+ " height='100' width='100' /></td><td>"+item.name+"</td><td><button onclick='Increament("+i+")'>+</button>"+item.quantity+"<button onclick='Decrement("+i+")'>-</button></td><td>"+(item.price*item.quantity)+"</td><td><button onclick='DeleteAll("+i+")'>Delete</button></td></tr>"
    )   
}
function DeleteAll(i){
    cartListItems.splice(i,1);
    localStorage.setItem("cartListItems",JSON.stringify(cartListItems));
    Render();
}
function Increament(i){
    const item = cartListItems[i];
    const elementPosition=getPosition(item);
    console.log(elementPosition);
    if(elementPosition > -1){
        cartListItems[elementPosition].quantity++;
        localStorage.setItem("cartListItems",JSON.stringify(cartListItems));
    }
    Render();

}
function Decrement(index){
    const item = cartListItems[index];
    const elementPosition=getPosition(item);
    if(elementPosition > -1 && cartListItems[elementPosition].quantity>1){
        cartListItems[elementPosition].quantity--;
        localStorage.setItem("cartListItems",JSON.stringify(cartListItems));
    }
    else if(elementPosition > -1 && cartListItems[elementPosition].quantity===1){
        cartListItems.splice(index,1)
        localStorage.setItem("cartListItems",JSON.stringify(cartListItems));
    }
    Render();
}
function getPosition(item){
    for(let i=0;i<cartListItems.length;i++){
        if(cartListItems[i].id === item.id){
            return i;
        }
    }
    return -1;
}
function order(){
    localStorage.removeItem("cartListItems");
    location.assign("index.html");
}
window.addEventListener("load",(e) => {
    if(!JSON.parse(localStorage.getItem("Login"))){
        location.assign("signIn.html");
    }
})