
class Solution {
public:

    bool canReach(vector<int>& array, int start) {
        if (start < 0 || start >= array.size() || array[start] < 0) {
            return false;
        }
        if (array[start] == 0) {
            return true;
        }
        array[start] = -array[start];
        return canReach(array, start - array[start]) || canReach(array, start + array[start]);
    }
};
