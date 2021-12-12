<template>
  <footer>
    <div id="wrapper">
      <div id="social-wrapper">
        <div id="social-row">
          <ul>
            <li><a href="#">social row 1-1</a></li>
            <li><a href="#">social row 1-2</a></li>
            <li><a href="#">social row 1-3</a></li>
            <li><a href="#">social row 1-4</a></li>
          </ul>
        </div>
        <div id="social-row">
          <ul>
            <li><a href="#">social row 2-1</a></li>
            <li><a href="#">social row 2-2</a></li>
            <li><a href="#">social row 2-3</a></li>
            <li><a href="#">social row 2-4</a></li>
          </ul>
        </div>
      </div>
      <div id="copyright">
        Copyright &copy; {{ new Date().getFullYear() }} Skepfusky.<br>Some artworks provided with CC-BY-NA 3.0. Site built entirely on the <a target="_blank" href="https://vuejs.org/"><img src="../assets/img/vue-logo.png" alt="Vue logo">&nbsp;Vue.js framework</a>.
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  @include flex_params();
  width: 100%;
  background: $bamboo-main;
  color: whitesmoke;
  padding-top: .75rem;

  #copyright {
    text-align: center;
  }
}

#wrapper {
  @include flex_params(center, unset, column);
  width: 1280px;
  margin: 0 1rem;
  // background: green;
  padding: .75rem;
}
#social-wrapper {
  @include flex_params(unset, unset, row);
}

#social-row {
  @include flex_params(center, unset, row);
  width: 50%;

  ul {
    @extend %flex_list;
    @include line_spacing();
  }
}

#copyright {
  margin-block: .75rem;
  font-size: 90%;

  img {
    @extend %disable_drag;
    width: 18px;
    position: relative;
    top: 4px;
  }
  a {
    font-weight: bold;
    color: #41b883;
  }
}
</style>