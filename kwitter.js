function adduser() {
    user_name = document.getElementById("username").ariaValueMax;

    localStorage.setItem("username",user_name);

    window.location="kwitter_room.html";
}