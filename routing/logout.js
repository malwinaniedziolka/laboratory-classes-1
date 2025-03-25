const logoutRouting = (method, response) => {
    response.setHeader("Content-Type", "text/html");
    response.write("<html>");
    response.write("<head><title>Shop – Logout</title></head>");
    response.write("<body>");
    response.write("<h1>Logout</h1>");
    response.write("<nav>");
    response.write("<a href="/">Home</a>"); 
    response.write("<a href="/kill,">Logout from application</a>");
    response.write("</nav>");
    response.write("</body>");
    response.write("</html>");
    return response.end();
}

module.exports = {
    logoutRouting
};
