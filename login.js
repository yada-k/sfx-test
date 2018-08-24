var casper = require('casper').create();

// テストの開始
casper.start();

// URLを開く
casper.open("URL");

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
    // ログイン実行
    this.click('#app > div > div > div > form > div > div > div.btn-group.col-xs-12.mb10.pt10 > button');

    
})

casper.run();