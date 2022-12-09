
function newEmployee(employee_name) {

    const sql = `INSERT INTO employees (employee_name)
    VALUES (?)`;
    const params = [employee_name];

    db.query(sql, params, (err, result) => {
        if (err) {
            console.log(err)
            process.exit(1);
        }
       console.table(result)
    })
}