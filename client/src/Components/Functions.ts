const revealFunction = (classeViser: any, classeAjouter: any) => {
  const anim: any = document.getElementsByClassName(classeViser);
  let duration: number = 0;
  for (let i = 0; i < anim.length; i++) {
    setTimeout(() => {
      if (anim[i]) {
        anim[i].classList.add(classeAjouter);
        anim[i].style.opacity = '1';
      }
    }, duration);
    duration += 150;
  }
};

export { revealFunction };
