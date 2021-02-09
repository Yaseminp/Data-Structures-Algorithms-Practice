

function FindMax(arr) {
    var max = arr[0];
    for (let i=0; i<n; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}