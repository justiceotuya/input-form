export const isAValidNumber = number => (!isNaN(`${number}`) && Number.isInteger(Number(number)));

export const handleEmailValidity = e => e.target.checkValidity() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);

export const handlePasswordValidity = e => e.target.checkValidity() && /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/.test(e.target.value);
