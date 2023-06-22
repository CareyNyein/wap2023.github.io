const dns = require('dns');

const domain = 'www.miu.edu';

dns.resolve4(domain, (err, addresses) => {
    if (err) {
        console.error('Error:', err);
        return;
    }

    console.log(`IP addresses for ${domain}:`);
    addresses.forEach((address, index) => {
        console.log(`${index + 1}. ${address}`);
    });
});