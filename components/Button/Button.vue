<template>
  <button @click="onClick" class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
</script>

<style scoped>
.btn {
  border: "1px solid #eee";
  border-radius: 3;
  background-color: "#FFFFFF";
  cursor: "pointer";
  font-size: 15;
  padding: "3px 10px";
  margin: 10;
}
</style>