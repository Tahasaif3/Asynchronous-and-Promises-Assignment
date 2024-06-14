// function fetchData():Promise <string> {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//          resolve("Data Fetched Succesfully")
//         },1000);
//     });
// };
// //usage
// fetchData().then((resolve) => {console.log(resolve)});
function fetchData() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Data Fetched Succesfully!");
        }, 1000);
    });
}
;
fetchData().then(function (resolve) { console.log(resolve); });
