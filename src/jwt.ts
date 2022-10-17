import * as jose from 'jose';

export function jwt_example(r: NginxHTTPRequest): void {
  const token = r.headersIn.Authorization?.slice('Bearer '.length)
    ?? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
  // Token generated on https://jwt.io

  const data = jose.decodeJwt(token);

  r.headersOut['Content-Type'] = 'application/json';
  return r.return(200, JSON.stringify(data));
}
