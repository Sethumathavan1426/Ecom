autoAdjustContainerToCenter = () => {
    setTimeout(() => {
        let windowHeight = window.innerHeight;
        let windowWidth = window.innerWidth;
        let container = document.getElementById('loginContainer');
        let containerHeight = container.clientHeight;
        let containerWidth = container.clientWidth;
        let windowHeightCenter = windowHeight / 2;
        let windowWidthCenter = windowWidth / 2;
        let containerHeightCenter = containerHeight / 2;
        let containerWidthCenter = containerWidth / 2;
        container.style.top = windowHeightCenter - containerHeightCenter;
        container.style.left = windowWidthCenter - containerWidthCenter;
        container.style.position = "absolute";
    }, 0);
}

(() => {
    autoAdjustContainerToCenter();
})();

window.addEventListener("resize", () => {
    autoAdjustContainerToCenter();
});

onloginclick = () => {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (!username && !password) {
        document.getElementById("error-msg").innerHTML = "Please enter the Username and Password";
        return;
    }
    if (!username) {
        document.getElementById("error-msg").innerHTML = "Please enter the Username";
        return;
    }
    if (!password) {
        document.getElementById("error-msg").innerHTML = "Please enter the Password";
        return;
    }
    var user = USERS.find((_value) => {
        return _value.username === username && _value.password === password;
    });
    if (user) {
        window.localStorage.setItem('userInfo', JSON.stringify(user));
        window.open("../html/list.html", "_self");
    }
    else {
        document.getElementById("error-msg").innerHTML = "Username or Password is incorrect";
    }
}

onkeyupEvent = () => {
    document.getElementById("error-msg").innerHTML = null;
}
togglepass = () => {
    var classlist = document.getElementById("togglepassel").classList;
    if (classlist.contains("bi-eye")) {
        classlist.remove("bi-eye");
        classlist.add("bi-eye-slash");
        document.getElementById("password").type = "text";
    }
    else if (classlist.contains("bi-eye-slash")) {
        classlist.remove("bi-eye-slash");
        classlist.add("bi-eye");
        document.getElementById("password").type = "password";
    }
}
