
const DATA_URL = 'https://s3.amazonaws.com/cdn.clearscore.com/native/interview_test/creditReportInfo.json'


export const fetchReportInfo = () => fetch(DATA_URL)
  .then(data => data.json)
  .catch(console.error.bind(null, 'error fetching data:'));
