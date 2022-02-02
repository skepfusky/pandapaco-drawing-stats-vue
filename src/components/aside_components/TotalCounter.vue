<template>
  <h4>{{charDrawnLabel}}</h4>
  <strong>{{charDrawn}}</strong>
  <pds-medium-bar aria-valuemin="0" :aria-valuenow="digitalNo" aria-valuemax="100" >
    <div id="pds-bar-wrapper" class="flex">
      <div id="pds-md-digital" :style="`width:${digitalNo}%`"></div>
      <div id="pds-md-traditional" :style="`width:${traditionalNo}%`"></div>
    </div>
  </pds-medium-bar>
  <ul id="pds-md-lower-third" class="flex justify-center no-bullet">
    <li style="color: var(--bar-digital)"><strong>{{ digitalNo }}%</strong> of digital art</li>
    <li style="color: var(--bar-traditional)"><strong>{{ traditionalNo }}%</strong> of traditional art</li>
  </ul>
</template>

<script>
export default {
  props: {
    digitalNo: {type: Number},
    traditionalNo: {type: Number},
    charDrawn: { type: Number, default: 100 },
  },
  data() {
    return {
      charDrawnLabel: 'Total character(s) drawn',
    }
  }
}
</script>