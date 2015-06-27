var userLoggedIn;
function doLogin() {
    username = document.getElementById("User_Name").value;
    password = document.getElementById("Password").value;
    if (!username, !password)
    {
        alert('Please enter your user name and password');
    }
    else
    {
        localStorage['authKey'] = 'Basic ' + window.btoa(username + ':' + password);
        doAjax("http://gw151.iu.xsede.org:8080/openmrs/ws/rest/v1/session");
    }
}
function doAjax(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200)
            {
                authResponse = JSON.parse(xhr.responseText);
                if (authResponse.authenticated == false) {
                    alert('Authenticated Faild, Please check your user name and password');
                }
                else
                {
                    window.location.replace(href = "PatientInfo.html");
                    //document.getElementById("loginForm").style.display = 'none';
                    //document.getElementById("pinForm").style.display = 'block';
                }
            }
            else
            {
                alert('Authentication Faild, Please check your user name and password');
            }
        }
    };
    xhr.setRequestHeader("Authorization", localStorage['authKey']);
    xhr.send();
}