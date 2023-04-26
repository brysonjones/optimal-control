#include "crow.h"
#include "crow/middlewares/cors.h"

double position = 0;

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
        position += 0.01;
        crow::json::wvalue data({{"x", position}});
        return data;
    });

    app.port(8080).run();
}