    //1. Assigning a function to a variable
    const car = () => {
        console.log("Car is parking");
    };
    car();
    
    
    //2. Passing a function as an argument
    function sayHello() {
        return "Hello, ";
    }
    function greeting(helloMessage, name) {
        console.log(helloMessage() + name);
    }
    greeting(sayHello, "JavaScript!");  // Hello, JavaScript!
    
    
    //3. Returning a function
    function hello() {
        return () => {
            console.log("Hello!");
        };
    }
