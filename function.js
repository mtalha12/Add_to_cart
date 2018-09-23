countTotalItems();
function incrementItem(index){
    let i = items[index];
    let elementPosition = giveElementPosition(i);
   /* let elementPosition = cartListItems.map(function(item){
        return item.id
        console.log(elementPosition)        
    }).indexOf(i.id);*/
    if(elementPosition > -1){
        cartListItems[elementPosition].quantity++;
    }
    else{
        (i.quantity++ , cartListItems.push(i))
    }
    alert("Add to cart");
    localStorage.setItem('cartListItems',JSON.stringify(cartListItems));
    countTotalItems();
}
function giveElementPosition(item){
    for(let i=0;i<cartListItems.length;i++){
        if(cartListItems[i].id === item.id){
            return i;
        }
    }
    return -1;
}
function decrementItem(index){
    let i = items[index];
    let elementPosition = cartListItems.map(function(item){
        return item.id
    }).indexOf(i.id);
    if(elementPosition > -1 && cartListItems[elementPosition].quantity > 0){
        cartListItems[elementPosition].quantity--;
    }
    else if(elementPosition > -1 && cartListItems[elementPosition].quantity == 0){
        cartListItems.splice(elementPosition, 1)
    }
    if(cartListItems.length > 0){
        localStorage.setItem('cartListItems',JSON.stringify(cartListItems));
        alert("Remove to cart");
    }
    else{
        localStorage.clear();
    }
    countTotalItems();
}

function countTotalItems(){
    let totalItems = 0;
    for(var i=0;i<cartListItems.length;i++){
        totalItems=totalItems+cartListItems[i].quantity;
    }
    document.getElementById("cartList").innerHTML = totalItems;
}
function logOut(){
    localStorage.removeItem("Login");
    window.location.assign("signIn.html");
}
