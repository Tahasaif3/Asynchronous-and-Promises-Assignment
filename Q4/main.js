// function fetchWithError():Promise<string> {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//         let data = ["ahmed","taha","shahzaib","alamzaib","ashad"];
//         // let data = [];
//         if (Math.random() < 0.5) {
//             resolve("Data Fetched Succefully!")
//         } else {
//         reject(new Error("Data Fetch Failed!"))
//         }
//     },1000);
//     });
// }
// fetchWithError().then((response) => {console.log(response)})
// .catch((Error) => {
//     console.error(Error);
// });
function fetchWithError() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var data = ["ahmed", "ashad", "arbaz", "bilal", "taha"];
            if (Math.random() > 0.5) {
                resolve("Data Fetched Successfully");
            }
            else {
                reject("Data Fetch Failed");
            }
        }, 1000);
    });
}
;
fetchWithError().then(function (resolve) {
    console.log(resolve);
}).catch(function (error) {
    console.log(error);
});
