const temperaturas = [22, 30, 18, 27, 15, 33, 21];

for (let i = 0; i < temperaturas.length; i++) {
    if (temperaturas[i] < temperaturas[2]) {
        console.log(`Temperatura ${temperaturas[i]}°C é a mais baixa.`);
    } else if (temperaturas[i] > temperaturas[1]) {
        console.log(`Temperatura ${temperaturas[i]}°C é a mais alta.`);
    } else {
        // N/A
    }
}