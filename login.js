var casper = require('casper').create();

// テストの開始
casper.start();

// URLを開く
casper.open("http://uat.admin.system-fusion.ca-cloud.com/");

// 初期表示状態のキャプチャ
casper.wait(10000, function() {
    this.capture('login_open.png');
});

/* 実行ステップ */
casper.then(function() {
    // タイトルの取得
    this.echo(this.getTitle());
    // 値の入力
    this.fill('#app > div > div > div > form > div > div',
    { 
        auth_key: '5555555555',
        email: 'sa@sfx.com',
        password: '111111',
    },
    true)
    // 入力状態のキャプチャ
    casper.wait(10000, function() {
        this.capture('login_input_email.png');
    });

})

casper.run();