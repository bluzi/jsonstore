class AppService {
    getLink() {
        return fetch('/get-link')
            .then(response => response.json())
            .then(json => json.link);
    }
}

export default AppService;