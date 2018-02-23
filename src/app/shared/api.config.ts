import { Injectable } from '@angular/core';
@Injectable()
export class ApiConfig {
    url = 'https://whispering-spire-74666.herokuapp.com';
    wsUrl = 'ws://whispering-spire-74666.herokuapp.com';
    messages = {
        url: '',
        route: '/messages',
        methods: ['GET', 'POST']
    };

    users = {
        url: '',
        route: '/users',
        mehtods: ['GET']
    };

    login = {
        url: '',
        route: '/login',
        mehtods: ['POST']
    };

    constructor() {
        this.messages.url = this.url + this.messages.route;
        this.users.url = this.url + this.users.route;
        this.login.url = this.url + this.login.route;
    }
}
