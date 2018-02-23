import { MessageType } from './message-type';

export interface Message {
    author: string;
    content: string;
    date: string;
    image?: string;
    hidden: boolean;
    type: MessageType;
}
export { MessageType };
