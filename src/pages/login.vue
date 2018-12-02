<template>
  <f7-page no-toolbar no-swipeback login-screen color-theme="pink">
    <f7-navbar title="Login" back-link="Back"></f7-navbar>
    <f7-login-screen-title></f7-login-screen-title>
    <f7-list form>
      <f7-list-input
        label=""
        type="text"
        placeholder="Usuário"
        :value="username"
        @input="username = $event.target.value"
      ></f7-list-input>
      <f7-list-input
        label=""
        type="password"
        placeholder="Senha"
        :value="password"
        @input="password = $event.target.value"
      ></f7-list-input>
    </f7-list>
    <f7-list>
      <f7-list-button @click="">Entrar</f7-list-button>
      <f7-block-footer>Faça o login para utlizar nosso sistema</f7-block-footer>
    </f7-list>
  </f7-page>
</template>

<script>



  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {

    },
  };
</script>
