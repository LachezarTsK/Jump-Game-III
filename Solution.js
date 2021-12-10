
/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (array, start) {
    if (start < 0 || start >= array.length || array[start] < 0) {
        return false;
    }
    if (array[start] === 0) {
        return true;
    }
    array[start] = -array[start];
    return canReach(array, start - array[start]) || canReach(array, start + array[start]);
};
