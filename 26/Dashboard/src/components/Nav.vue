<template>
  <div class="flex items-center justify-center bg-skin-normal py-4">
    <div class="relative flex w-[96%] items-center justify-between">
      <div class="w-[7rem]">
        <img src="../assets/images/logo.png" alt="" />
      </div>
      <div
        class="search absolute left-[15vw] flex w-[32vw] items-center gap-4 rounded-small bg-skin-minor px-4 py-[8px]"
      >
        <span class="material-symbols-sharp"> search </span>
        <input
          class="w-full bg-transparent outline-none"
          type="search"
          placeholder="search"
        />
      </div>
      <div class="profile flex items-center justify-between gap-4">
        <div
          class="theme-btn flex h-[2rem] w-[5rem] cursor-pointer items-center justify-center overflow-hidden rounded-base2 bg-skin-minor"
        >
          <span
            class="material-symbols-sharp flex h-full w-[50%] items-center justify-center bg-skin-select1 text-[1.3rem] text-skin-minor"
          >
            light_mode
          </span>
          <span
            class="material-symbols-sharp flex w-[50%] justify-center text-[1.3rem]"
          >
            dark_mode
          </span>
        </div>
        <div class="profile flex items-center justify-center gap-4">
          <div class="profile-photo w-[3rem] overflow-hidden rounded-full">
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
