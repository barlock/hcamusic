const fs = require('fs-extra');
const axios = require('axios');
const path = require('path');
const querystring = require('querystring');

require('dotenv').config();

(async () => {
  const fileData = (await fs.readFile(
    path.join(__dirname, '../out/index.html'),
    'utf8'
  )).replace('<!DOCTYPE html>', '');

  const result = await axios({
    method: 'POST',
    url: 'https://ordersingingvalentine.com/HCA.NC',
    headers: {
      Cookie: `PHPSESSID=${process.env.PHPSESSID}`
    },
    data: querystring.stringify({
      order_form_heading: fileData,
      admin: '1',
      ShowTopImage: 'no',
      action: 'saveFormChanges',
      ChorusID: '39'
    })
  });
})().catch(console.log);
