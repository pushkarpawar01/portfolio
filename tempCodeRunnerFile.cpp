#include <iostream>
#include <vector>
using namespace std;
int main(){
    vector<int> v;
    int x1 = 0;
        int x2 = 1;
        v.push_back(x1);
        v.push_back(x2);
        for(int  i = 2; i < arr[arr.size() - 1]; i++){
            int x3 = x1 + x2;
            x1 = x2;
            x2 = x3;
            v.push_back(x3);
        }
    for(int i = 0; i < v.size(); i++){
        cout<<v[i]<<" ";
    }
}