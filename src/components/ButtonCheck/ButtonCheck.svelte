<script>
    import { createEventDispatcher } from "svelte";
    export let classes = "";
    export let disabled = false;
    export let style = "";
    export let type = 'button';
    export let idButton = '';
    export let ariaLabel = "";
    export let role = null;
    export let ariaChecked = null;
	  export let ariaSelected = null;
	  export let ariaControls = null;
	  export let tabIndex = null;
    export let size = 'medium'; //: 'small' | 'medium' | 'large' | 'icon'
    export let isRippleDark = false;
    export let model = ''; // 'primary' | 'secondary' | 'ghost'
    export let pills = false;
    export let onlyIcon = false;

    $: rippleColor = isRippleDark || model === 'ghost' ? '#333' : '#f2f2f2';
    $: customClass = `btn ${size} ${model} ${onlyIcon ? 'only-icon' : ''} ${pills ? 'pills' : ''} ${classes}`;
    let component;

    function addRippleEffect(event) {
      const button = event.currentTarget;
      const ripple = document.createElement("span");
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;

      ripple.style.width = ripple.style.height = `${diameter}px`;
      const rect = event.target.getBoundingClientRect();

      console.log('radius', radius);
      console.log('`${event.clientX - rect.left - radius}px`', `${event.clientX - rect.left - radius}px`);
      console.log('`${event.clientY - rect.top - radius}px`', `${event.clientY - rect.top - radius}px`);

      button.style.position = 'relative';
      button.style.overflow = 'hidden';
      ripple.style.left = `${event.clientX - rect.left - radius}px`;
      ripple.style.top = `${event.clientY - rect.top - radius}px`;

      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.position = 'absolute';
      ripple.style.borderRadius = '50%';
      ripple.style.transform = 'scale(0)';
      ripple.style.backgroundColor = rippleColor;
      ripple.style.animation="ripple 0.6s linear"

      ripple.classList.add('ripple');

      const rippleContainer = event.target;
      rippleContainer.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 700);
    }

    const dispatch = createEventDispatcher();
    const dispatchEvent = (e) => {
      if (disabled) return;
      addRippleEffect(e);
      if(idButton){
        dispatch("click",{
            id : idButton
        });
      }
      else{
        dispatch("click");
      }
    }
</script>

<button
		bind:this={component}
		{role}
		aria-checked={ariaChecked}
		aria-selected={ariaSelected}
		aria-controls={ariaControls}
		type={type}
		{disabled}
		{style}
		on:click={dispatchEvent}
		class={customClass}
		id={idButton}
		aria-label={ariaLabel}
    tabindex={tabIndex}
	>
		<div class="btn-slot">
      <slot name="left" />
      <slot>
        <p>Button</p>
      </slot>
      <slot name="right"/>
    </div>
</button>
<style lang="scss" scoped>
	.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 0.25rem;
    background-color: #fff;
    color: #333;
    border-width: 2px;
    border-color: transparent;
    cursor: pointer;
		box-shadow:
			0 0 0 1px rgba(70, 79, 96, 0.16),
			0 1px 1px 0 rgba(0, 0, 0, 0.1);

    &:hover {
			box-shadow:
				0 0 0 1px rgba(70, 79, 96, 0.32),
				0 1px 1px 0 rgba(0, 0, 0, 0.1);
		}
		&:active {
			border-color: #2A363E;
			box-shadow:
				0 0 0 2px #fff,
				0 0 0 4px #aaafb2;
		}
    &:disabled {
      box-shadow: 0px 0px 0px 2px rgba(223, 224, 226, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.1);
      border-color: transparent;
      cursor: auto;
    }

    &.primary {
      color: #fff;
      background-color: #2648D4;

      &:hover {
        background-color: #3858DB;
      }
      &:active {
        border-color: #4E6ADF;
        background-color: #4E6ADF;
        box-shadow: 0px 0px 0px 2px #FFFFFF, 0px 0px 0px 4px #2648D466, 0px 0px 0px 2px #2648D4 inset;
      }
    }

    &.secondary {
      color: #fff;
      background-color: #222325;

      &:hover {
        background-color: #36373A;
      }
      &:active {
        border-color: #36373A;
        background-color: #36373A;
        box-shadow: 0px 0px 0px 2px #FFFFFF, 0px 0px 0px 4px #2A363E66, 0px 0px 0px 2px #000000 inset;
      }
    }

    &.ghost {
      color: #494B50;
      background-color: #fff;

      &:hover {
        box-shadow: 0px 0px 0px 1px rgba(70, 79, 96, 0.32), 0px 1px 1px 0 rgba(0, 0, 0, 0.1);
      }
      &:active {
        box-shadow: 0px 0px 0px 2px #FFFFFF, 0px 0px 0px 4px #2A363E66, 0px 0px 0px 2px #2A363E inset;
      }
    }

		&.pills {
			border-radius: 64px;
		}

		&.large {
      padding: 12px 20px;

      &.only-icon {
        padding: 10px;
      }
		}

		&.medium {
      padding: 8px 16px;

      &.only-icon {
        padding: 8px;
      }
		}

		&.small {
      padding: 4px 8px;

      &.only-icon {
        padding: 6px;
      }
		}

    &-slot {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
    }
	}
</style>