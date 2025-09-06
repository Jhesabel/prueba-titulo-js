//playawright configuraciones 

/**@type {import('@playwright/test').PlaywrightTestConfig}*/

const config ={
use: {
    screenshot:'only-on-failure',
    trace: 'retain-on-failure',
},
projects: [
{name: 'Chomium', use: {brouserName: 'chromium'}},
//{name: 'Firefox', use: {brouserName: 'firefox'}},
//{name: 'Webkit', use: {brouserName: 'webkit'}},

],
testDir: 'test',
timeout: 30000,
expect: {
     timeout:5000

},
};
module.exports = config;

