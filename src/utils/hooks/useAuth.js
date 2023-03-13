

export const useAuth=()=>{
  const token = localStorage.getItem('auth-token')
  if(token){
    return true
  } else {
    return false
  }
}