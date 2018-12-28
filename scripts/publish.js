// curl 'https://ordersingingvalentine.com/HCA.NC' -H 'Connection: keep-alive' -H 'Cache-Control: max-age=0' -H 'Origin: https://ordersingingvalentine.com' -H 'Upgrade-Insecure-Requests: 1' -H 'Content-Type: application/x-www-form-urlencoded' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36' -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8' -H 'Referer: https://ordersingingvalentine.com/HCA.NC?admin=1' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en,en-US;q=0.9,zh-TW;q=0.8,zh;q=0.7,ru;q=0.6,de;q=0.5,ja;q=0.4,es;q=0.3,ko;q=0.2,fr;q=0.1' -H 'Cookie: PHPSESSID=a0lnu0s84utqsckgao39fuvpcumvhdte' --data "jsValid=0&ShowTopImage=no&OrderFormTitle=Serving+Raleigh%2C+Chapel+Hill&order_form_heading=${HTML}&admin=1&action=saveFormChanges&ChorusID=39&PhoneOrder=&YourName=&Phone=&Phone2=&BuyerAddress=&BuyerCity=&BuyerState=&BuyerZip=&BuyerCountryName=&Email=&Email2=&HowFound=&OrderSelected=&ValentineTo=&RecipientEmail=&Relationship=&offerAdditionalRecipients=no&ExtraForAdditionalRecipient=0.00&Extras=&DeliveryDay=&DeliveryTimeFrame=&DeliveryTimeFramesFlexible=yes&DeliveryTimeBetween=&DeliveryTimeAnd=&RequestedQuartetID=&AllowRequestQuartet=no&RequestQuartetLimit=no&RecipientPhone=&DeliveryLocation=&LocationType=&LocationAddress=&ExtraDeliveryFee=0.00&LocationCity=&LocationZip=&LocationCountyOrZip=&OnSiteContact=&OnSitePhone=&SpecialInstructions=&MessageSelect=&MessageForCardToRecipient=&Total=&saveFormChanges=Save+Form+Change" --compressed
const fs = require('fs-extra');
const axios = require('axios');
const path = require('path');
const querystring = require('querystring');

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
      action: 'saveFormChanges',
      ChorusID: '39'
    })
  });

  console.log(result.data);
})().catch(console.log);
