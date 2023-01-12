// import { compose, join, filter, isBoolean, isNil, flatten } from 'lodash/fp'

// type Cx = (...a: Array<undefined | null | string | boolean>) => string

// function compose<T>(...functions: Array<(arg: T) => T>) {
//     return (arg: T) => functions.reduceRight((composed, fn) => fn(composed), arg);
// }
// function filter<T>(arr: T[], callback: (arg: T) => boolean): T[] {
//     return arr.reduce((acc: T[], current: T) => {
//         if (callback(current)) {
//             acc.push(current);
//         }
//         return acc;
//     }, []);
// }
// function isBoolean(value: any): boolean {
//     return value instanceof Boolean || typeof value === 'boolean';
// }
// function join(separator: string = ','): string {
//     return items.join(separator);
// }
// // function filter<T>(arr: T[], callback: (arg: T) => boolean): T[] {
// //     return arr.filter(callback);
// // }

// const cx: Cx = (...args) =>
//   compose(join(' '), filter(isBoolean), filter(isNil), flatten)(args)
