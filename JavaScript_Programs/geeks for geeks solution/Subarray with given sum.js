function subarraySum(arr, n, s)
{
    //your code here
    let val = 0;
    let start = 0;
    let end = 0;

    while (end < n) {
        
        if (s > val) {
            val += arr[end];
            end++;
        }

        if (val > s) {
            val -= arr[start];
            start++;
        }

        if (s === val) return [start + 1, end];
    }
    return -1;
}
let arr = [74 665
142 112 54 69 148 45 63 158 38 60 124 142 130 179 117 36 191 43 89 107 41 143 65 49 47 6 91 130 171 151 7 102 194 149 30 24 85 155 157 41 167 177 132 109 145 40 27 124 138 139 119 83 130 142 34 116 40 59 105 131 178 107, 74, 187, 22, 146, 125, 73, 71, 30, 178, 174, 98, 113]
console.log(subarraySum(arr, 5, 12))
