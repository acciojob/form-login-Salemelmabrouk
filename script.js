 
   function getFormValue() {
     
    var form = document.getElementById("myForm"); 
    var firstName = form.elements["fname"].value;
    var lastName = form.elements["lname"].value;
 
    var fullName = firstName + " " + lastName;

    alert(fullName);
}

 
