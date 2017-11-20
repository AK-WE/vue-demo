// export default {
//     date(time){
//         let date = new Date(time);
//         return `${ date.getFullYear() }-${ date.getMonth() + 1 }-${ date.getDate() }`;
//     }
// }

export default function dateFilter(time){
    let date = new Date(time);
    return `${ date.getFullYear() }-${ date.getMonth() + 1 }-${ date.getDate() }`;
}