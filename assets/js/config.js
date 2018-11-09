(function($) {

  //スムーススクロール
  $(function(){
    // 全てのアンカータグを対象にする
    $('a').click(function(e){
      var anchor = $(this),
          href = anchor.attr('href'),
          pagename = window.location.href;
      // 現在のurlのハッシュ以降を削除
      pagename = pagename.replace(/#.*/,'');
      // リンク先のurlから現在の表示中のurlを削除
      href = href.replace( pagename , '' );
      if( href.search(/^#/) >= 0 ){
        // 整形したリンクがページ内リンクの場合はページ無いスクロールの対象とする
        // 通常の遷移処理をキャンセル
        e.preventDefault();
        var speed = 500;
        var adjust = -60; // 着地点ずらし調整
        // 前段階で整形したhrefを使用する
        // var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top + adjust;;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        // ロケーションバーの内容を書き換え
        location.hash = href ;
        return false;
      }
    });
  });

  //ハンバーガーメニュー
  $(function(){
    $('.btn_menu').click(function(){
      $(this).toggleClass('active');
      $('.head_nav').toggleClass('open');
    });
  })

  //アコーディオン
  $(function() {
    var accordion = $(".accordion");
    accordion.each(function () {
      var noTargetAccordion = $(this).siblings(accordion);
      $(this).find(".switch").click(function() {
        $(this).next(".contentWrap").slideToggle();
        $(this).toggleClass("open");
        noTargetAccordion.find(".contentWrap").slideUp();
        noTargetAccordion.find(".switch").removeClass("open");
      });
    });
  });

})(jQuery);