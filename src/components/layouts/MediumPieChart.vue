<template>
  <pds-visual-embedded id="pds-donut-mediums">
    <figure>
      <div id="donut-visualize-wrapper" class="flex justify-center">
        <div id="donut" :style="`--pds-val: ${traditionalNo}`"></div>
      </div>
      <figcaption>
        <ul class="flex justify-center no-bullet">
          <li style="color: var(--pds-bar-digital);"><strong>{{digitalNo}}%</strong> digital</li>
          <li style="color: var(--pds-bar-traditional);"><strong>{{traditionalNo}}%</strong> traditional</li>
        </ul>
      </figcaption>
    </figure>
  </pds-visual-embedded>
</template>

<script>
export default {
  props: {
    pieImg: {type: String, default: 'placeholder.png'},
    pieAlt: {type: String, default: 'Placeholder crap'},
    digitalNo: {type: Number, default: 40},
    traditionalNo: {type: Number, default: 60},
    caption: {type: String, default: 'Caption'},
  }
}
</script>