const socket = new WebSocket('wss://fep-app.herokuapp.com/');

console.log(socket)


socket.onopen = () => {
    console.log('socket opened');
    // socket.send('Hello world!')
}

socket.onmessage = (message) => {
    console.log('message', JSON.parse(message.data))
}

socket.onclose = () => {
    console.log('close')
}

socket.onerror = () => {
    console.log('error')
}

document.getElementById('sendMsg').addEventListener('click', () => {
    socket.send(JSON.stringify({
        type: 'message',
        payload: 'Alex!'
    }));
})


