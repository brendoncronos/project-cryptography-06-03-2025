console.log("\n🚀 Demonstrando Hashing...");

require('./hashing');

setTimeout(() => {
    console.log("\n🚀 Demonstrando Criptografia Simétrica...");

    require('./simetrica');
}, 2000);

setTimeout(() => {
    console.log("\n🚀 Demonstrando Criptografia Assimétrica...");

    require('./assimetrica');
}, 4000);
