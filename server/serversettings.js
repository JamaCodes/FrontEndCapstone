 const auth = {
    auth: {
        api_key: process.env.API_KEY ||  '', // TODO: Replace with your mailgun API KEY
        domain: process.env.DOMAIN || '' // TODO: Replace with your mailgun DOMAIN
    }
};

module.exports = auth