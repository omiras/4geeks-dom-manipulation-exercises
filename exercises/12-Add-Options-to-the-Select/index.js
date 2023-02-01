
let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
let mySelect = document.querySelector('#mySelect');
// your code here

countries.forEach((value, index) => {
    let newOption = document.createElement('option');
    newOption.text = value;
    newOption.key = index;
    
    mySelect.appendChild(newOption);

})

mySelect.addEventListener('change', (e)=> {
    alert(e.target.value);
});