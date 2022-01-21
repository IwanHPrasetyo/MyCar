import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({
  name: 'mycar_db.db',
  createFromLocation: '~mycar_db.db',
});

export {db};
