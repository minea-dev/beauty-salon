<template>
  <div>
    <NavigationComponent />
    <router-view />
  </div>
</template>

<script>
import NavigationComponent from '@/components/NavigationComponent'
export default {
   components: {
    NavigationComponent,
  },
  setup() {
    // Create data / vars

    // Check to see if user is already logged in

    // If user does not exist, need to make app ready

    // Runs when there is a auth state change
    // if user is logged in, this will fire

    return {};
  },
};
</script>

