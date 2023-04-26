
include(FetchContent)

FetchContent_Declare(crow_repo
    GIT_REPOSITORY https://github.com/CrowCpp/Crow.git
    GIT_TAG v1.0+5)
FetchContent_MakeAvailable(crow_repo)

add_executable(communication_manager communication_manager.cpp)


target_link_libraries(communication_manager PUBLIC Crow::Crow)