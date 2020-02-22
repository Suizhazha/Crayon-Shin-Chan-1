import string from "./css.js"; //模块化 导入

demo.innerText = string.substr(0, n);
demo2.innerHTML = string.substr(0, n);
let n = 1;
let time = 30;

const run = () => {
  n += 1;

  //n大于字符串长度时，停止计时器
  if (n > string.length) {
    window.clearInterval(id);
    return;
  }
  demo.innerText = string.substr(0, n);
  demo2.innerHTML = string.substr(0, n);
  demo.scrollTop = demo.scrollHeight;
};

const play = () => {
  return setInterval(run, time);
};

const pause = () => {
  window.clearInterval(id);
};

let id = play();

btnPause.onclick = () => {
  pause();
};
btnPlay.onclick = () => {
  id = play();
};
btnSlow.onclick = () => {
  time = 80;
  pause();
  id = play();
};
btnNormal.onclick = () => {
  time = 30;
  pause();
  id = play();
};
btnFast.onclick = () => {
  pause();
  time = 0;
  id = play();
};
