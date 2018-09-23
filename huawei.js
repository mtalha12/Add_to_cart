let items = [
    {
        id:"33",
        name:"Huawei_Honor_7",
        image:"All_Images/Huawei/Huawei_Honor_7X.jpg",
        price:70000,
        quantity:0,
    },
    {
        id:"34",
        name:"Huawei_7x",
        image:"All_Images/Huawei/Huawei_7x.jpg",
        price:70000,
        quantity:0,
    },
    {
        id:"35",
        name:"Huawei_Honor_7C",
        image:"All_Images/Huawei/Huawei_Honor_7C.jpg",
        price:70000,
        quantity:0,
    },
    {
        id:"36",
        name:"Huawei_Nova_Plus",
        image:"All_Images/Huawei/Huawei_Nova_Plus.jpg",
        price:70000,
        quantity:0,
    },
    {
        id:"37",
        name:"Huawei_Y5",
        image:"All_Images/Huawei/Huawei_Y5_2017_Grey..jpg",
        price:70000,
        quantity:0,
    },
    {
        id:"38",
        name:"Huawei_Huawei_Y6",
        image:"All_Images/Huawei/Huawei_Y6.jpg",
        price:70000,
        quantity:0,
    },
    {
        id:"39",
        name:"Huawei_Huawei_Mate_9",
        image:"All_Images/Huawei/Huawei_Mate_9.jpg",
        price:70000,
        quantity:0,
    },
    {
        id:"40",
        name:"Huawei_y7_Prime",
        image:"All_Images/Huawei/y7_prime2018.jpg",
        price:70000,
        quantity:0,
    },
];
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

