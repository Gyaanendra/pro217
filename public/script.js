
const socket = io("/");
var peer = new Peer(undefined,{
    path:"/peerjs",
    host:"/",
    port:"3030",
  })
const user = prompt("Enter your name to proceed");

$(function () {
    $("#send").click(function () {
        if ($("#chat_message").val().length !== 0) {
            console.log(user);
            socket.emit("message", $("#chat_message").val());
            $("#chat_message").val("");
        }
    })
    $("#chat_message").keydown(function (e) {
        if (e.key == "Enter" && $("#chat_message").val().length !== 0) {
            socket.emit("message", $("#chat_message").val());
            $("#chat_message").val("");
        }
    })
})

peer.on("open",(id)=>{
    socket.emit("join-room",ROOM_ID,id,user)
   })

socket.on("create message", (message,userName) => {
    $(".messages").append(`
        <div class="message">
        <b><i class="far fa -user -circle username"><span>${userName === user?"me: ":userName+": "}</span><i><b>
            <span class="span_mess">${message}</span>
        </div>
    `)
});
