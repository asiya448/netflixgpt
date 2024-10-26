export const checkValidation = (email, password) => {
    const emailValid = /^[^@]+@[^@]+\.[^@]+$/.test(email);
    const passwordValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);

    if (!emailValid) return 'Email id not valid';
    if (!passwordValid) return 'Password is not valid';

    return null;
}