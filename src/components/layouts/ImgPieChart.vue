<template>
  <pds-visual-embedded>
    <figure>
      <div id="donut-visualize-wrapper" class="flex justify-center">
        <img :src="require(`@/assets/img/${pieImg}`)" :alt="pieAlt" :aria-label="pieAlt" />
        <div id="donut" :style="`--pds-val: ${pieVal}`"></div>
      </div>
      <figcaption>
        {{ caption }}
        <span id="caption_percentage">({{ pieVal }}%)</span>
      </figcaption>
    </figure>
  </pds-visual-embedded>
</template>

<script>
export default {
  props: {
    pieImg: {type: String, default: 'placeholder.png'},
    pieAlt: {type: String, default: 'Placeholder crap'},
    pieVal: {type: Number, default: 50},
    caption: {type: String, default: 'Caption'},
  }
}
</script>