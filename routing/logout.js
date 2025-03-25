const logoutRouting = (method, response) => {
    response.setHeader("Content-Type", "text/html");
    response.write("<html>");
    response.write("<head><title>Shop – Logout</title></head>");
    response.write("<body><h1>Logout</h1></body>");
    //nav i 2 a??? wut
    response.write("</html>");
    return response.end();
}

module.exports = {
    logoutRouting
};
