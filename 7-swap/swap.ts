const obj:Record<string,number> = {
    a: 1,
    b: 2
};

function swapKeysAndValues<T>(obj: T): T {
    //......
    return obj;
}

console.log(swapKeysAndValues(obj));