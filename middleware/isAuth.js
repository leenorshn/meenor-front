export default ({app, error,redirect}) => {
    const hasToken = !!app.$apolloHelpers.getToken()
    if (!hasToken) {
      error({
        errorCode:503, 
        message:'You are not allowed to see this'
      })
      return redirect('/login')
    }
    console.log(hasToken);
  }