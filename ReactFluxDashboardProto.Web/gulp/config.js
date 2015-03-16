var dest = "./Scripts/";
var src = './Scripts/App';

module.exports = {
    browserify: {
        // Enable source maps
        // A separate bundle will be generated for each
        // bundle config in the list below
        bundleConfigs: [{
            entries: src + '/components/app.jsx',
            dest: dest,
            outputName: 'dashboardPrototypeBundle.js'
        }]
    }
};