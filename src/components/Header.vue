<template>
  <header>
    <div class="header-wrapper">
      <div class="logo">
        <img src="@/assets/littlehelp.png" class="logoImg" />
      </div>
      <nav>
        <ul class="nav-list">
          <li class="nav-item" @click="navigateToHome">Home</li>
          <li class="nav-item" @click="navigateToFund">RaiseFund</li>
        </ul>
      </nav>
      <div>
        <ul class="nav-list">
          <li class="nav-item" @click="navigateToLogin">SignIn</li>
          <li class="nav-item" @click="navigateToRegister">Register</li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    navigateToLogin() {
      this.$router.push('/login');
    },
    navigateToHome() {
      this.$router.push('/');
    },
    navigateToRegister() {
      this.$router.push('/register');
    },
    navigateToFund() {
      this.$router.push('/fund');
    }
  }
}
</script>

<style>
header {
  padding: 1rem 0;
  background-color: #fff;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

header .header-wrapper {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
}

header .header-wrapper nav {
  flex: 1;
  padding: 0 2rem;
  padding-right: 10px;

}

ul.nav-list {
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0 2rem;
}

li.nav-item {
  list-style-type: none;
  cursor: pointer;
}

.logoImg {
  height: 4rem;
  padding-left: 10px;
}
</style>