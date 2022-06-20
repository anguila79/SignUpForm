document.querySelector('#submitButton').onclick = function() { 
    let password = document.getElementById('password');
    let repeatPassword = document.getElementById('repeatpassword');

    if(password.value !== repeatPassword.value){

        password.style.cssText = `
            border-radius: 5px;
            padding: 8px;
            font-size: 18px;
            border: solid 0.5px #b91c1c;
        `;

        password.addEventListener("focus", function () {
            this.style.boxShadow = "0 0 5px 2px #D3D3D3";
            this.style.outlineWidth = "0px";
        });

        password.addEventListener("blur", function () {
            this.style.boxShadow = "0 0 0";
        });

        repeatPassword.style.cssText = `
            border-radius: 5px;
            padding: 8px;
            font-size: 18px;
            border: solid 0.5px #b91c1c;
        `;

        repeatPassword.addEventListener("focus", function () {
            this.style.boxShadow = "0 0 5px 2px #D3D3D3";
            this.style.outlineWidth = "0px";
        });

        repeatPassword.addEventListener("blur", function () {
            this.style.boxShadow = "0 0 0";
        });

        let pswErrorMessage = document.getElementById('errorPassword');
        pswErrorMessage.style.display = "block";
    }
}