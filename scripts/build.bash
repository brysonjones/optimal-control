mkdir -p build
cd build
cmake -S .. -B build -DCMAKE_BUILD_TYPE=Release
cmake --build build
