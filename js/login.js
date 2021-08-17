document.getElementById("submitBtn").addEventListener("click", function () {
    // get mail
    const mailBox = document.getElementById("emailFild");
    const mail = mailBox.value;
    
    // get passwors 
    const passwordBox = document.getElementById("passwordFild");
    const password = passwordBox.value;
    
    // cheak email & passwor
    if (mail == "sontan@baap.com" && password =="secret") {
        window.location.href="bank.html" ;
    }
})