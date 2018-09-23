let items = [
    {
        id:"9",
        name:"Nokia_6",
        image:"All_Images/Nokia/Nokia_6.1_2018.jpg",
        price:75000,
        quantity:0,
        description:"sadmlsamdldsdld<br />sdldskfjkjflkdfkfngkfngklfn<br/>gklfnglfdkngklfdnglkfnglrgfkjgnjl"
    },
    {
        id:"10",
        name:"Nokia_6",
        image:"All_Images/Nokia/Nokia_3_LTE.jpg",
        price:75000,
        quantity:0,
    },
    {
        id:"11",
        name:"Nokia_6",
        image:"All_Images/Nokia/Nokia_6.jpg",
        price:75000,
        quantity:0,
    },
    {
        id:"12",
        name:"Nokia_6",
        image:"All_Images/Nokia/Nokia_N2.jpg",
        price:75000,
        quantity:0,
    },
    {
        id:"13",
        name:"Nokia_6",
        image:"All_Images/Nokia/Nokia_N5.jpg",
        price:75000,
        quantity:0,
    },
    {
        id:"14",
        name:"Nokia_6",
        image:"All_Images/Nokia/Nokia_N8.jpg",
        price:75000,
        quantity:0,
    },
    {
        id:"15",
        name:"Nokia_6",
        image:"All_Images/Nokia/Nokia_Nokia_1.jpg",
        price:75000,
        quantity:0,
    },
    {
        id:"16",
        name:"Nokia_6",
        image:"All_Images/Nokia/Nokia_Nokia_2.jpg",
        price:75000,
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