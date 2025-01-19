function notEqual(target, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (target != arr[i]) {
            console.log(arr[i].name)
            return true;
        } else {
            return false;
        }
    }
}

export { notEqual };