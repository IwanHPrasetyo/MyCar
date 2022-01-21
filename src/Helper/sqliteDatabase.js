import {db} from '../Config';

const getItem = isMenu => {
  return new Promise((resolve, reject) => {
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
        resolve(data);
      });
    });
  });
};

const addItem = data => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO car_inv (bahanbakar, body, model, msrp, negara, pintu, versi) VALUES (?,?,?,?,?,?,?)',
        [
          data.bahanbakar,
          data.body,
          data.model,
          data.msrp,
          'Japan',
          data.pintu,
          data.versi,
        ],
        (err, result) => {
          resolve(result);
        },
      );
    });
  });
};

export {getItem, addItem};
