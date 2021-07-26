export function noUiSliderMy() {
   let sliderNouI = document.querySelector('.price-slider__slider');
   if (sliderNouI) {
      noUiSlider.create(sliderNouI, {
         start: [100000, 500000],
         connect: true,
         step: 1,
         range: {
            'min': [0],
            'max': [2000000]
         }
      });

      let noUiInput0 = document.querySelector('.price-slider__input_0');
      let noUiInput1 = document.querySelector('.price-slider__input_1');
      let inputs = [noUiInput0, noUiInput1];

      sliderNouI.noUiSlider.on('update', function (values, handle) {
         inputs[handle].value = Math.round(values[handle]);
      });

      let setRangeSlider = (i, value) => {
         let arr = [null, null];
         arr[i] = value;

         sliderNouI.noUiSlider.set(arr);
      };

      inputs.forEach((el, index) => {
         el.addEventListener('change', (e) => {
            setRangeSlider(index, e.currentTarget.value)
         });
      });
   }
}