class Insorting {
    Insertion(arr: number[]) {
        var arr1: number[] = arr;

        if (arr.length == 0) {
            return "empty";
        }
        for (let i = 1; i <arr1.length; i++) {

            var t: number = arr[i];
            let j = i - 1;
            while (t < arr[j] && j >= 0) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = t;

        }


        return arr;
    }
}



