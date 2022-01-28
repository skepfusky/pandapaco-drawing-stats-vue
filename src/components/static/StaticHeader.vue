<template>
  <header>
    <router-link to="/">
      <img src="" :alt="altLabel" :aria-label="altLabel">
    </router-link>
    <ul>
      <li>
        <router-link to="/browse">Browse</router-link>
        <!--Make this repsonsive by setting column on small screens-->
        <div id="dropdown">
          <div id="dropdown_content">
            <h3>In chronological order</h3>
            <router-link to="/year/2022" class="btn">2022</router-link>
            <router-link to="/year/2021" class="btn">2021</router-link>
            <router-link to="/year/2020" class="btn">2020</router-link>
            <router-link to="/year/2019" class="btn">2019</router-link>
            <router-link to="/year/2018" class="btn">2018</router-link>
            <router-link to="/year/2017" class="btn">2017</router-link>
            <router-link to="/year/2016" class="btn">2016</router-link>
            <router-link to="/year/2015" class="btn">2015</router-link>
            <router-link to="/year/2014" class="btn">2014</router-link>
            <router-link to="/year/2013" class="btn">2013</router-link>
            <router-link to="/year/2012" class="btn">2012</router-link>
            <router-link to="/year/2011" class="btn">2011</router-link>
            <router-link to="/year/2010" class="btn">2010</router-link>
            <router-link to="/year/2009" class="btn">2009</router-link>
            <router-link to="/year/2008" class="btn">2008</router-link>
            <router-link to="/year/2007" class="btn">2007</router-link>
          </div>
          <div id="dropdown_content">
            <!--By species-->
          </div>
          <div id="dropdown_content">
            <!--By expression-->
          </div>
        </div>
      </li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'StaticHeader',
  data() {
    return {
      altLabel: 'Site logo'
    }
  }
}
</script>

<style lang="scss">
#dropdown {
  @extend .flex;
}
</style>