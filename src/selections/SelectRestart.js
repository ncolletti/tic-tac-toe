import inquirer from 'inquirer';

const SelectRestart = async () => {
       const answer = await inquirer // eslint-disable-line
        .prompt([
            {
                type: 'confirm',
                name: 'restart',
                message: 'Would you like to swap players and restart?',
            },
        ])
        .then((status) => status.restart);
    return answer;
};

export default SelectRestart;
