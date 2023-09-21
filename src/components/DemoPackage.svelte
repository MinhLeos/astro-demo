<script lang="ts">
  import { ButtonComponent } from 'minhleo-package-button';
  import ButtonCheck from '../components/ButtonCheck/ButtonCheck.svelte';
  import IconSvelte from './IconSvelte.svelte';

  const handleClickButtonLarge = () => {
    console.log('Large')
  }
  const handleClickButtonMedium = () => {
    console.log('Medium')
  }
  const handleClickButtonSmall = () => {
    console.log('Small')
  }
</script>

<div class="mt-20">
  <!-- Primary -->
  <div class="mb-10 flex items-center justify-center gap-5">
    <ButtonComponent model="primary" size="large" on:click={handleClickButtonLarge}>Primary</ButtonComponent>
    <ButtonComponent model="primary" size="large" pills on:click={handleClickButtonLarge}>Primary</ButtonComponent>
    <ButtonComponent model="primary" size="medium" on:click={handleClickButtonMedium}>Primary</ButtonComponent>
    <ButtonComponent model="primary" size="medium" pills on:click={handleClickButtonMedium}>Primary</ButtonComponent>
    <ButtonComponent model="primary" size="small" on:click={handleClickButtonSmall}>Primary</ButtonComponent>
    <ButtonComponent model="primary" size="small" pills on:click={handleClickButtonSmall}>Primary</ButtonComponent>
  </div>
  <!-- Secondary -->
  <div class="mb-10 flex items-center justify-center gap-5">
    <ButtonComponent model="secondary" size="large" on:click={handleClickButtonLarge}>Secondary</ButtonComponent>
    <ButtonComponent model="secondary" size="large" pills on:click={handleClickButtonLarge}>Secondary</ButtonComponent>
    <ButtonComponent model="secondary" size="medium" on:click={handleClickButtonMedium}>Secondary</ButtonComponent>
    <ButtonComponent model="secondary" size="medium" pills on:click={handleClickButtonMedium}>Secondary</ButtonComponent>
    <ButtonComponent model="secondary" size="small" on:click={handleClickButtonSmall}>Secondary</ButtonComponent>
    <ButtonComponent model="secondary" size="small" pills on:click={handleClickButtonSmall}>Secondary</ButtonComponent>
  </div>
  <!-- Ghost -->
  <div class="mb-10 flex items-center justify-center gap-5">
    <ButtonComponent model="ghost" size="large" on:click={handleClickButtonLarge}>Ghost Button</ButtonComponent>
    <ButtonComponent model="ghost" size="large" pills on:click={handleClickButtonLarge}>Ghost Button</ButtonComponent>
    <ButtonComponent model="ghost" size="medium" on:click={handleClickButtonMedium}>Ghost Button</ButtonComponent>
    <ButtonComponent model="ghost" size="medium" pills on:click={handleClickButtonMedium}>Ghost Button</ButtonComponent>
    <ButtonComponent model="ghost" size="small" on:click={handleClickButtonSmall}>Ghost Button</ButtonComponent>
    <ButtonComponent model="ghost" size="small" pills on:click={handleClickButtonSmall}>Ghost Button</ButtonComponent>
  </div>
  <!-- Primary && Left Icon -->
  <div class="mb-10 flex items-center justify-center gap-5">
    <ButtonComponent model="primary" size="large" on:click={handleClickButtonLarge}>
      Primary
      <div slot="left"><IconSvelte /></div>
    </ButtonComponent>
    <ButtonComponent model="primary" size="large" pills on:click={handleClickButtonLarge}>
      Primary
      <div slot="left"><IconSvelte /></div>
    </ButtonComponent>
    <ButtonComponent model="primary" size="medium" on:click={handleClickButtonMedium}>
      Primary
      <div slot="left"><IconSvelte /></div>
    </ButtonComponent>
    <ButtonComponent model="primary" size="medium" pills on:click={handleClickButtonMedium}>
      Primary
      <div slot="left"><IconSvelte /></div>
    </ButtonComponent>
    <ButtonComponent model="primary" size="small" on:click={handleClickButtonSmall}>
      Primary
      <div slot="left"><IconSvelte /></div>
    </ButtonComponent>
    <ButtonComponent model="primary" size="small" pills on:click={handleClickButtonSmall}>
      Primary
      <div slot="left"><IconSvelte /></div>
    </ButtonComponent>
  </div>
  <!-- Secondary && Right Icon -->
  <div class="mb-10 flex items-center justify-center gap-5">
    <ButtonComponent model="secondary" size="large" on:click={handleClickButtonLarge}>
      Secondary
      <div slot="right"><IconSvelte /></div>
    </ButtonComponent>
    <ButtonComponent model="secondary" size="large" pills on:click={handleClickButtonLarge}>
      Secondary
      <div slot="right"><IconSvelte /></div>
    </ButtonComponent>
    <ButtonComponent model="secondary" size="medium" on:click={handleClickButtonMedium}>
      Secondary
      <div slot="right"><IconSvelte /></div>
    </ButtonComponent>
    <ButtonComponent model="secondary" size="medium" pills on:click={handleClickButtonMedium}>
      Secondary
      <div slot="right"><IconSvelte /></div>
    </ButtonComponent>
    <ButtonComponent model="secondary" size="small" on:click={handleClickButtonSmall}>
      Secondary
      <div slot="right"><IconSvelte /></div>
    </ButtonComponent>
    <ButtonComponent model="secondary" size="small" pills on:click={handleClickButtonSmall}>
      Secondary
      <div slot="right"><IconSvelte /></div>
    </ButtonComponent>
  </div>
  <!-- Ghost && Left and Right Button -->
  <div class="mb-10 flex items-center justify-center gap-5">
    <ButtonComponent model="ghost" size="large" on:click={handleClickButtonLarge}>
      Ghost Button
      <div slot="left"><IconSvelte IcFill="#333" /></div>
      <div slot="right"><IconSvelte IcFill="#333" /></div>
    </ButtonComponent>
    <ButtonComponent model="ghost" size="large" pills on:click={handleClickButtonLarge}>
      Ghost Button
      <div slot="left"><IconSvelte IcFill="#333" /></div>
      <div slot="right"><IconSvelte IcFill="#333" /></div>
    </ButtonComponent>
    <ButtonComponent model="ghost" size="medium" on:click={handleClickButtonMedium}>
      Ghost Button
      <div slot="left"><IconSvelte IcFill="#333" /></div>
      <div slot="right"><IconSvelte IcFill="#333" /></div>
    </ButtonComponent>
    <ButtonComponent model="ghost" size="medium" pills on:click={handleClickButtonMedium}>
      Ghost Button
      <div slot="left"><IconSvelte IcFill="#333" /></div>
      <div slot="right"><IconSvelte IcFill="#333" /></div>
    </ButtonComponent>
    <ButtonComponent model="ghost" size="small" on:click={handleClickButtonSmall}>
      Ghost Button
      <div slot="left"><IconSvelte IcFill="#333" /></div>
      <div slot="right"><IconSvelte IcFill="#333" /></div>
    </ButtonComponent>
    <ButtonComponent model="ghost" size="small" pills on:click={handleClickButtonSmall}>
      Ghost Button
      <div slot="left"><IconSvelte IcFill="#333" /></div>
      <div slot="right"><IconSvelte IcFill="#333" /></div>
    </ButtonComponent>
  </div>
  <!-- Primary Only Icon -->
  <div class="mb-10 flex items-center justify-center gap-5">
    <ButtonComponent onlyIcon model="primary" size="large" on:click={handleClickButtonLarge}>
      <div><IconSvelte /></div>
    </ButtonComponent>
    <ButtonComponent onlyIcon model="primary" size="large" pills on:click={handleClickButtonLarge}>
      <div><IconSvelte /></div>
    </ButtonComponent>
    <ButtonComponent onlyIcon model="primary" size="medium" on:click={handleClickButtonMedium}>
      <div><IconSvelte /></div>
    </ButtonComponent>
    <ButtonComponent onlyIcon model="primary" size="medium" pills on:click={handleClickButtonMedium}>
      <div><IconSvelte /></div>
    </ButtonComponent>
    <ButtonComponent onlyIcon model="primary" size="small" on:click={handleClickButtonSmall}>
      <div><IconSvelte /></div>
    </ButtonComponent>
    <ButtonComponent onlyIcon model="primary" size="small" pills on:click={handleClickButtonSmall}>
      <div><IconSvelte /></div>
    </ButtonComponent>
  </div>
