function creatRegistrationArea(){
    document
     .querySelector("#registration-area")
     .addEventListener("click", (event) => {
       event.preventDefault();
       if (event.target.tagName.toLowerCase() === "button") {
         let firstName = document.getElementById("first-name").value;
         let lastName = document.getElementById("lastname").value;
         let age = document.getElementById("age").value;
         event.firstName = firstName;
         event.lastName = lastName;
         event.age = age;
         studentsList.push(event);
         refresh();
         printCountStudents();
        }
      });   
   }
   
   creatRegistrationArea();

function createStudent(sList) {
    return sList.map( (s, index) => `
    <tr>
        <td>${s.firstName}</td>
        <td>${s.lastName}</td>
        <td>${s.age}</td>
        <td><button id="${index}" class= "remove">remove</button></td>
    </tr>
`).join("");
}

function createStudentsList(sList){
    return `
        <table>
            ${createStudent(sList)}
            ${createTotalStudents()}
        </table>
    `;
}

function createTotalStudents() {
  return `
    <tr id= "total">
        <td colspan="2">Total Students:</td>
        <td colspan="2">${studentsList.length}</td>
    </tr>
`;
}

function printCountStudents() {
    document.querySelector("#total").innerHTML = createTotalStudents();
  }

  function removeFromList(pDeletedIndex){
    studentsList.splice(pDeletedIndex, 1);
    refresh();
 
    
}

function refresh(){
    document.querySelector("#students-container").innerHTML = createStudentsList(studentsList);
   
}