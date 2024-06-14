// Question # 3
// Write a function fetchData that returns a Promise which resolves with the string
// "Data fetched successfully!" after a delay of 1 second.  resolve("Data Fetched Succesfully")

function fetchData():Promise <string> {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve("Data Fetched Successfully");
        },1000);
    });
};
//use of fetchData function
fetchData().then((resolve) => {console.log(resolve)});
