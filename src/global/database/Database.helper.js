import Database from './Database';
import dayjs from 'global/day';

const _db = new Database();

const createRow = async today => {
  try {
    let result = await _db.executeSql(
      `SELECT * from info where date = '${today}'`,
    );
    if (!result?.rows?._array?.length) {
      await _db.executeSql(`REPLACE INTO info(date) VALUES ('${today}')`);
    }
  } catch (err) {
    console.log(err);
  }
};

export const syncPerson = async person => {
  try {
    let today = dayjs().format('YYYY-MM-DD');
    let query;
    let {
      dailyGoal,
      weightType,
      gender,
      weight,
      exerciseMinutes,
      dailyGoalType,
      cup,
    } = person;

    await createRow(today);
    query = `UPDATE info SET
    dailyGoal='${dailyGoal}',
    weightType='${weightType}',
    weight='${weight}',
    exerciseMinutes='${exerciseMinutes}',
    gender='${gender}',
    cup='${cup}',
    dailyGoalType='${dailyGoalType}'
    WHERE date='${today}'`;
    await _db.executeSql(query);
  } catch (err) {
    console.log(err);
  }
};

export const syncInformation = async information => {
  try {
    let today = dayjs().format('YYYY-MM-DD');
    let query;
    let { completed } = information;

    await createRow(today);
    query = `UPDATE info SET
      completed='${completed}'
      WHERE date='${today}'`;
    await _db.executeSql(query);
  } catch (err) {
    console.log(err);
  }
};

export const getTableData = async (startDate, endDate, coloums) => {
  try {
    let query;
    query = `SELECT ${coloums.join(',')} from info WHERE date BETWEEN "${startDate}" AND "${endDate}"`;
    let result = await _db.executeSql(query);
    return result?.rows?._array;
  } catch (err) {
    console.log(err);
  }
};

export const dropTable = async () => {
  await _db.executeSql('drop table info');
};
