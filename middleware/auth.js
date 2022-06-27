export default async ({ store, redirect }) => {
  const isAuthenticated = store.state.admin_adminauth.user.isAuthenticated;
  let isAdmin = ""
    if(isAuthenticated) {
         isAdmin  = store.state.admin_adminauth.user.user.role
    }
  console.log(isAuthenticated,isAdmin)
  if (!isAuthenticated && !isAdmin ) {
    return redirect('/admin/login')
  }
}