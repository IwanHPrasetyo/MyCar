import {db} from '../Config';

const getItem = () => {
  return new Promise((resolve, reject) => {
    console.log('jalan jalan');
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM car_inv', [], (err, result) => {
        const rows = result.rows;
        let data = [];
        for (let i = 0; i < rows.length; i++) {
          data.push(rows.item(i));
        }
        console.log('dataa nyaa');
        console.log(data);
        console.log(err);
        resolve(data);
      });
    });
  });
};

export {getItem};
