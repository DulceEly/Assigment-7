// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM

let empForm = document.getElementById('addForm');
let empTable = document.getElementById('employees')


// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER

let empCount = document.getElementById('empCount')

// ADD EMPLOYEE
empForm.addEventListener('submit', (e) => {
    'use strict';

    // PREVENT FORM SUBMISSION
    e.preventDefault();


    // GET THE VALUES FROM THE TEXT BOXES

    let idEmployee  = document.querySelector('#id').value
    let fullName    = document.querySelector('#name').value
    let digExt      = document.querySelector('#extension').value
    let email       = document.querySelector('#email').value
    let department  = document.querySelector('#department').value
    let subEmpForm  = document.querySelector('#addForm').value



    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let newRow = empTable.insertRow();



    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW

    let cell_idEmployee = newRow.insertCell();
    let cell_fullName   = newRow.insertCell();
    let cell_digExt     = newRow.insertCell();
    let cell_email      = newRow.insertCell();
    let cell_department = newRow.insertCell();
    let cell_deleteBtn  = newRow.insertCell();



 // CREATE TEXT NODE BASED ON INPUT VALUE

    let text_idEmployee     = document.createTextNode(idEmployee)
    let text_fullName       = document.createTextNode(fullName)
    let text_digExt         = document.createTextNode(digExt)
    let text_email          = document.createTextNode(email)
    let text_department     = document.createTextNode(department)


    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS

    cell_idEmployee.appendChild(text_idEmployee)
    cell_fullName.appendChild(text_fullName)
    cell_digExt.appendChild(text_digExt)
    cell_email.appendChild(text_email )
    cell_department.appendChild(text_department)
   

    // CREATE THE DELETE BUTTON

    /////////////

    let deleteBtn = document.createElement('button')

    // ADD NECESSARY BOOTSTRAP CLASSES FOR BUTTONS
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
    
    // deleteBtn.className = 'btn btn-danger text-white';

    // CREATE TEXT NODE, SET IT TO 'X', AND APPEND TO DELETE BUTTON
    let textDelete = document.createTextNode('Delete')
    deleteBtn.appendChild(textDelete)
    
    // APPEND DELETE BUTTON TO CELL DELETE BUTTON
    cell_deleteBtn.appendChild(deleteBtn)

    // // CLEAR THE TEXT BOX
    // document.querySelector('#addForm').value = ''



    /////////////////

    // RESET THE FORM

    // const resetForm = () => {
    //     $('addForm').reset()
    //     $('id').focus()
    //     $('name').innerHTML = ''
    //     $('extension').innerHTML = ''
    //     $('email').innerHTML = ''
    //     $('department').innerHTML = ''
    //     $('registration_info').innerHTML = ''

    // }
    
    // $('submit').addEventListener('click', processEntries)
    // $('addForm').addEventListener('click', resetForm)
    // $('id').focus()
    
    addForm.reset();


    // SET FOCUS BACK TO THE ID TEXT BOX
    addForm.id.focus();




    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    
       empCount.value = empTable.rows.length-1;

//     function count() {
//         for (let i = 1; i<empTable.newRow.length; i ++){
//             empTable[i].value;
//         }
//     }

//     let counText = document.createTextNode(count.innerText);
//     empCount.appendChild(counText);



    ////////


    // function count(employees) {
    //     // VARIABLE FOR EMPLOYEE NUMBERS
    //     let i = 1;
    //     // LOOP THROUGH EMPLOYEES ARRAY
    //     employees.forEach(employee => {
    //         console.log(`${String(i)}. ${employee}`);
    //         i++;
    //     });
    //     console.log('');
    // }
    
   
//////



    // function countOccurences(empCount, num) 
    //     {                           
    //         var count = 0;
    //         for (let i = 0; i < empCount.length; i++  ){
    //            if (empCount[i] == target) count++
    //         }
    //         return count
    //     }


    // let counter= document.getElementById('employees');
    // for (let i = 1; i<= counter.length; i++){
    //     let counter = counter.value;
    // }

////

    // let table = document.getElementById('employees');

    // let totalRowCount = table.rows.length; // 5
    // // let tbodyRowCount = table.tBodies[0].rows.length; // 3
//////
    // const tableObject = document.getElementById('employees');
    // const empCount = tableObject[1].childElementCount;
    // console.log("employees")

///////



////


});

// DELETE EMPLOYEE



empTable.addEventListener('click', (e) => {
    // CHECK TO SEE IF THE .btn CLASS EXISTS ON row
    if (e.target.classList.contains('btn')) {
        // CONFIRM THE DELETION
        // if (confirm(`Are you sure you want to ${e.target.parentElement.innerText}?`)) 
        if (confirm(`Are you sure you want to delete employee?`))
        {
            // SELECT THE PARENT LI ELEMENT AND THEN DELETE IT
            // empTable.removeChild(e.target.parentElement)
            // empTable.deletenewRow(e.target.path-to-tr-tag.newRowIndex)
            const btn = e.target;
            btn.closest('tr').remove();
        }
    }
})

///////

// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS

// let idEmployee = $('id');
// let fullName = $('name');
// let digExt = $('extension');
// let email = $('email');
// let department = $('department');
// let subEmpForm  = $('submit'); 

// subEmpForm.addEventListener('click', (event) => {
//     event.preventDefault();  
//     idEmployee = idEmployee.value;
//     fullName = fullName.value;
//     digExt = digExt.value;
//     email = email.value;
//     department = department.value;
