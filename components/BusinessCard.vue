<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'
import type { CoffeeHouse } from '@/types'

withDefaults(
  defineProps<{
    business: CoffeeHouse
  }>(),
  {},
)
</script>

<template>
  <div class="">
    <div>
      <p>thi is a business card</p>
    </div>
  </div>
</template>

<style>
  .image-container {
    position: relative;
    display: inline-block;
    margin-right: 10px;
  }

  .has-overlay {
    margin-right: 0;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
  }

  .icon {
    font-size: 30px;
    margin-bottom: 10px;
  }

  .read-more {
    font-size: 18px;
    text-decoration: none;
  }

  .image {
    height: 160px;
    width: 160px;
    cursor: pointer;
    border-radius: 5px;
    object-fit: cover;
  }
</style>
