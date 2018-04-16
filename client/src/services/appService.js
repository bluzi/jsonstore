class AppService {
    getToken() {
        return fetch('/get-token')
            .then(response => response.json())
            .then(json => json.token);
    }
}

export default AppService;