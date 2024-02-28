 
   function getFormValue() {
     
    var form = document.getElementById("myForm"); 
    var firstName = form.elements["firstName"].value;
    var lastName = form.elements["lastName"].value;
 
    var fullName = firstName + "\n" + lastName;

    alert(fullName);
}

 
