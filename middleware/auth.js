export default async ({ store, redirect }) => {
    if (!store.state.user.isAuthenticated) {
      return redirect('/admin/login')
    }
  }
  