const axios = require('axios');

const getVaults = async vaultsEndpoint => {
  try {
    // const response = await axios.get(vaultsEndpoint);
    const data = vaultsEndpoint;
    // let vaults = '[' + data.substring(data.indexOf('\n') + 1);
    // vaults = eval(vaults);
    return data;
  } catch (err) {
    console.error(err);
    return 0;
  }
};

module.exports = getVaults;
