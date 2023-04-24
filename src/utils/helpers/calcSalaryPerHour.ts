import { IUser } from '../../@types/user';
import { getWorkingDaysPerMonth } from '../../requests/userRequests';

export const calcSalaryPerHour = async (userData: IUser) => {
  const workingDaysCount = await getWorkingDaysPerMonth(userData);
  const { hoursPerDay, salary } = userData;

  const monthWorkingHours = hoursPerDay * workingDaysCount;
  const salaryPerHour = salary / monthWorkingHours;

  return salaryPerHour;
};
