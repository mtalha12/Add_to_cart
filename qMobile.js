let items = [
    {
        id:"17",
        name:"Noir_J5",
        image:"All_Images/Q-Mobile/q-mobile-noir-J5.jpg",
        price:40000,
        quantity:0,
    },
    {
        id:"18",
        name:"Noir_J5",
        image:"All_Images/Q-Mobile/q-mobile-noir-J5.jpg",
        price:40000,
        quantity:0,
    },
    {
        id:"19",
        name:"Noir_J5",
        image:"All_Images/Q-Mobile/q-mobile-noir-J5.jpg",
        price:40000,
        quantity:0,
    },
    {
        id:"20",
        name:"Noir_J5",
        image:"All_Images/Q-Mobile/q-mobile-noir-J5.jpg",
        price:40000,
        quantity:0,
    },
    {
        id:"21",
        name:"Noir_J5",
        image:"All_Images/Q-Mobile/q-mobile-noir-J5.jpg",
        price:40000,
        quantity:0,
    },
    {
        id:"22",
        name:"Noir_J5",
        image:"All_Images/Q-Mobile/q-mobile-noir-J5.jpg",
        price:40000,
        quantity:0,
    },
    {
        id:"23",
        name:"Noir_J5",
        image:"All_Images/Q-Mobile/q-mobile-noir-J5.jpg",
        price:40000,
        quantity:0,
    },
    {
        id:"24",
        name:"Noir_J5",
        image:"All_Images/Q-Mobile/q-mobile-noir-J5.jpg",
        price:40000,
        quantity:0,
    },
]
function openModal(index){
    console.log('here')
    let i=items[index];
    console.log(i)
    let modal = document.getElementById("M_B_html");
    const material=`
    <div id="main-div">
    <img src= "${i.image}" style='width:480px;height:450px' />
    <div>
    <table style="width:100%">
    <tr>
    <th>Title</th>
    <th>Description</th>
    <th>Price</th>
    </tr>
    <tr>
    <td>${i.name}</td>
    <td>${i.description}</td>
    <td>${i.price}</td>
    </tr>
    </table>
    </div>
    </div>
    `
    modal.innerHTML=material;
}

function modalNone(){
    document.getElementById("M_B_html").innerHTML = ""
}
window.addEventListener("load",(e) => {
    if(!JSON.parse(localStorage.getItem("Login"))){
        location.assign("signIn.html");
    }
})