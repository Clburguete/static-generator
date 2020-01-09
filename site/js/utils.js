import { tns } from "./../../../node_modules/tiny-slider/src/tiny-slider";

export const instanceClass = (cssClass, jsClass) => {
  const elements = [...document.getElementsByClassName(cssClass)];

  !!elements.length && elements.forEach(el => {
    if(cssClass === 'js-slider') {
      return instanceSlider(cssClass);
    }

    const instancedClass = new jsClass(el);
    instancedClass.init();
  })
}