import { IUser } from '../../@types/user';

export const validateUserForm = (formData: IUser): boolean => {
  const { hoursPerDay, name, salary, year } = formData;

  if (hoursPerDay < 0 || hoursPerDay > 24) return false;
  if (!name.length) return false;
  if (salary < 0) return false;

  if (year < 0 || year < 1000) return false;

  return true;
};
