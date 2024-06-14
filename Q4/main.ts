// Question 4
// Write a function fetchWithError that returns a Promise. It should randomly either
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
// delay of 1 second. Handle the rejection using .catch

function fetchWithError():Promise<string> {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
        let data = ["ahmed","taha","shahzaib","alamzaib","ashad"];// Data Fetch Succesfully;
        // let data = []; // Data Fetch  Failed
        if (Math.random() < 0.5) {
            resolve("Data Fetched Succefully!")
        } else {
           reject(new Error("Data Fetch Failed!"))
        }
    },1000);
    });
}

fetchWithError().then((response) => {console.log(response)})
.catch((Error) => {console.error(Error);});
