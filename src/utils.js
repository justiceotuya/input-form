export const isAValidNumber = (number) => (!isNaN(`${number}`) && Number.isInteger(Number(number)))

export const handleEmailValidity = (e) => {
	return e.target.checkValidity() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)
}

export const handlePasswordValidity = (e) => {
	return e.target.checkValidity() && /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/.test(e.target.value)
}
