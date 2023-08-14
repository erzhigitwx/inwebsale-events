export const toggleHandler = (isChecked: boolean, setter: (arg: boolean) => void, isPasswordRadio: boolean): void => {
  if(isChecked && !isPasswordRadio) {
    setter(false);
  } else if(isChecked && isPasswordRadio) {
    setter(true);
  }
};