let items = [
    {
        id:"1",
        name:"iphone_8",
        image:"All_Images/I_Phone/iPhone_8.jpg",
        price:80000,
        quantity:0,
    },
    {
        id:"2",
        name:"iphone_8",
        image:"All_Images/I_Phone/iPhone_8.jpg",
        price:80000,
        quantity:0,
    },
    {
        id:"3",  
        name:"iphone_8",
        image:"All_Images/I_Phone/iPhone_8.jpg",
        price:80000,
        quantity:0,
    },
    {
        id:"4",
        name:"iphone_8",
        image:"All_Images/I_Phone/iPhone_8.jpg",
        price:80000,
        quantity:0,
    },
    {
        id:"5",
        name:"iphone_8",
        image:"All_Images/I_Phone/iPhone_8.jpg",
        price:80000,
        quantity:0,
    },
    {
        id:"6",
        name:"iphone_8",
        image:"All_Images/I_Phone/iPhone_8.jpg",
        price8000:0,
        quantity:0,
    },
    {
        id:"7",
        name:"iphone_8",
        image:"All_Images/I_Phone/iPhone_8.jpg",
        price:80000,
        quantity:0,
    },
    {
        id:"8",
        name:"iphone_8",
        image:"All_Images/I_Phone/iPhone_8.jpg",
        price:80000,
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
};

function modalNone(){
    document.getElementById("M_B_html").innerHTML = ""
}
window.addEventListener("load",(e) => {
    if(!JSON.parse(localStorage.getItem("Login"))){
        location.assign("signIn.html");
    }
})
