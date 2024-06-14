// Question # 1

// Write a simple asynchronous TypeScript function fetchGreeting that returns a
// greeting message after a 2-second delay using setTimeout.

// simple asynchronous TypeScript function fetchGreetinG
function fetchGreeting(name:string):Promise <string> {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(`Wellcome ${name} How are you!`)
        }, 2000);
    })
};

// Using the fetch greeting function
async function greet(name:string) {
    const greeting = await fetchGreeting(name);
    console.log(greeting);
};
greet("Taha")// returns Wellcome Taha How are you!
