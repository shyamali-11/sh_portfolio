function mode() {
    var element = document.body;
    
   element.classList.toggle("light-mode");
   
 }


window.onload = function() {
    setInterval(function(){
        var date = new Date();
        
        var displayTime = date.toLocaleTimeString();

        document.getElementById('datetime').innerHTML = displayTime;
    }, 1000); // 1000 milliseconds = 1 second
}



function sendMail() {
    var link = "mailto:bhartishyamali@gmail.com"
               + "?cc=myCCaddress@example.com"
               + "&subject=" + encodeURIComponent(document.getElementById('floatingSubject').value)
               + "&body=" + encodeURIComponent(document.getElementById('floatingMessage').value)
    ;
    
    window.location.href = link;
}



new kursor({
    type: 1,
    removeDefaultCursor: true,
    color:"#FF0060"
   
})