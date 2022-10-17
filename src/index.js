const jose = global.jose = require('jose');

export function jwt_example(r) {
  var header = r.headersIn.Authorization;

  var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
  // Token generated on https://jwt.io
  if (header) {
    token = header.slice('Bearer '.length);
  }

  var data = jose.decodeJwt(token);

  r.headersOut['Content-Type'] = 'application/json';
  return r.return(200, JSON.stringify(data));
}

function hello(r) {
  return r.return(200, 'Hello World!');
}

global.main = { hello, jwt_example };
