console.log(" ");
console.log("Identification Header:");
console.log("Yaseen Husain");
console.log("CS31103");
console.log("Week 3");
console.log(" ");

console.log("Runtime Information:");
console.log("Node Version: ", process.version);
console.log("Current Date/Time:", new Date());
console.log(" ");

console.log("Configuration via Environment Variables:");
const port = process.env.PORT || 3000;
console.log("Port:", port);
const environment = process.env.NODE_ENV || "development";
console.log("Node environment:", environment);
console.log(" ");

const appConfig = {
    port: port,
    environment: environment,
    startedAt: new Date ()
};

console.log("Configuration Object");
console.log(JSON.stringify(appConfig, null, 2));
