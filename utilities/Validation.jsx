//Authentication function for SignUpPage
export const signupvalid=(email,password)=>{
  const isEmailValid= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

  if(!isEmailValid) return ("Your E-mail Id isn't Valid")
  if(!isPasswordValid) return ("Enter valid PassWord")

  return(null)
}
//Authentication function for SignInPage
export const signinvalid=(email,password)=>{
  const isEmailValid= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

  if(!isEmailValid) return ("Your E-mail Id isn't Valid")
  if(!isPasswordValid) return ("Enter valid PassWord")

  return(null)
}