<template>
  <div class="py-4 flex justify-center items-center bg-skin-base">
    <div class="flex justify-between items-center relative w-[96%]">
      <div class="w-[7rem]">
        <img src="../assets/images/logo.png" alt="" />
      </div>
      <div
        class="search flex items-center absolute w-[32vw] left-[15vw] bg-skin-base1 gap-4 px-4 py-[8px] rounded-base2"
      >
        <span class="material-symbols-sharp"> search </span>
        <input
          class="bg-transparent w-full outline-none"
          type="search"
          placeholder="search"
        />
      </div>
      <div class="profile flex justify-between items-center gap-4">
        <div
          class="theme-btn w-[5rem] h-[2rem] bg-skin-base1 rounded-base2 flex items-center justify-center overflow-hidden cursor-pointer"
        >
          <span
            class="material-symbols-sharp w-[50%] h-full text-[1.3rem] flex justify-center items-center bg-skin-dark text-skin-base"
          >
            light_mode
          </span>
          <span
            class="material-symbols-sharp w-[50%] flex justify-center text-[1.3rem]"
          >
            dark_mode
          </span>
        </div>
        <div class="profile flex justify-center items-center gap-4">
          <div class="profile-photo w-[3rem] rounded-full overflow-hidden">
            <img src="../assets/images/profile.jpg" alt="" />
          </div>
          <h5>Yunis</h5>
          <span class="material-symbols-sharp"> expand_more </span>
        </div>
        <button id="menu-btn" class="hidden">
          <span class="material-symbols-sharp"> menu </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
