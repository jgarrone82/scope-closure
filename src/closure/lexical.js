const buildCount = (i) => {
    let count = i;
    // Funcion interna
    const displayCount = () => {
        // Se realiza un autoincrement
        console.log(count++);
    }
    return displayCount;
}

const myCount = buildCount(1);
myCount();
myCount();
myCount();

const myOtherCount = buildCount(11);
myOtherCount();
myOtherCount();
myOtherCount();