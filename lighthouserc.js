module.exports = {
    ci: {
        collect: {
            settings: {chromeFlags: '--no-sandbox'},
            staticDistDir: './__sapper__/build',
            url: ['http://localhost:3000']
        },
        upload: {
            target: 'filesystem',
            outputDir: './__sapper__/_lhci'
        },
        assert: {
            preset: "lighthouse:no-pwa",
        },
    },
};