</div>


<!-- <div class="mt-20 flex items-center justify-center gap-5">
  <ButtonComponent size="large" on:click={handleClickButtonLarge}>
    <span>Click Me</span>
  </ButtonComponent>
  <ButtonComponent isDarkMode={true} on:click={handleClickButtonMedium}>
    <span>Click Me</span>
  </ButtonComponent>
  <ButtonComponent size="small" on:click={handleClickButtonSmall} classes="why">
    <span class="cdef">Click Me</span>
  </ButtonComponent>
  <ButtonComponent size="small" url="https://google.com" target="_blank" classes="link-test">
    <span class="abcd">Google</span>
  </ButtonComponent>
  <p>---</p>
  <ButtonCheck classes="test-btn"><p class="test">ha ha ha</p></ButtonCheck>
  <ButtonCheck pills disabled>he he he</ButtonCheck>
  <ButtonCheck pills model="primary">he he he 1</ButtonCheck>
  <ButtonCheck pills model="secondary">he he he 1</ButtonCheck>
  <ButtonCheck pills model="ghost">
    he he he 1
    <div slot="left" class="svg"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#333"><g><path d="M14.8333 10.6667H10.6667V14.8333C10.6667 15.2917 10.2917 15.6667 9.83333 15.6667C9.375 15.6667 9 15.2917 9 14.8333V10.6667H4.83333C4.375 10.6667 4 10.2917 4 9.83333C4 9.375 4.375 9 4.83333 9H9V4.83333C9 4.375 9.375 4 9.83333 4C10.2917 4 10.6667 4.375 10.6667 4.83333V9H14.8333C15.2917 9 15.6667 9.375 15.6667 9.83333C15.6667 10.2917 15.2917 10.6667 14.8333 10.6667Z" fill="#333"></path></g></svg></div>
    <div slot="right" class="svg"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#333"><g><path d="M14.8333 10.6667H10.6667V14.8333C10.6667 15.2917 10.2917 15.6667 9.83333 15.6667C9.375 15.6667 9 15.2917 9 14.8333V10.6667H4.83333C4.375 10.6667 4 10.2917 4 9.83333C4 9.375 4.375 9 4.83333 9H9V4.83333C9 4.375 9.375 4 9.83333 4C10.2917 4 10.6667 4.375 10.6667 4.83333V9H14.8333C15.2917 9 15.6667 9.375 15.6667 9.83333C15.6667 10.2917 15.2917 10.6667 14.8333 10.6667Z" fill="#333"></path></g></svg></div>
  </ButtonCheck>
  <ButtonCheck pills model="ghost">
    <p>he he he 1</p>
    <div slot="left" class="svg"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#333"><g><path d="M14.8333 10.6667H10.6667V14.8333C10.6667 15.2917 10.2917 15.6667 9.83333 15.6667C9.375 15.6667 9 15.2917 9 14.8333V10.6667H4.83333C4.375 10.6667 4 10.2917 4 9.83333C4 9.375 4.375 9 4.83333 9H9V4.83333C9 4.375 9.375 4 9.83333 4C10.2917 4 10.6667 4.375 10.6667 4.83333V9H14.8333C15.2917 9 15.6667 9.375 15.6667 9.83333C15.6667 10.2917 15.2917 10.6667 14.8333 10.6667Z" fill="#333"></path></g></svg></div>
  </ButtonCheck>
