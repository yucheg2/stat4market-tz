<template>
  <aside class="aside-menu">
    <div>
      <div class="logo">
        <LogoIcon />
        <span class="logo__title">Stat<b>4</b>Market</span>
      </div>
      <nav class="aside-menu__navigation">
        <a class="aside-menu__link" href="#">
          <SetupIcon />
          <span>Мой склад</span>
        </a>
      </nav>
    </div>
    <div class="aside-menu__bottom">
      <div class="aside-menu__socials">
        <a class="social-link" href="#">
          <TelegramIcon />
        </a>
        <a class="social-link" href="#">
          <InstagramIcon />
        </a>
        <a class="social-link" href="#">
          <VkIcon />
        </a>
      </div>
      <a class="partners-link" href="#"> Партнёрская программа</a>
    </div>
  </aside>
</template>

<script setup lang="ts">
import LogoIcon from "../assets/icons/logo.svg";
import SetupIcon from "../assets/icons/setup.svg";
import TelegramIcon from "../assets/icons/telegram.svg";
import InstagramIcon from "../assets/icons/instagram.svg";
import VkIcon from "../assets/icons/vk.svg";
</script>

<style lang="scss">
.aside-menu {
  box-sizing: border-box;
  height: 100vh;
  width: 240px;
  padding: 24px 22px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: var(--aside-bg-color);

  font-weight: 700;
  color: var(--white-color);

  &__link {
    display: flex;
    align-items: center;

    padding: 12px 0;
    gap: 16px;
  }

  &__bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  &__socials {
    display: flex;
    justify-content: center;
    gap: 24px;
  }

  .logo {
    display: flex;
    gap: 8px;
    align-items: center;

    font-size: 16px;
    line-height: 19.2px;

    margin-bottom: 24px;

    b {
      color: var(--pink-color);
    }
  }
}
</style>
