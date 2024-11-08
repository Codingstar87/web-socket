const socket = io();
const sendButton = document.getElementById('sendButton')
const messageInput = document.getElementById('massage')

sendButton.addEventListener('click' , (e)=> {
    const message = messageInput.value ;
    console.log(message)
    socket.emit('user-message:',message)
})


socket.on('server-message',(m)=> {
    console.log("msg-from server",m)
    const h1 = document.createElement('h1');
    h1.innerText = m
    allMessages.appendChild(h1)             //sob lekha 'disply-the-msg-frm-server' a div tar modhe dhukbo as child h1 hisabe

})

const allMessages = document.getElementById('disply-the-msg-frm-server')
