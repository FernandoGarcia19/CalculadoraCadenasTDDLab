function calculate(input) {
    if(input == " "){
        return 0;
    }
    else {
        let sequence = input;
        let delimiterPattern = /,|-/;

        if (input.startsWith("//[")) {
            const endIndex = input.indexOf("]");
            const customDelimiter = input.slice(3, endIndex);
            const escapedDelimiter = customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            delimiterPattern = new RegExp(`${escapedDelimiter}|,|-`);
            sequence = input.slice(endIndex + 1).trim();
        }

        const numeros = sequence
            .split(delimiterPattern)
            .map(Number)
            .filter((num) => num <= 1000);
        const result = numeros.reduce((sum, num) => sum + num, 0);
        return result.toString(); 
    }
}

export default calculate;