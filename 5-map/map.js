var MyMap = /** @class */ (function () {
    function MyMap() {
        this.bucket = {};
    }
    MyMap.prototype.hash = function (data) {
        return data.length;
    };
    MyMap.prototype.set = function (key, value) {
        var bucketId = this.hash(key);
        if (bucketId in this.bucket) {
            this.bucket[bucketId].push([key, value]);
        }
        else {
            this.bucket[bucketId] = [[key, value]];
        }
    };
    MyMap.prototype.get = function (key) {
        if (this.hash(key) in this.bucket) {
            var bucketSetByHash = this.bucket[this.hash(key)];
            for (var _i = 0, bucketSetByHash_1 = bucketSetByHash; _i < bucketSetByHash_1.length; _i++) {
                var _a = bucketSetByHash_1[_i], keyInBucket = _a[0], value = _a[1];
                if (keyInBucket === key) {
                    return value;
                }
            }
            return "There is no '".concat(key, "' in set");
        }
        else {
            return "There is no '".concat(key, "' in set");
        }
    };
    MyMap.prototype.delete = function (key) {
        if (this.hash(key) in this.bucket) {
            var bucketSetByHash = this.bucket[this.hash(key)];
            for (var _i = 0, bucketSetByHash_2 = bucketSetByHash; _i < bucketSetByHash_2.length; _i++) {
                var _a = bucketSetByHash_2[_i], keyInBucket = _a[0], value = _a[1];
                if (keyInBucket === key) {
                    var newSet = bucketSetByHash.filter(function (_a) {
                        var setKey = _a[0], setValue = _a[1];
                        return setKey !== key;
                    });
                    this.bucket[this.hash(key)] = newSet;
                    return true;
                }
            }
            return false;
        }
        else {
            return false;
        }
    };
    MyMap.prototype.clear = function () {
        this.bucket = {};
    };
    return MyMap;
}());
var map = new MyMap();
map.set('London', 42);
map.set('Berlin', 13);
map.set('City', 10);
console.log(map.get('London'));
console.log(map.get('City'));
console.log(map.get('Moscow'));
console.log(map.delete('Moscow'));
console.log(map.delete('London'));
console.log(map.get('London'));
map.clear();
map.set('Rome', 35);
console.log(map.get('City'));
console.log(map.get('Rome'));
