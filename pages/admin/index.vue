<template>  
  <NuxtChild />
</template>

<script>
export default {
  middleware({ route, redirect, from }) {
    if(route.path == "/admin" || route.path == "/admin/"){
     return redirect("/admin/login")
    }

  }
}
</script>