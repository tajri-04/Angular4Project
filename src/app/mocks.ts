import { Message, MessageType } from './messages/message/message';
const MockMessages: Message[] = [
    {
        author: 'Jhon',
        content: 'Hello world #insta #happy',
        date: '2017-12-05',
        hidden: false,
        type : MessageType.IMAGE
    },
    {
        author: 'Joe',
        content: 'Hi, how are you? #whatsup',
        date: '2017-12-05',
        hidden: false,
        type : MessageType.TEXT
    },
    {
        author: 'Jack',
        content: '@Joe : Fine wby? #hello #humor',
        date: '2017-12-05',
        hidden: false,
        type: MessageType.VIDEO
    }
];
export { MockMessages}
