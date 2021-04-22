$(function() {
    var count = 0;

    function letter_animation(id) {
        //アニメーションさせたいクラス
        var container = $(id);
        //アニメーションスピード
        var speed = 80;

        //テキストの間にスペースを入れる
        var content = container.html();
        var text = $.trim(content);
        var newHtml = "";

        //spanで囲む
        text.split("").forEach(function(v) {
            newHtml += "<span>" + v + "</span>";
        });

        //spanで囲んだテキスト群をHTMLに戻す
        container.html(newHtml);

        //1文字ずつ表示
        var txtNum = 0;
        container.css({opacity: 1});
        setInterval(function() {
            container.find("span").eq(txtNum).css({opacity: 1});
            txtNum++
        }, speed);
    }

    $(document).on("click", function(e){
        switch (count) {
            case 0:
                letter_animation("#first1");
                letter_animation("#first2")
                count++
                break;
            case 1:
                letter_animation("#second");
                count++
                break;
        }
    });


});