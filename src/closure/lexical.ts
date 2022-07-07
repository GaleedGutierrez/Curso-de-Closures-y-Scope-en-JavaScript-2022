(() => {
    const myGlobal = 0;

    const myFunction = () => {
        const myNumber = 1;
        console.log(myGlobal);

        const parent = () => { // Función interna
            const inner = 2;
            console.log(myNumber, myGlobal);
            const child = () => {
                console.log(inner, myNumber, myGlobal);
            };
            return child();
        };
        return parent();
    };

    myFunction();
})();
