import { RESTDataSource } from 'apollo-datasource-rest';

export class DadJokeDataSource extends RESTDataSource {
    baseURL = 'https://icanhazdadjoke.com/';

    async getRandomJoke() {
        return this.get('');
    }

    willSendRequest(request) {
        request.headers.set('Accept', 'application/json');
    }
}
