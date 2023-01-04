// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;

template <class T>
T intAdd(T a, T b)
{
    return a + b;
}

int main()
{
    float fX = 2.2, fY = 3.3;
    int x = 2, y = 3;

    T z = intAdd(x, y);
    cout << z;
    return 0;
}