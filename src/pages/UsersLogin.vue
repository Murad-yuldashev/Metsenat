<script scoped></script>

<template>
  <section class="bg-gray-backgroundGray flex items-center justify-center w-full h-screen">
    <div class="max-w-[380px]">
      <img src="/public/images/icon/logometsenat.svg" alt="logo" />
      <div class="bg-white rounded-xl p-8 border border-gray-borderGray shadow-loginShadow mt-12">
        <h1 class="text-2xl font-bold">Kirish</h1>
        <form class="mt-11 flex flex-col gap-y-[22px]">
          <label class="text-sm font-medium">
            LOGIN
            <input
              class="w-full mt-2 border border-gray-borderGray2 bg-gray-backgroundGrayOpacity text-[15px] text-gray-grayOpacity py-3 px-4 rounded-md"
              type="text"
            />
          </label>
          <label class="text-sm font-medium">
            PAROL
            <input
              class="w-full mt-2 border border-gray-borderGray2 bg-gray-backgroundGrayOpacity text-[15px] text-gray-grayOpacity py-3 px-4 rounded-md"
              type="password"
            />
          </label>
          <label class="container-robot w-full py-2.5 px-3 border border-gray-borderGray3 bg-gray-backgroundGray2"
            >I’m not a robot
            <input type="checkbox" />
            <span class="checkmark"></span>
            <div class="text-gray-textGray flex flex-col justify-center items-center">
              <img class="w-[30px] h-[30px] mb-1" src="/public/images/icon/notrobot.svg" alt="notrobot" />
              <span class="text-[10px]">reCAPTCHA</span>
              <span class="text-[8px]">Privacy - Terms</span>
            </div>
          </label>
          <button class="text-[15px] font-medium py-3.5 w-full rounded-md bg-blue-blue1 text-white">Kirish</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container-robot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  position: relative;
  padding-left: 50px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container-robot input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 12px;
  height: 26px;
  width: 26px;
  background-color: #fff;
  border: 2px solid #C1C1C1;
}


/* When the checkbox is checked, add a blue background */
.container-robot input:checked ~ .checkmark {
  background-color: #2196f3;
  border: none;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
  border: none;
}

/* Show the checkmark when checked */
.container-robot input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container-robot .checkmark:after {
  left: 11px;
  top: 6px;
  width: 6px;
  height: 12px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
