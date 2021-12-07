<template>
  <footer>
    <div id="wrapper">
      <div id="social-wrapper">
        <div id="social-row">
          <ul>
            <li><a href="#">social stuff here</a></li>
            <li><a href="#">social stuff here</a></li>
            <li><a href="#">social stuff here</a></li>
            <li><a href="#">social stuff here</a></li>
          </ul>
        </div>
        <div id="social-row">
          <ul>
            <li><a href="#">social stuff here</a></li>
            <li><a href="#">social stuff here</a></li>
            <li><a href="#">social stuff here</a></li>
            <li><a href="#">social stuff here</a></li>
          </ul>
        </div>
      </div>
      <div id="copyright">
        Copyright &copy; Skepfusky.<br>Some artworks provided with CC-BY-NA 3.0.<br>Site built entirely on the Vue.js framework.
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  @include flex_params();
  width: 100%;
  #copyright {
    text-align: center;
    width: 100%;
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
  width: 50%;
}
</style>