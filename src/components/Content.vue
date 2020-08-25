<template>
  <v-container class="fill-height" fluid>
		Content
	</v-container>
</template>

<script>
export default {
  name: 'Content',
  data() {
    return {
      category: this.$route.params.category
    }
  }
}
</script>