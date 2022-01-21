import {db} from '../Config';

const getItem = isMenu => {
  return new Promise((resolve, reject) => {
    console.log('ismenu');
    console.log(isMenu);
    const query =
      isMenu == 'All'
        ? 'SELECT * FROM car_inv'
        : `SELECT * FROM car_inv WHERE body = '${isMenu}'`;

    db.transaction(tx => {
      tx.executeSql(query, [], (err, result) => {
        const rows = result.rows;
        let data = [];
        for (let i = 0; i < rows.length; i++) {
          data.push(rows.item(i));
        }
        console.log(data);
        resolve(data);
      });
    });
  });
};

export {getItem};
