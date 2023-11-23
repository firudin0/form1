const isim = document.getElementById('name')
const surname1 = document.getElementById('surname')
const age1 = document.getElementById('age')
const studentId1 = document.getElementById('sid')
const email1 = document.getElementById('Email')
const formID = document.getElementById("formID")


function postAxios(event) {
    event.preventDefault()
    axios.post("https://655c844f25b76d9884fd70a7.mockapi.io/students", {
        name: isim.value,
        surname: surname1.value,
        age: age1.value,
        studentId: studentId1.value, 
        Email: email1.value,
    })

.then(response => {
 console.log(response.data);
});
}
formID.addEventListener('submit', postAxios)

