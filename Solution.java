
public class Solution {

    public boolean canReach(int[] array, int start) {
        if (start < 0 || start >= array.length || array[start] < 0) {
            return false;
        }
        if (array[start] == 0) {
            return true;
        }
        array[start] = -array[start];
        return canReach(array, start - array[start]) || canReach(array, start + array[start]);
    }
}
