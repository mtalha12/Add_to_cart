let items = [
    {
        id:"25",
        name:"Samsung_Glaxy_S8",
        image:"All_Images/Sumsang/Samsung_Galaxy_S8.jpg",
        price:80300,
        quantity:0,
    },
    {
        id:"26",
        name:"Samsung_Grand_Prime_Pro",
        image:"All_Images/Sumsang/Samsung_Grand_Prime_Pro.jpg",
        price:80300,
        quantity:0,
    },
    {
        id:"27",
        name:"Samsung_Galaxy_Grand_Prime_Plus",
        image:"All_Images/Sumsang/Samsung_Galaxy_Grand_Prime_Plus.jpg",
        price:80300,
        quantity:0,
    },
    {
        id:"28",
        name:"Samsung_Galaxy_J",
        image:"All_Images/Sumsang/Samsung_Galaxy_J.jpg",
        price:80300,
        quantity:0,
    },
    {
        id:"29",
        name:"Samsung_Galaxy_S9",
        image:"All_Images/Sumsang/Samsung_Galaxy_S9.jpg",
        price:80300,
        quantity:0,
    },
    {
        id:"30",
        name:"Samsung_Galaxy_A5",
        image:"All_Images/Sumsang/Samsung_Galaxy_A5.jpg",
        price:80300,
        quantity:0,
    },
    {
        id:"31",
        name:"Samsung_S8_Plus",
        image:"All_Images/Sumsang/Samsung_S8_Plus.jpg",
        price:80300,
        quantity:0,
    },
    {
        id:"32",
        name:"Samsung_Glaxy_S8",
        image:"All_Images/Sumsang/Samsung_Galaxy_S8.jpg",
        price:80300,
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

