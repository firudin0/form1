const username1 = document.getElementById('username')
const email1 = document.getElementById('email')
const password1 = document.getElementById('password')
const address1 = document.getElementById('address')
const country1 = document.getElementById('country')
const formID = document.getElementById("formID")


function postAxios(event) {
    event.preventDefault()
    axios.post("https://655c844f25b76d9884fd70a7.mockapi.io/students", {
        username: username1.value,
        email: email1.value,
        password: password1.value,
        address: studentId1.value, 
        country: country1.value,
    })

    
.then(response => {
    console.log(response.data);
   });
   }
   formID.addEventListener('submit', postAxios)
   