#include "crow.h"
#include "crow/middlewares/cors.h"

int main()
{
    crow::App<crow::CORSHandler> app;
    
    auto& cors = app.get_middleware<crow::CORSHandler>();

    // clang-format off
    cors
      .global()
        .headers("X-Custom-Header", "Upgrade-Insecure-Requests")
        .methods("POST"_method, "GET"_method)
      .prefix("/data")
        .origin("*");
    // clang-format on

    CROW_ROUTE(app, "/data")([]()
    {
        crow::json::wvalue data({{"message", "Hello, World!"}});
        return data;
    });

    app.port(8080).run();
}