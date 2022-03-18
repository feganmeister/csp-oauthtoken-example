const axios = require('axios');

/* Per CSP Variables */
let url = '';
let username = '';
let password = '';

/* Below is a simple example of retreiving an OAuth token */
let headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
let data = {
  grant_type: 'password',
  username: username,
  password: password,
  client_id: 'TMS_Portal'
};
let formData = new URLSearchParams(data).toString();

axios.post(url, formData, headers)
  .then((response) => {
    let token = response.data.access_token;
    console.log({ token });
  })
  .catch((error) => {
    console.error({ error });
  });
