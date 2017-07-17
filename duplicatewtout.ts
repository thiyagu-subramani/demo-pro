class duplicate {
    constructor (private s: number[]) {
        
    }
    check() {
        var s1: number[] = this.s;
        for (var i: number = 0; i < s1.length; i++) {
            for (var j: number = i + 1; j < s1.length; j++) {
                if (s1[i] == s1[j]) {
                    for (var k: number = j; k < s1.length; k++) {
                        s1[k] = s1[k + 1];
                    }
                    s1.length--;
                }

            }
        }
        for (let i: number = 0; i < s1.length; i++) {
            console.log(s1[i]);
        }
    }
}
var a = new duplicate([11, 12, 12, 13, 13, 13, 14, 12, 14, 15]);
a.check();