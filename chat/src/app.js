import '../../common/css/normalize.css';
import '../../common/css/skeleton.css';
import '../../common/css/dark-theme.css';
import './styles.css';

import $ from 'jquery';
import Chat from './Chat';

const talk = new Chat({
    onMessage: addLog,
});

const $log = $('#log');
const $messageInput = $('#message');
const $authorInput = $('#author');

$('#chatForm').on('submit', (e) => {
    e.preventDefault();
    sendMessage();
});

talk.initConnection();

function addLog({ payload }) {
    const $message = $(`<div>${payload.username}: ${payload.message}</div>`);
    $log.append($message);
    setTimeout(() => {
        $message.addClass('message');
    });
}

function sendMessage() {
    talk.send($authorInput.val(), $messageInput.val());
    $messageInput.val('');
}
