type Bucket = {
    [key: number]: [string, number][];
  };

class MyMap {
    private bucket: Bucket = {};

    private hash(data: string): number {
        return data.length;
    }

    public set(key: string, value: number): void {
        const bucketId = this.hash(key);
        if(bucketId in this.bucket) {
            this.bucket[bucketId].push([key,value]);
        } else {
            this.bucket[bucketId] = [[key,value]];
        }
    }

    public get(key: string): number | string {
        if(this.hash(key) in this.bucket) {
            const bucketSetByHash = this.bucket[this.hash(key)];
            for(let [keyInBucket, value] of bucketSetByHash) {
                if(keyInBucket === key) {
                    return value;
                }
            }
            return `There is no '${key}' in set`;
        } else {
            return `There is no '${key}' in set`;
        }
    }

    public delete(key: string): boolean {
        if(this.hash(key) in this.bucket) {
            const bucketSetByHash = this.bucket[this.hash(key)];
            for(let [keyInBucket, value] of bucketSetByHash) {
                if(keyInBucket === key) {
                    const newSet = bucketSetByHash.filter(([setKey, setValue]) => setKey !== key);
                    this.bucket[this.hash(key)] = newSet;
                    return true;
                }
            }
            return false;
        } else {
            return false;
        }
    }

    public clear():void {
        this.bucket = {};
    }
}
const map = new MyMap();
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
