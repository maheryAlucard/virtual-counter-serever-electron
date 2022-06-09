import * as messenger from 'messenger';

const onMessageData = (message: any, data: any) => {
    console.log(message, data);
}

export const initCommunication = () => {
    const server = messenger.createListener(8000);

    server.on('test-message-data', onMessageData);

    return ({ server })
}