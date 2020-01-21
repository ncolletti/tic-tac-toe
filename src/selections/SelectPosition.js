import inquirer from 'inquirer';

const SelectPosition = async (mode, player) => {
       const answer = await inquirer // eslint-disable-line
        .prompt([
            {
                type: 'input',
                name: 'position',
                message: `Player: ${player}. You're turn! Choose a position 1-9`,
                validate(input) {
                    let validNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
                    if (mode === 4) {
                        validNumbers = [...validNumbers, ['10', '11', '12']];
                    }
                    if (!validNumbers.includes(input)) {
                        const end = validNumbers[validNumbers.length - 1];
                        return `You must choose a number from 1 to ${end} only.`;
                    }

                    return true;
                },
            },
        ])
        .then((answers) => answers.position);
    return answer;
};

export default SelectPosition;
