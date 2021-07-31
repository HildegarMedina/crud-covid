<template>
  <div id="app">
    <Header/>
    <Patients/> 
  </div>
</template>

<script>
  import Header from './Header'
  import Patients from './Patients'
  export default {
    name: 'app',
    components: {
      Header,
      Patients
    },
  }
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<!-- Global CSS -->
<style>
  body, html {
    background: #f7f7f7;
  }
  .bg-primary-custom {
    background: #474787;
  }
  .border-primary-custom {
    border-color: #474787;
  }
  .shadow {
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);
  }
</style>