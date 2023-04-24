/* eslint-disable no-return-assign */
import axios from 'axios';

import { IUser } from '../@types/user';

const BASE_URL = 'https://isdayoff.ru/api/';

export const getWorkingDaysPerMonth = async (userData: IUser): Promise<number> => {
  const { year, month } = userData;
  const formatedMonth = month < 10 ? `0${month}` : month;

  let workingDaysCount = 0;
  try {
    const { data } = await axios.get<string>(
      `${BASE_URL}getdata?year=${year}&month=${formatedMonth}`
    );

    // 1 - нерабочий
    // 0 - рабочий
    data.split('').forEach((value) => Number(value) === 0 && (workingDaysCount += 1));
  } catch (error) {
    console.error(error);
  }

  return workingDaysCount;
};
