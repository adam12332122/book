var Name = document.getElementById('Name');
var gender = document.getElementById('Gender');
var number = document.getElementById('Number');

if (localStorage.getItem('js') == null)
{
    siteList = [];
}

else
{
    siteList = JSON.parse(localStorage.getItem('js'))
    displaysites()

}

var siteList = [];

function go() 
{

    var sitese =
    {
        name: Name.value,
        gender: gender.value,
        number: number.value,
    };

    siteList.push(sitese)
    localStorage.setItem('js', JSON.stringify(siteList))
    displaysites()

}


function displaysites() 
{
    var cartona = '';

    for (var i = 1; i < siteList.length; i++) {
        cartona +=
            `
        <div class='col-md-12 my-3 one p-4 ps'>

        


        <div class='index col-md-12'>
        <span class="name-one">index : &nbsp; &nbsp;</span>
        <div class=" name-one">${i} &nbsp; &nbsp; | &nbsp; &nbsp; </div>
        <span class="name-one">Name : &nbsp; &nbsp;</span>
        <div class=" name-one">${siteList[i].name} &nbsp; &nbsp; | &nbsp; &nbsp; </div>

        <span class="name-one m-auto">gender : &nbsp; &nbsp; </span>
        <div class="name-one m-auto">${siteList[i].gender} &nbsp; &nbsp; | &nbsp; &nbsp;</div>

         <span class="name-one">gender : &nbsp;  </span>
        <div class="name-one">${siteList[i].number} &nbsp; &nbsp;  &nbsp; &nbsp;</div>

        <button onclick='deletesite (${i})' class='btn btn-danger btn-one-input'>delete</button>

        </div>  

        </div>
        </div>
        `
    }
    document.getElementById('gros').innerHTML = cartona;

}

function deletesite(index) {
    siteList.splice(index, 1);
    localStorage.setItem('js', JSON.stringify(siteList))
    displaysites()

}