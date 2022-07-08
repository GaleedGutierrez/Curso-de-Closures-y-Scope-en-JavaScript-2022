const greeting = () => {
    const username = 'Galeed';

    const displayUsername = () => {
        return `Hello ${username}`;
    };

    return displayUsername;
};

const g = greeting();

console.log(g);
console.log(g());

