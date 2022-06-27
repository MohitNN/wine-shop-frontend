export default async ({ store, redirect }) => {
    const isAuthenticated = store.state.admin_adminauth.user.isAuthenticated;
    let isAdmin = ""
    if(isAuthenticated) {
         isAdmin  = store.state.admin_adminauth.user.user.role
    }
    if (isAuthenticated  && isAdmin ) {
      return redirect('/admin/dashboard')
    } 
  }