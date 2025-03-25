const home = require('./home.js');
const product = require('./product.js'); 
const logout = require('./logout.js');
const statusCode = require('laboratory-classes-1/constants/statusCode.js');

const requestRouting = (request, response) => {
    const { url, method } = request;
    console.log('INFO (${new Date().toUTCString()}): ${method} - ${url}');

    if (url === "/"){
        return home.homeRouting(method, response);
    }

    if (url.startsWith("/product")){
        return product.productRouting(request, response);
    }

    if (url === "/logout"){
        return logout.logoutRouting(method, response);
    }

    if (url === "/kill"){
        //aplikacja sie zamyka
    }

    response.statusCode = 404;
    response.setHeader("Content-Type", "text/html");
    response.write("<html><body>404 - Not Found</body></html>");
    response.end();

// 🏗 Stwórz również logowanie do konsoli informacji, mówiące o typie logowania (PROCESS), dacie oraz informację, że wylogowowyanie zostało wywołane a aplikacja zamknie się.

// 🏗 Stwórz również logowanie do konsoli informacji, mówiące o typie logowania (ERROR), dacie oraz informację, że żądany url nie istnieje.
//  };


}

module.exports = {
    requestRouting
};

