export default ({app, error,redirect}) => {
    const hasToken = !!app.$apolloHelpers.getToken()
    if (!hasToken) {
      return redirect('/login')
    }else{
      console.log(hasToken);
      //return redirect("/")
    }
    
  }