const PROXY_CONFIG = [
    {
        context: [
            "/api"
        ],
        target: "http://localhost:8080",
        //secure false karena gapake SSL
        secure: false
    }
]

module.exports = PROXY_CONFIG;