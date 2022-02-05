<template>
  <pds-backdrop-waterfall class="flex justify-center">
    <pds-visual-embedded class="flex">
      <div id="pds-horizontal-carousel">
        <div id="carousel-wrapper">
          <img src="@/assets/img/placeholder.png" draggable="false">
          <img src="@/assets/img/placeholder.png" draggable="false">
          <img src="@/assets/img/placeholder.png" draggable="false">
          <img src="@/assets/img/placeholder.png" draggable="false">
          <!--BREAKPOINT-->
          <img src="@/assets/img/placeholder.png" draggable="false">
          <img src="@/assets/img/placeholder.png" draggable="false">
          <img src="@/assets/img/placeholder.png" draggable="false">
        </div>
      </div>
      <div id="pds-horizontal-carousel">
        <div id="carousel-wrapper">
          <img src="@/assets/img/placeholder.png" draggable="false">
          <img src="@/assets/img/placeholder.png" draggable="false">
          <img src="@/assets/img/placeholder.png" draggable="false">
          <img src="@/assets/img/placeholder.png" draggable="false">
          <!--BREAKPOINT-->
          <img src="@/assets/img/placeholder.png" draggable="false">
          <img src="@/assets/img/placeholder.png" draggable="false">
          <img src="@/assets/img/placeholder.png" draggable="false">
        </div>
      </div>
      <div id="pds-horizontal-carousel">
        <div id="carousel-wrapper">
          <img src="@/assets/img/placeholder.png" draggable="false">
          <img src="@/assets/img/placeholder.png" draggable="false">
          <img src="@/assets/img/placeholder.png" draggable="false">
          <img src="@/assets/img/placeholder.png" draggable="false">
          <!--BREAKPOINT-->
          <img src="@/assets/img/placeholder.png" draggable="false">
          <img src="@/assets/img/placeholder.png" draggable="false">
          <img src="@/assets/img/placeholder.png" draggable="false">
        </div>
      </div>
      <div id="pds-horizontal-carousel">
        <div id="carousel-wrapper">
          <img src="@/assets/img/placeholder.png" draggable="false">
          <img src="@/assets/img/placeholder.png" draggable="false">
          <img src="@/assets/img/placeholder.png" draggable="false">
          <img src="@/assets/img/placeholder.png" draggable="false">
          <!--BREAKPOINT-->
          <img src="@/assets/img/placeholder.png" draggable="false">
          <img src="@/assets/img/placeholder.png" draggable="false">
          <img src="@/assets/img/placeholder.png" draggable="false">
        </div>
      </div>
      <div id="pds-horizontal-carousel">
        <div id="carousel-wrapper">
          <img src="@/assets/img/placeholder.png" draggable="false">
          <img src="@/assets/img/placeholder.png" draggable="false">
          <img src="@/assets/img/placeholder.png" draggable="false">
          <img src="@/assets/img/placeholder.png" draggable="false">
          <!--BREAKPOINT-->
          <img src="@/assets/img/placeholder.png" draggable="false">
          <img src="@/assets/img/placeholder.png" draggable="false">
          <img src="@/assets/img/placeholder.png" draggable="false">
        </div>
      </div>
    </pds-visual-embedded>
  </pds-backdrop-waterfall>
</template>

<style lang="scss">
pds-backdrop-waterfall {
  margin-bottom: 2rem;

  > pds-visual-embedded {
    margin: 0 auto;
    width: 1850px;
  }
}
#pds-horizontal-carousel {
  scrollbar-width: none;
  position: relative;
  // background: red;
  height: 600px;
  width: 400px;
  max-width: 400px;
  overflow: hidden;
  overflow-y: auto !important;
  pointer-events: none;
}

#carousel-wrapper {
  position: absolute;
  inset: 0 auto auto auto;
  // animation: lookAtItGo 11s linear 1s infinite;

  img {
    width: 100%;
    padding: 0 0.75rem;
  }
}

@keyframes lookAtItGo {
  100% { top: -1467.03px; }
}
</style>