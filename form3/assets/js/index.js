const title1 = document.getElementById('title')
const price1 = document.getElementById('price')
const description1 = document.getElementById('description')
const stock1 = document.getElementById('stock')
const quality1 = document.getElementById('quality')
const country1 = document.getElementById('country')
const customersCount1 = document.getElementById('customersCount')
const category1 = document.getElementById('category')
const city1 = document.getElementById('city')
const formID = document.getElementById("formID")


function postAxios(event) {
    event.preventDefault()
    axios.post("https://655c844f25b76d9884fd70a7.mockapi.io/students", {
        title: title1.value,
        price: price1.value,
        description: description1.value,
        stock: stock1.value,
        quality: quality1.value,
        country: country1.value,
        customersCount: customersCount1.value,
        category: category1.value,
        city: city1 .value,
    })


.then(response => {
    console.log(response.data);
   });
   }
   formID.addEventListener('submit', postAxios)
   