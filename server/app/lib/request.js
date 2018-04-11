'use strict';

const request = require('requestretry').defaults({ json: true, maxAttempts: 2 });

class Request {

    constructor(baseUrl) {
        this.url = baseUrl;
    }

    get(path) {
        const reqUrl = this.url + path;

        return request.get(reqUrl)
            .then(response => {
                console.log(`Successfully called GET ${reqUrl} with response: ${response.statusCode}`);

                if (response.body.message && response.body.code) {
                    throw new Error(response.body.code);
                }

                return response.body;
            })
            .catch(err => {
                console.log(`Failed to call GET ${reqUrl} with error: ${err.message}`);

                throw err;
            });
    }

    post(path, body) {
        const reqUrl = this.url + path;

        return request.post(reqUrl, { body })
            .then(response => {
                console.log(`Successfully called POST ${reqUrl} with response: ${response.statusCode}`);

                if (response.body.message && response.body.code) {
                    throw new Error(response.body.code);
                }

                return response.body;
            })
            .catch(err => {
                console.log(`Failed to call POST ${reqUrl} with error: ${err.message}`);

                throw err;
            });
    }

    put(path, body) {
        const reqUrl = this.url + path;

        return request.put(reqUrl, { body })
            .then(response => {
                console.log(`Successfully called PUT ${reqUrl} with response: ${response.statusCode}`);

                if (response.body.message && response.body.code) {
                    throw new Error(response.body.code);
                }

                return response.body;
            })
            .catch(err => {
                console.log(`Failed to call PUT ${reqUrl} with error: ${err.message}`);

                throw err;
            });
    }

    del(path) {
        const reqUrl = this.url + path;

        return request.delete(reqUrl)
            .then(response => {
                console.log(`Successfully called DELETE ${reqUrl} with response: ${response.statusCode}`);

                if (response.body.message && response.body.code) {
                    throw new Error(response.body.code);
                }

                return response.body;
            })
            .catch(err => {
                console.log(`Failed to call DELETE ${reqUrl} with error: ${err.message}`);

                throw err;
            });
    }
}

module.exports = Request;
