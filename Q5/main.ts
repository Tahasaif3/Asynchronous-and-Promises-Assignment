// Question # 5
// Write a function executeSequentially that executes two functions fetchData and
// processData sequentially using Promises, and logs the results in the order they are
// called.

function fetchData() {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            let data = "Data Fetched";
            console.log(data);
            resolve(data)
        }, 1000);
    })
};

function processData(data) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(`Processed ${data}`);
            resolve(processData)
        }, 1000);
    })
};

function executeSubsequentially() {
    fetchData().then((data) => processData(data))
    .then ((result) => {
        console.log("Execution Completed!");
    }).catch((Error) => {
        console.log(Error);
    })
}
executeSubsequentially();





