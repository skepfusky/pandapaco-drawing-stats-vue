<template>
  <header>
    <nav>
      <ul>
        <li><a href="#">Stuff baby</a></li>
        <li><a href="#">Stuff baby</a></li>
        <li><a href="#">Stuff baby</a></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
@import '../assets/scss/mixins.scss';

nav {
  @include liMenuSpacing(15px);
  ul {
    @include flexParams(center, unset, row);
  }
}
</style>