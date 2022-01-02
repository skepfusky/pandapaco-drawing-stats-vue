<template>
  <footer>
    <div id="wrapper">
      <div id="social-wrapper">
        <div id="social-row">
          <ul>
            <li><a href="#"><i class="fab fa-youtube"></i><span>YouTube</span></a></li>
            <li><a href="#"><i class="fab fa-github"></i><span>GitHub</span></a></li>
            <li><a href="#"><i class="fab fa-twitter"></i><span>Twitter</span></a></li>
            <li><a href="#"><i class="fab fa-instagram"></i><span>Instagram</span></a></li>
          </ul>
        </div>
        <div id="social-row">
          <ul>
            <li><a href="#"><i class="fab fa-youtube"></i><span>YouTube</span></a></li>
            <li><a href="#"><i class="fab fa-github"></i><span>GitHub</span></a></li>
            <li><a href="#"><i class="fab fa-twitter"></i><span>Twitter</span></a></li>
            <li><a href="#"><i class="fab fa-instagram"></i><span>Instagram</span></a></li>
          </ul>
        </div>
      </div>
      <div id="copyright">
        Copyright &copy; {{ new Date().getFullYear() }} Skepfusky.<br />Some
        artworks provided with CC-BY-NA 3.0. Site built entirely on the
        <a target="_blank" href="https://vuejs.org/">Vue.js framework</a>.
        <!-- Copyright &copy; {{ new Date().getFullYear() }} Skepfusky.<br>Some artworks provided with CC-BY-NA 3.0. Site built entirely on the <a target="_blank" href="https://vuejs.org/"><img src="../assets/img/vue-logo.png" alt="Vue logo">&nbsp;Vue.js framework</a>. -->
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
footer {
  @include p-flexy();
  width: 100%;
  background: $bamboo-main;
  color: whitesmoke;
  padding-top: 0.75rem;
  #copyright {
    text-align: center;
  }
}

#wrapper {
  @include p-flexy(center, unset, column);
  width: 1280px;
  margin: 0 1rem;
  // background: green;
  padding: 0.75rem;
}

#social {
  &-wrapper {
    @include p-flexy(unset, unset, row);
  }

  &-row {
    @include p-flexy(center, unset, row);
    width: 50%;

    ul {
      @include flex_list;
      column-gap: 15px;
    }

    li {
      display: flex;
    }
    span {
      margin-left: 5px;
    }
  }
}

#copyright {
  margin-block: 0.75rem;
  font-size: 90%;

  img {
    @include disable_drag;
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