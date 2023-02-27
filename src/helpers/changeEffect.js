const changeEffect = (name, setName, letters, ATOMICCODE) => {

    let iterations = 1 / 3;
    console.log('lol');

    const interval = setInterval(() => {
        const word = name.split('')
            .map((letter, index) => {
                if (index < iterations) {
                    return ATOMICCODE[index];
                }

                return letters[Math.floor(Math.random() * 26)];
            })
            .join('');
        setName(word);

        if (iterations >= ATOMICCODE.length) clearInterval(interval);

        iterations += 1;
    }, 30);

};

export default changeEffect;