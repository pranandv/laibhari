const http = require('http');

class Laibhari {
  constructor() {
    this.middlewares = [];
    this.routes = { GET: [], POST: [] };
  }

  वापरा(middleware) {
    this.middlewares.push(middleware);
  }

  मिळवा(path, handler) {
    this.routes.GET.push({ path, handler });
  }

  पोस्ट(path, handler) {
    this.routes.POST.push({ path, handler });
  }

  विनंती_हाताळा(req, res) {
    // Set charset=utf-8 for all responses
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    const { url, method } = req;
    let i = 0;
    const next = (err) => {
      if (err) {
        return this.चुक_हाताळा(err, req, res);
      }
      if (i < this.middlewares.length) {
        const middleware = this.middlewares[i++];
        if (middleware.length === 4) { // Error handling middleware
          next();
        } else {
          middleware(req, res, next);
        }
      } else {
        const route = this.routes[method].find(r => r.path === url);
        if (route) {
          res.setHeader('Content-Type', 'text/html; charset=utf-8'); // Set charset for HTML responses
          route.handler(req, res);
        } else {
          res.statusCode = 404;
          res.end('सापडले नाही');
        }
      }
    };
    next();
  }

  चुक_हाताळा(err, req, res) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/html; charset=utf-8'); // Set charset for error responses
    res.end(`चूक: ${err.message}`);
  }

  सर्वर_बनवा(port, callback) {
    const server = http.createServer(this.विनंती_हाताळा.bind(this));
    server.listen(port, callback);
  }
}

// Define a global `पहा` function
global.पाहा = function(message) {
  process.stdout.write(`${message}\n`);
};

module.exports = Laibhari;