</div> -->
<!-- 
  <div class="mb-10 flex items-center justify-center gap-5">
    <ButtonCheck onlyIcon model="primary" size="large" on:click={handleClickButtonLarge}>
      <div><IconSvelte /></div>
    </ButtonCheck>
    <ButtonCheck onlyIcon model="primary" size="large" pills on:click={handleClickButtonLarge}>
      <div><IconSvelte /></div>
    </ButtonCheck>
    <ButtonCheck onlyIcon model="primary" size="medium" on:click={handleClickButtonMedium}>
      <div><IconSvelte /></div>
    </ButtonCheck>
    <ButtonCheck onlyIcon model="primary" size="medium" pills on:click={handleClickButtonMedium}>
      <div><IconSvelte /></div>
    </ButtonCheck>
    <ButtonCheck onlyIcon model="primary" size="small" on:click={handleClickButtonSmall}>
      <div><IconSvelte /></div>
    </ButtonCheck>
    <ButtonCheck onlyIcon model="primary" size="small" pills on:click={handleClickButtonSmall}>
      <div><IconSvelte /></div>
    </ButtonCheck>
  </div>
 -->
<style scoped>
  :global(.why) {
    background-color: #ceab10 !important;
  }
  :global(.test-btn) {
    background-color: #333 !important;
  }
  .test {
    color: #fff;
  }

</style>