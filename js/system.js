
window.onload = function () {
    // ページ読み込み時に実行したい処理

    initSynth();

    /* タブの初期活性 */
    setSelectTab('system', 0);
    buildTuningBox();
    buildChordBox();
}

function initSynth() {
    synth = new Tone.Sampler({
        "E2": "https://dl.dropbox.com/s/xoyrmfpifgzz8qs/e2.mp3?dl=0",
        "E3": "https://dl.dropbox.com/s/ypo7x2erg932u5c/e3.mp3?dl=0",
        "E4": "https://dl.dropbox.com/s/i6pyt1q1x380hk5/e4.mp3?dl=0",
        "E5": "https://dl.dropbox.com/s/y5iix9qabxxr3it/e5.mp3?dl=0",
    }).toMaster();
    // シンセサイザーを生成
    // synth = new Tone.PolySynth({
    //     // 発振器の設定
    //     oscillator: {
    //         type: "triangle8"
    //     },
    //     // エンベロープ(包絡線)の設定
    //     envelope: {
    //         attack: 0.005,  // 最大音量アタック・レベル(Attack Level)に達する時間
    //         decay: 0.1,     // 一定音量まで減衰(Decay)する時間
    //         sustain: 0.4,   // 一定振幅(Sustain Level)が続く時間
    //         release: 2      // 音が消えるまでの時間
    //     }
    // }).toMaster();

}

function setSelectTab(tabId, index) {
    const elTabList = document.getElementById(tabId).children[0];
    selectTab(elTabList.children[index]);
}

function selectTab(obj) {
    let base = obj.parentNode.parentNode;
    let tabs = base.children[0].children;
    let conts = base.children[1].children;
    let curIndex = -1;
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('tab-active');
        conts[i].classList.remove('cont-active');
        if (tabs[i] == obj) {
            curIndex = i;
        }
    }
    tabs[curIndex].classList.add('tab-active');
    conts[curIndex].classList.add('cont-active');
}