function submit(){
    let formmain=document.querySelector(".login-form")
    let form=document.querySelector(".user")
    let uservalue=form.value
    console.log(uservalue);
    window.location.href=`./index1.html`
    // form.innerText=""
}
function submit1(){
    // let passvalue=document.querySelector(".pass")
    let formmain=document.querySelector(".login-form")
    let user=document.querySelector(".user")
    let git=document.querySelector(".git")
    let enable=document.querySelector(".enable")
     uservalue=user.value
     gitvalue=git.value
   if(uservalue=="Pralekh13" && gitvalue=="Pralekh-13"){
    console.log("correct");
    enable.disabled=false

   }
   else{
    enable.disabled=true
    console.log("incorrect");
    
   }
}
// console.log(uservalue);