 // Select the custom elements
 const trailingCircle = document.querySelector('.trailing-circle');
 const burgerIcon = document.querySelector('.burger-icon');

 // Variables for mouse position and animation
 let mouseX = 0, mouseY = 0; // Current mouse position
 let trailingX = 0, trailingY = 0; // Trailing circle position
 const speed = 0.2; // Speed of trailing circle (lower is slower)

 // Track mouse movement
 document.addEventListener('mousemove', (e) => {
     mouseX = e.pageX;
     mouseY = e.pageY;

     // Update burger icon position instantly
     burgerIcon.style.transform = `translate(${mouseX - 10}px, ${mouseY - 10}px)`; // Adjusting for icon size
 });

 // Smooth trailing animation
 function animateTrailingCircle() {
     trailingX += (mouseX - trailingX) * speed;
     trailingY += (mouseY - trailingY) * speed;

     trailingCircle.style.transform = `translate(${trailingX - 25}px, ${trailingY - 25}px)`; // Adjusting for circle size

     requestAnimationFrame(animateTrailingCircle);
 }
 // Home Alert Function
 function click123() {
    alert("Choose Option to dropdown and select what do you want")
 }
 animateTrailingCircle();


 // form check validation
 let fname = document.querySelector("#userName")
 let lname = document.querySelector("#lastName")
 let email = document.querySelector("#email")
 let cnic = document.querySelector("#cnic")
 let pass = document.querySelector("#pass")
 let cpass = document.querySelector("#cpass")


 function checkValidation() {
    if (fname.value.trim() === "") {
        document.querySelector("#na").innerHTML = "First Name is required"
        fname.focus()
        return false
    } 
    else if(lname.value.trim() === ""){
        
        document.querySelector("#lna").innerHTML = "Last Name is required"
        lname.focus()
        return false
    }
    else if(email.value.trim() === ""){
        
        document.querySelector("#ema").innerHTML = "Email  is required"
        email.focus()
        return false
    }
    else if(cnic.value.trim() === ""){
        
        document.querySelector("#cn").innerHTML = "CNIC number is required"
        cnic.focus()
        return false
    }
    else if(pass.value.trim() === ""){
        
        document.querySelector("#pa").innerHTML = "password is required"
        pass.focus()
        return false
    }
    else if(cpass.value.trim() !== pass.value.trim()){
        
        document.querySelector("#cpa").innerHTML = "Password does not match"
        cpass.focus()
        return false
    }
    else {
        document.querySelector("#na").innerHTML = ""
 
    }
 }

// eyes icon logic

let icon1 = document.querySelector("#icon")
let icon2 = document.querySelector("#icon1")


icon1.onclick = function(){
if (pass.type === "password") {
    pass.type = "text"
    icon1.classList.remove("fas" , "fa-eye-slash")
    icon1.classList.add("fas" , "fa-eye")
} else {
    pass.type = "password"
    icon1.classList.remove("fas" , "fa-eye")
    icon1.classList.add("fas" , "fa-eye-slash")
    
}

}
icon2.onclick = function(){
if (cpass.type === "password") {
    cpass.type = "text"
    icon2.classList.remove("fas" , "fa-eye-slash")
    icon2.classList.add("fas" , "fa-eye")
} else {
    cpass.type = "password"
    icon2.classList.remove("fas" , "fa-eye")
    icon2.classList.add("fas" , "fa-eye-slash")
    
}

}