<template>
  <div class="main">
    <h1>XHR in iframe</h1>
    <iframe src="https://jsonplaceholder.cypress.io/" data-cy="the-frame"></iframe>
  </div>
</template>
<style scoped>
iframe {
  width: 300%;
  height: 300%;
}
.main{
  position: absolute;
  height: 100%;
}
</style>