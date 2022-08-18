<template>
  <div class="footer">
    <h6>
      Developed by
      <span><a href="https://sohailahmad.netlify.app"> Sohail Ahmad</a></span>
      <i class="fa-brands fa-vuejs"></i>
    </h6>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  bottom: 20px;
  color: #e52e71;
  position: fixed;
}

.footer > h6 > span > a {
  color: white;
  text-decoration: none;
}
.footer > h6 > span > a:hover {
  color: #e52e71;
  text-decoration: none;
}
.fa-vuejs {
  animation: rotation 5s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
}
.fa-vuejs {
  font-size: 18px;
  margin-left: 7px;
}
.fa-vuejs {
  animation: rotation 5s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
}

.footer h6 {
  overflow: hidden;
  border-right: 0.15em solid #3300ff;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #3300ff;
  }
}
</style>
