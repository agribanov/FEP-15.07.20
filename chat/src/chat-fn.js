const CONNECTION_URL = 'wss://fep-app.herokuapp.com/';

export default function(config){
    let socket;

    initConnection();

    function initConnection(){
        socket = new WebSocket(CONNECTION_URL);

        socket.onopen = onSocketOpen
        socket.onclose = onSocketClose
        socket.onmessage = onSocketMessage

    }

    function onSocketOpen() {
        send('System', 'New user connected.');
    }
    function onSocketClose() {
        console.warn('Disconnected');
        // initConnection();
    }
    function onSocketMessage(e) {
        config.onMessage && config.onMessage(JSON.parse(e.data));
    }

    function send(name, message) {
        socket.send(
            JSON.stringify({
                type: 'message',
                payload: {
                    username: name,
                    message: message,
                },
            })
        );
    }

    return send;
}

