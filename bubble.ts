class Sorting<T> {
    bubble(arr: Array<T>) {
        var arr1: T[] = arr;

        if (arr.length == 0) {
            return "empty";
        }
        for (let i = 0; i < arr1.length; i++) {
            //return 'swap false';
            for (let j = 0; j < arr1.length - i; j++) {
                //console.log(arr1[j])
                //console.log(arr1[j+1])
                if (arr1[j] > arr1[j + 1]) {
                    var temp = arr1[j + 1];
                    arr1[j + 1] = arr1[j];
                    arr1[j] = temp;
                }

            }
        }

        for (let i = 0; i < arr1.length; i++)
            console.log(arr[i]);

    }
}
//var s = new Sorting();
//s.bubble(["1", 'a','b','AD','AC','z','67','34','87','c','z','30','3a','2s','1b','1a','3','A2','A6','A1','F12','G12']);
//s.bubble(['a','1','b','a','c'])
//s.bubble(["thiyagu", 'sridhar', "maaaaaaohan", "mohana", 121432134, 12143, 17898, "maaani", "subramanium", 3])