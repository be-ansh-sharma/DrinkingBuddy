import Database from './Database';
import dayjs from 'global/day';

const _db = new Database();

export const syncNotifications = async notifications => {
  try {
    let today = dayjs().format('DD/MM/YYYY');
    let result = await _db.executeSql(
      `SELECT * from info where date = '${today}'`,
    );

    if (!result?.rows?._array.length) {
      await _db.executeSql(
        'insert into info(date, notifications) VALUES (?,?)',
        [today, notifications.toString()],
      );
    } else {
      await _db.executeSql(
        `update info SET notifications='${notifications.toString()}' where date='${today}'`,
      );
    }
  } catch (err) {
    console.log(err);
  }
};

export const fetchDBNotifications = async () => {
  try {
    let today = dayjs().format('DD/MM/YYYY');
    let result = await _db.executeSql(
      `SELECT * from info where date = '${today}'`,
    );
    if (result?.rows?._array.length) {
      let { notifications } = result?.rows?._array[0];
      return notifications.split(',');
    }
    return [];
  } catch (err) {
    console.log(err);
  }
};

export const syncInformation = async (information, person) => {
  try {
    let today = dayjs().format('DD/MM/YYYY');
    let query;
    let { notifications, completed } = information;
    let {
      dailyGoal,
      weightType,
      gender,
      weight,
      exerciseMinutes,
      dailyGoalType,
      cup,
    } = person;

    if (await rowExist(today)) {
      query = `UPDATE info SET 
        notifications='${notifications}',
        dailyGoal='${dailyGoal}',
        completed='${completed}',
        weightType='${weightType}',
        weight='${weight}',
        exerciseMinutes='${exerciseMinutes}',
        gender='${gender}',
        cup='${cup}',
        dailyGoalType='${dailyGoalType}'
        WHERE date='${today}'`;
    } else {
      query = `insert INTO info(date, notifications, dailyGoal, completed, weightType, gender, weight, exerciseMinutes, dailyGoalType, cup) VALUES 
        ('${today}', '${notifications}', ${dailyGoal}, ${completed}, '${weightType}', '${gender}', ${weight}, ${exerciseMinutes}, '${dailyGoalType}', ${cup})`;
    }
    _db.executeSql(query);
  } catch (err) {
    console.log(err);
  }
};

const rowExist = async today => {
  let result = await _db.executeSql(
    `SELECT * from info where date = '${today}'`,
  );
  return !!result?.rows?._array.length;
};
