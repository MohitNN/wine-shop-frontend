export default async ({ store, redirect }) => {
    const isAuthenticated = store.state.admin_adminauth.user.isAuthenticated;
    let isAdmin = ""
    if(isAuthenticated) {
         isAdmin  = store.state.admin_adminauth.user.user.role
    }
    if (isAuthenticated  && isAdmin == "admin" ) {
      return redirect('/admin/dashboard')
    } else if(isAuthenticated  && isAdmin == "user") {
      return redirect('/');
    } 
  }