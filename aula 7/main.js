


const select = document.getElementById('data-de-nascimento');
let options = ""; 

for (let index=1920; index < 2021; index++) {

   console.log(2020-index);
    
   options += `<option value="${index}">${index}</option>`;
}

console.log(select)

select.innerHTML = options;