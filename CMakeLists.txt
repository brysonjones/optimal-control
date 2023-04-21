cmake_minimum_required(VERSION 3.12 FATAL_ERROR)
project(optimal_control VERSION 0.0.1)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_EXTENSIONS OFF)
set(CMAKE_CXX_STANDARD_REQUIRED TRUE)

if(NOT CMAKE_BUILD_TYPE)
  set(CMAKE_BUILD_TYPE Debug
    CACHE STRING "Choose the type of build (Debug or Release)" FORCE)
endif()

include(FetchContent)
FetchContent_Declare(SFML_repo
    GIT_REPOSITORY https://github.com/SFML/SFML.git
    GIT_TAG 2.6.x)
FetchContent_MakeAvailable(SFML_repo)

add_executable(main src/simulator/simulator.cpp)
target_link_libraries(main sfml-window sfml-system sfml-graphics z)
