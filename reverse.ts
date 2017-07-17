class Reverse {
    Zeros(arr: string) {
        var arr1: string = arr;
        var str: string[] = arr1.split(" ");
        var n: number = str.length;
        alert(n);
        var str2: string = "";
        for (let i = 0; i < str.length; i++) {
            var t: string = str[i];
            for (let j = t.length-1; j >= 0; j--)
            {
                
                console.log(t[j]);
            }
    }
    }
}
var s = new Reverse();
s.Zeros("syncfusion software pvt ltd");