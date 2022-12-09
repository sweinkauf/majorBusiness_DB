const inquirer= require('inquirer');

function main() {
inquirer

    .prompt([
        {
        type: 'list',
        message: 'What would you like to do?',
        name: 'action',
        choices: [
            "view all dept",
            "view all employee",
            "view all roles",  
            'add a department', 
            'add a role', 
            'add an employee', 
            'update an employee role'
        ]
        }
       
    ]) .then((data)=>{
        console.log(data)
        main()
    })
    
};
main();