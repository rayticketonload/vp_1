import axios from 'axios';

// const baseURL = 'http://rap2api.taobao.org';

export default {
  use() {
    axios.defaults.timeout = 10000;
    // axios.defaults.baseURL = baseURL;
    axios.defaults.headers.post['Content-Type'] = 'application/json';
  },
};
