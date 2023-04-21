
include(FetchContent)

# Force WebSocket++ to use 100% C++11 mode, so that it doesn't try to look for Boost
add_definitions(-D_WEBSOCKETPP_CPP11_STRICT_ -DASIO_STANDALONE)

FetchContent_Declare(websocketpp_repo
    GIT_REPOSITORY https://github.com/zaphoyd/websocketpp.git
    GIT_TAG 0.8.2)
FetchContent_MakeAvailable(websocketpp_repo)

FetchContent_Declare(asio_repo
    GIT_REPOSITORY https://github.com/chriskohlhoff/asio.git
    GIT_TAG asio-1-27-0)
FetchContent_MakeAvailable(asio_repo)

# add_library(websocket_manager SHARED websocket_manager.cpp)

add_executable(websocket_manager websocket_manager.cpp)
target_include_directories(websocket_manager PUBLIC ${websocketpp_repo_SOURCE_DIR} 
                                                    ${websocketpp_repo_SOURCE_DIR}/websocketpp
                                                    ${asio_repo_SOURCE_DIR}/asio/include
)
target_link_libraries(websocket_manager PRIVATE pthread rt)