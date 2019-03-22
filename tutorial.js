const sum   =(a,b) => a+b;
const PI =3.14;
class SomeMathObject{
    constructor(){
        console.log('Obj created');
    }
}
/*module.exports.sum = sum;
module.exports.PI = PI;
module.exports.SomeMathObject = SomeMathObject
OR
export const sum = sum;
export const PI = PI;
export const SomeMathObject = SomeMathObject;
OR
module.exports = { sum:sum,PI:PI, SomeMathObject:SomeMathObject};
OR
const _sum = sum;
export { _sum as sum };

*/
exports = { sum : sum ,PI:PI, SomeMathObject:SomeMathObject};

