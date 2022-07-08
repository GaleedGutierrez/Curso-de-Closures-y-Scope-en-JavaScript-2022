// const moneyBox = (coins: number) => {
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`Money Box: ${saveCoins}`);
// };

// moneyBox(5);
// moneyBox(5);

const moneyBox = (): (coins: number) => void => {
    let saveCoins = 0;

    const countCoins = (coins: number): void => {
        saveCoins += coins;
        console.log(`Money Box: $${saveCoins}`);
    };

    return countCoins;
};

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxAnna = moneyBox();
moneyBoxAnna(10);
moneyBoxAnna(20);
moneyBoxAnna(5);
