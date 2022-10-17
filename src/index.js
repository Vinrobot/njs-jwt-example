function hello(r) {
  return r.return(200, 'Hello World!');
}

global.main = { hello };
