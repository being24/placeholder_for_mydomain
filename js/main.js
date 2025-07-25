// 設定
const CONFIG = {
    // リダイレクト先URL（ここを変更してください）
    REDIRECT_URL: 'http://scp-jp.wikidot.com/',
    // カウントダウンの秒数
    COUNTDOWN_SECONDS: 5
};

// DOM要素
const timerElement = document.getElementById('timer');
const containerElement = document.getElementById('container');
const scpLogoElement = document.getElementById('scpLogo');
const cssLogoElement = document.getElementById('cssLogo');

// ロゴフォールバック機能
function setupLogoFallback() {
    if (scpLogoElement) {
        scpLogoElement.addEventListener('error', () => {
            // SVGロゴが読み込めない場合、CSS製ロゴを表示
            scpLogoElement.style.display = 'none';
            if (cssLogoElement) {
                cssLogoElement.style.display = 'flex';
            }
        });
    }
}

// 初期化時にロゴフォールバックを設定
setupLogoFallback();

// カウントダウン変数
let countdown = CONFIG.COUNTDOWN_SECONDS;

// カウントダウン機能
const countdownInterval = setInterval(() => {
    countdown--;
    timerElement.textContent = countdown;

    if (countdown <= 0) {
        clearInterval(countdownInterval);
        redirectToTarget();
    }
}, 1000);

// リダイレクト実行関数
function redirectToTarget() {
    // フェードアウトエフェクト
    containerElement.classList.add('fade-out');

    // リダイレクト実行
    setTimeout(() => {
        window.location.href = CONFIG.REDIRECT_URL;
    }, 500);
}

// ユーザーがクリックした場合の即座リダイレクト
document.addEventListener('click', () => {
    clearInterval(countdownInterval);
    redirectToTarget();
});

// キーボードイベントでもリダイレクト
document.addEventListener('keydown', (event) => {
    // Escapeキー以外でリダイレクト
    if (event.key !== 'Escape') {
        clearInterval(countdownInterval);
        redirectToTarget();
    }
});
