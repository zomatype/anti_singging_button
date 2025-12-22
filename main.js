import "./style.css";
import { Howl } from "howler";

const sound = new Howl({
  src: ["/sound-stop.mp3"],
  preload: true,
  html5: false,
});

const btn = document.getElementById("stopper-btn");
// テキストを変更するための要素を取得
const btnText = btn.querySelector(".btn-text");

const trigger = (e) => {
  if (e.cancelable) e.preventDefault();

  sound.stop();
  sound.play();

  // 背景フラッシュ
  document.body.classList.remove("flash-effect");
  void document.body.offsetWidth;
  document.body.classList.add("flash-effect");

  // バツ印アニメーション発火
  btn.classList.remove("active");
  void btn.offsetWidth;
  btn.classList.add("active");

  // --- テキストの変更処理 ---
  // ボタン全体ではなく、テキスト用spanの中身だけを変える
  btnText.innerText = "歌わないよ!";

  // 既存のタイマーがあればリセット
  if (btn.timer) clearTimeout(btn.timer);

  // 1秒後に元に戻す
  btn.timer = setTimeout(() => {
    btnText.innerText = "やめさせる";
    btn.classList.remove("active"); // バツ印も消す
  }, 1000);
  // -----------------------

  if (navigator.vibrate) {
    navigator.vibrate(50);
  }
};

btn.addEventListener("pointerdown", trigger, { passive: false });
