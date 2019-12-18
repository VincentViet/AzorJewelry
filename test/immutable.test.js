import { List, Map } from "immutable";

// let list = List(['a', 'b', 'c', 'd', 'e', 'f']);
// list.update(value => {
//    return {
//        key: 'this is key',
//        value: value
//    }
// });
//
// test('test update function in List-Immutable', () =>{
//     list.forEach((value, key) =>{
//         console.log(key, value)
//     });
//
//     expect(list.size).toBe(6)
// });

test('abc', () =>{
    const list = List([ 'a', 'b', 'c' ]);
    const result = list.map((value, key) => {
        return {
            key: key,
            value: value
        }
    });

    result.forEach((value, key)=>{
        console.log(key, value);
    });
});

test('compare string', () =>{
    const list = List([
        'NHACC1',
        'NACC10',
        'NHACC11',
        'NHACC9',
        'NACC12012',
        'NHACC1182'
    ]);
    const pattern = new RegExp('HAC');
    const result = list
        .filter(value => value.match(pattern))
        .map(value => null)
    ;
    console.log(result.toArray())
});

test('map', () =>{
    let map = Map();
    map = map.set('abc', '123');
    map = map.set('xyz', 456);

    console.log(map.valueSeq().toArray())
});