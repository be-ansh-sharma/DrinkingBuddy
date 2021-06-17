import * as SQLite from 'expo-sqlite';

export default class Database {
  constructor() {
    this.db = SQLite.openDatabase('drinkingBuddy');
    this.db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS info (date TEXT PRIMARY KEY, dailyGoal INT, completed INT, weightType TEXT, gender Text, weight INT, exerciseMinutes INT, dailyGoalType TEXT, cup TEXT,times INT , UNIQUE(date))'
      );
    });
  }

  executeSql = async (sql, params = []) => {
    return new Promise((resolve, reject) =>
      this.db.transaction(tx => {
        tx.executeSql(
          sql,
          params,
          (_, data) => resolve(data),
          (_, error) => reject(error),
        );
      }),
    );
  };
}
