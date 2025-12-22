import "./style.css";
import { Howl } from "howler";

// 音声ファイルの準備（publicフォルダに入れるファイル名と合わせる）
// preload: true で読み込み完了後に即再生できるようにする
const sound = new Howl({
  src: ["/sound-stop.mp3"],
  preload: true,
  html5: false, // 短い効果音はWeb Audio APIを使う設定（遅延が少ない）
});

const btn = document.getElementById("stopper-btn");

// 発火ロジック
const trigger = (e) => {
  // ブラウザのデフォルト動作（ズームなど）を完全阻止
  if (e.cancelable) e.preventDefault();

  // 音を再生（連打対応：毎回頭から）
  sound.stop();
  sound.play();

  // 視覚的フィードバック（ボタンの文字を変えるなど）
  btn.innerText = "歌わないよ!";
  setTimeout(() => {
    btn.innerText = "やめさせる";
  }, 1000);

  // スマホのバイブレーション（50ms）
  if (navigator.vibrate) {
    navigator.vibrate(50);
  }
};

// 【重要】レスポンス最速化のため、clickではなく pointerdown を使う
// pointerdown はマウスのクリックとスマホのタッチの両方を最速で検知します
btn.addEventListener("pointerdown", trigger, { passive: false });
