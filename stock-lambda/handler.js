'use strict';
const axios = require("axios")

module.exports.handler = async (event) => {

  for (const record of event.Records) {

    const body = JSON.parse(record.body)
    const payload = {
      MessageGroupId: "stock-arrival-group",
      MessageAttributeProductId: "CP-502101",
      MessageAttributeProductCnt: 10,
      MessageAttributeFactoryId: body.MessageAttributes.FactoryId.Value,
      MessageAttributeRequester: "Chan",
      CallbackUrl: process.env.increase_ENDPOINT
    }
    
    console.log(payload)
    await axios.post('http://factory.p3.api.codestates-devops.be:8080/api/manufactures', payload)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
