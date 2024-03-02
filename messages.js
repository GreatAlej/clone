document.getElementById("message").onclick = function () {
    document.getElementById("like").style.display = "none";
    document.getElementById("send").style.display = "block";
}

document.getElementById("send").onclick = function () {
    document.getElementById("send").style.display = "none";
    document.getElementById("like").style.display = "block";
}

let first_text = "Allow Facebook to access your phone storage?";
let last_text = "To allow this, tap app settings, go to the permission menu and turn on storage." ;
let camera_text;

camera_text = first_text + " "  + last_text;

let microphone_text ;

let first_m_text = "Allow Facebook to access your microphone?" ;
let mid_m_text = "This lets you record audio on Facebook." ;
let last_m_text = "You can always change this in your device settings"

microphone_text = first_m_text + " " + mid_m_text + " " + last_m_text;

document.getElementById("camera").onclick = function() {
    alert(camera_text);
}

document.getElementById("microphone").onclick = function() {
    alert(microphone_text);
}
