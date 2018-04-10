let showLogin;

class Request {

    constructor(path, parameter = {}) {

        this.path = path;
        this.parameter = parameter;

    }

    post() {

        return Request.request(this.path, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('token')
            },
            body: JSON.stringify(this.parameter)
        });

    }

    get() {

        let path = `${this.path}?`;

        Object.keys(this.parameter)
            .forEach((key) => {

                path += `${key}=${this.parameter[key]}&`;

            });

        path = path.substr(0, path.length - 1);

        return Request.request(path, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: localStorage.getItem('token')
            }
        });

    }

    static request(path, information) {

        // TODO CHANGE URL
        return new Promise((resolve, reject) => fetch(`http://localhost:8080/${path}`, information)
            .then((body) => {

                switch (body.status) {

                    case 200:
                        body.json()
                            .then(json => resolve(json));
                        break;
                    case 403:
                        localStorage.setItem('token', null);
                        showLogin();
                        break;
                    default:
                        body.json()
                            .then(json => reject(json));

                }

            })
            .catch(error => reject(error)));

    }

}

function setShowLogin(to) {

    showLogin = to;

}

export { setShowLogin };
export default Request;
