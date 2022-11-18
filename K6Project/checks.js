import { check } from 'k6';
import http from 'k6/http';

export default function () {
  const res = http.get('http://test.k6.io/');
  check(res, {
    //checks the text
    'verify homepage text': (r) =>
      r.body.includes('Collection of simple web-pages suitable for load testing'),
      //checks return 200
      'is status 200': (r) => r.status === 200,
  });
}
