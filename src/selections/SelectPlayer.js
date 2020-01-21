import inquirer from 'inquirer';

const SelectPlayer = async () => {
       const answer = await inquirer // eslint-disable-line
        .prompt([
            {
                type: 'checkbox',
                name: 'playerSelection',
                message: 'Would you like to be X or Y?',
                choices: [
                    {
                        name: 'X',
                    },
                    {
                        name: 'O',
                    },
                ],
                validate(input) {
                    if (input.length < 1) {
                        return 'You must choose at least one.';
                    }

                    if (input.length > 1) {
                        return 'You cannot choose twice.';
                    }

                    return true;
                },
            },
        ])
        .then((answers) => {
            console.log(`You choose ${JSON.stringify(answers.playerSelection[0])}`);
            return answers.playerSelection[0];
        });
    return answer;
};

export default SelectPlayer;
