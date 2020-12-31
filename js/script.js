/*ページのローディング*/
/*========================================================*/
/*========================================================*/
/*========================================================*/
/*========================================================*/
$(window).on('load', function(){
    $('.c-loading__disc svg').addClass('is-rotate-loading');
    //フェードアウト
    const loading = function(){
        $('.c-loading__img').addClass('is-fade-up')
        $('.c-loading__text').addClass('is-fade-up')
        $('.c-loading__disc').addClass('is-fade-down')
    }
    setTimeout(loading,500);
    
    $('.c-Loading').delay(600).fadeOut(500);
});





$(function(){


/*サイズ共通*/
/*========================================================*/
/*========================================================*/
/*========================================================*/
/*========================================================*/
    /* 待機画面 */
    



    //アニメーションクラスを付加する




    /*=ページを開いて数秒で自動スクロール=*/
    let autoScroll = function(){
        let dis = $('.p-About').offset().top - 100;
        $('html, body').animate({scrollTop: dis }, 1000, 'swing');
    }
    setTimeout(autoScroll, 3900);
    

/*Header*/
/*============================*/

/*Top*/
/*============================*/

/*About*/
/*============================*/
    
/*Passion*/
/*============================*/

/*Skill*/
/*============================*/
    /*=要素のフロートイン=*/
    //イメージ
    $(window).scroll(function(){
        if($(window).scrollTop() + $(window).height() - 300 > $('.p-skill__item.u-1').offset().top){
            $('.p-skill__item.u-1').addClass('is-visible');    
        }

        if($(window).scrollTop() + $(window).height() - 300 > $('.p-skill__item.u-2').offset().top){
            $('.p-skill__item.u-2').addClass('is-visible');    
        }

        if($(window).scrollTop() + $(window).height() - 300 > $('.p-skill__item.u-3').offset().top){
            $('.p-skill__item.u-3').addClass('is-visible');    
        }

        if($(window).scrollTop() + $(window).height() - 300 > $('.p-skill__item.u-4').offset().top){
            $('.p-skill__item.u-4').addClass('is-visible');    
        }

        if($(window).scrollTop() + $(window).height() - 300 > $('.p-skill__item.u-5').offset().top){
            $('.p-skill__item.u-5').addClass('is-visible');    
        }
    });
/*Resume*/
/*============================*/
    /*=要素のフロートイン=*/
    //ボタン
        $(window).scroll(function(){
            if($(window).scrollTop() + $(window).height() - 300 > $('#Btn-Resume').offset().top){
                $('.p-resume__btn').addClass('is-visible');    
            }
        });
    /*=ボタンクリックで注意文章=*/
        $('#Btn-Resume').on('click',function(){
            //window.alert(`履歴書を更新中です...お手数ですが、後日ダウンロードください`);
            
        });
    
/*Work*/
/*============================*/
    /*=要素のフロートイン=*/
    //イメージ
    $(window).scroll(function(){
        if($(window).scrollTop() + $(window).height() - 300 > $('.c-Col-3-paddingfixed.u-1').offset().top){
            $('.c-Col-3-paddingfixed.u-1').addClass('is-visible');    
        }

        if($(window).scrollTop() + $(window).height() - 300 > $('.c-Col-3-paddingfixed.u-2').offset().top){
            $('.c-Col-3-paddingfixed.u-2').addClass('is-visible');    
        }

        if($(window).scrollTop() + $(window).height() - 300 > $('.c-Col-3-paddingfixed.u-3').offset().top){
            $('.c-Col-3-paddingfixed.u-3').addClass('is-visible');    
        }

        if($(window).scrollTop() + $(window).height() - 300 > $('.c-Col-3-paddingfixed.u-4').offset().top){
            $('.c-Col-3-paddingfixed.u-4').addClass('is-visible');    
        }

        if($(window).scrollTop() + $(window).height() - 300 > $('.c-Col-3-paddingfixed.u-5').offset().top){
            $('.c-Col-3-paddingfixed.u-5').addClass('is-visible');    
        }

        if($(window).scrollTop() + $(window).height() - 300 > $('.c-Col-3-paddingfixed.u-5').offset().top){
            $('.c-Col-3-paddingfixed.u-6').addClass('is-visible');    
        }
    });
    /*=ホバーすると説明がフロートイン=*/
    //変数
    let $Img = $('.c-Img--responsive'),
        $desc = $('.c-Img__desc'),
        $texts = $desc.find('> div');
    //初期化
        $texts.css("top","34px");

    //ホバー時
    $('.c-Img--responsive').hover(function () {
        // over
            $(this).find('.c-Img__desc').removeClass('is-invisible')
            $(this).find('.c-Img__desc').addClass('is-visible')
            $(this).find('.c-Img__desc > div').stop().animate({'top':"24px"},200);
        }, function () {
            $(this).find('.c-Img__desc').removeClass('is-visible')
            $(this).find('.c-Img__desc').addClass('is-invisible')
            $(this).find('.c-Img__desc > div').stop().animate({'top':'34px'},200);
        }
    );

/*My Dream*/
/*============================*/
/*=要素のフロートイン=*/
    //イメージ
    $(window).scroll(function(){
        if($(window).scrollTop() + $(window).height() - 300 > $('.p-dream__text').offset().top){
            $('.p-dream__text').addClass('is-visible');    
        }
    });
/*Contact*/
/*============================*/
    /*=要素のフロートイン=*/
        $(window).scroll(function(){
            if($(window).scrollTop() + $(window).height() - 300 > $('.p-contact__title').offset().top){
                $('.p-contact__title').addClass('is-visible');    
            }
            if($(window).scrollTop() + $(window).height() - 300 > $('.p-contact__form').offset().top){
                $('.p-contact__form').addClass('is-visible');    
            }
            if($(window).scrollTop() + $(window).height() - 200 > $('.p-contact__button').offset().top){
                $('.p-contact__button').addClass('is-visible');    
            }
            if($(window).scrollTop() + $(window).height() - 200 > $('.p-contact__text').offset().top){
                $('.p-contact__text').addClass('is-visible');    
            }

            if($(window).scrollTop() + $(window).height() - 300 > $('.p-contact__subtitle').offset().top){
                $('.p-contact__subtitle').addClass('is-visible');    
            }
        });
    /*=送信ボタン=*/
        $('#Btn-Contact').on('click', function(){
            /* if(window.confirm('送信してよろしいですか?')) {
                window.alert('送信完了');
            } else { 
                window.alert('送信を取りやめました。');
            } */
        });


/*スマホサイズ*/
/*========================================================*/
/*========================================================*/
/*========================================================*/
/*========================================================*/
var mql = window.matchMedia('screen and (max-width: 720px)');
function checkBreakPoint(mql) {
    if (mql.matches) {
////////////////////////////////
/*Header*/
/*============================*/
    /*=要素のフロートイン=*/
    //ヘッダーのフロートイン
    const FadeIn_Header = function() {
        $('.l-Header').fadeIn(1000);
    }
    setTimeout(FadeIn_Header, 2000);
    /*=ヘッダーのナビゲーションをトグルにする=*/
    $('#BtnToggle-Nav').click(function(){
        $('#BtnToggle-Nav__target').slideToggle(300);
    });

    /*=リストのハイライト=*/
        $(window).scroll(function(){
            for(let i = 1; i < 6; i++) {
                if($('main section:nth-of-type('+i+')').offset().top + 700 < $(window).scrollTop()) {
                    //current classのリセット
                    $('.c-nav__list-toggle li').removeClass('is-current');

                    //current classの付与
                    $('.c-nav__list-toggle li:nth-child('+i+')').addClass('is-current');
                }
            }
        });
/*Top*/
/*============================*/
    /*=要素のフロートイン=*/
    //ページタイトル
        const FadeIn_TopTitle = function() {
            $('.p-top__textbox').addClass('is-visible-slow');    
        }
        setTimeout(FadeIn_TopTitle, 2000);
    /*=白い鳥のアニメーション=*/
    //フェードイン
        const FadeIn_Bird = function(){
            $('.c-OpeningAnimation svg').addClass('is-visible');
        }    
        setTimeout(FadeIn_Bird, 1000);
    //スライドイン
    //横の位置の調整
        let disToptitleLeft = $('.c-TopTitle').offset().left + $('.c-TopTitle').width()/2 -60;
        $('.c-OpeningAnimation svg').delay(1000).animate({'left': disToptitleLeft,'top': '380', 'width':'100'},1000);
    //フェードアウト
        $(window).scroll(function(){
            if($(window).scrollTop() > 300){
                $('.c-OpeningAnimation svg').removeClass('is-visible');
                $('.c-OpeningAnimation svg').addClass('is-invisible');
            }
    //再表示
        });
        $(window).scroll(function(){
        if($(window).scrollTop() < 200){
                $('.c-OpeningAnimation svg').removeClass('is-invisible');
                $('.c-OpeningAnimation svg').addClass('is-visible');
            } 
        });
/*About
/*============================*/
    /*=要素のフロートイン=*/
    //テキストボックス
        $(window).scroll(function(){
            if($(window).scrollTop() + $(window).height() - 200 > $('.p-about__textbox').offset().top){
                $('.p-about__textbox').addClass('is-visible');    
            }
    //イメージ
            if($(window).scrollTop() + $(window).height() - 100 > $('.p-about__img').offset().top){
                $('.p-about__img').addClass('is-visible');    
            }
        });
    /*=トグルボタン=*/
        $('#BtnToggle-About').click(function(){
            $('.u-display-none-sm.u-paddingbottom-4').slideToggle(300, function(){
                $('.u-display-none-sm.u-paddingbottom-4').addClass('is-show');
            });
        });
/*Passion*/
/*============================*/
    /*=要素のフロートイン=*/
    //アイテムのディスク
        $(window).scroll(function(){
            if($(window).scrollTop() + $(window).height() - 200 > $('.p-passion-item__disc.u-1').offset().top){
                $('.p-passion-item__disc.u-1').addClass('is-rotate-sm');    
            }
            if($(window).scrollTop() + $(window).height() - 200 > $('.p-passion-item__disc.u-2').offset().top){
                $('.p-passion-item__disc.u-2').addClass('is-rotate-sm');    
            }
            if($(window).scrollTop() + $(window).height() - 200 > $('.p-passion-item__disc.u-3').offset().top){
                $('.p-passion-item__disc.u-3').addClass('is-rotate-sm');    
            }
    //アイテムのタイトル
            if($(window).scrollTop() + $(window).height() - 100 > $('.p-passion-item__title.u-1').offset().top){
                $('.p-passion-item__title.u-1').addClass('is-visible');    
            }
            if($(window).scrollTop() + $(window).height() - 100 > $('.p-passion-item__title.u-2').offset().top){
                $('.p-passion-item__title.u-2').addClass('is-visible');    
            }
            if($(window).scrollTop() + $(window).height() - 100 > $('.p-passion-item__title.u-3').offset().top){
                $('.p-passion-item__title.u-3').addClass('is-visible');    
            }
    //アイテムのテキスト
            if($(window).scrollTop() + $(window).height() - 50 > $('.p-passion-item__text.u-1').offset().top){
                $('.p-passion-item__text.u-1').addClass('is-visible');    
            }
            if($(window).scrollTop() + $(window).height() - 50 > $('.p-passion-item__text.u-2').offset().top){
                $('.p-passion-item__text.u-2').addClass('is-visible');    
            }
            if($(window).scrollTop() + $(window).height() - 50 > $('.p-passion-item__text.u-3').offset().top){
                $('.p-passion-item__text.u-3').addClass('is-visible');    
            }
        });
/*Skill*/
/*============================*/
    /*=トグルボタン=*/
        $('#BtnToggle-Skill').click(function(){
            $('.c-Col-3-paddingfixed.u-4, .c-Col-3-paddingfixed.u-5').slideToggle(300);
        });
/*Resume*/
/*============================*/

/*Work*/
/*============================*/
    /*=トグルボタン=*/
        $('#BtnToggle-Work').click(function(){
            $('.c-Col-3-paddingfixed.u-4, .c-Col-3-paddingfixed.u-5, .c-Col-3-paddingfixed.u-6').slideToggle(300, function(){
                if($('.p-wotk__text').text() === 'show more') {
                    $('.p-wotk__text').text('(more coming soon)');
                } else {
                    $('.p-wotk__text').text('show more');
                }
                
            });
        });
    
/*Contact*/
/*============================*/


////////////////////////////////


/*PCサイズ*/
/*========================================================*/
/*========================================================*/
/*========================================================*/
/*========================================================*/
} else {
////////////////////////////////
/*Header*/
/*============================*/
    /*=背景色を変える=*/
        $(window).scroll(function(){
            //トップでのアニメーション
            if($(window).scrollTop() > 0){
                $('.l-Header').stop(true, false).animate({'height':'50px','backgroundColor': '#000'}, 500, 'swing');
                $('.c-Navbar').stop(true, false).animate({'paddingTop':'0'}, 500, 'swing');
            } 
            if($(window).scrollTop() < 70 ){
                $('.l-Header').stop(true, false).animate({'height':'70px','backgroundColor': 'transparent'}, 500, 'swing');
                $('.c-Navbar').stop(true, false).animate({'paddingTop':'10px'}, 500, 'swing');
            } 
        });
        //アニメーションがうまくいかない時の保険
        if($(window).scrollTop() > 750) {
            $('.l-Header').stop(true, false).animate({'height':'50px','backgroundColor': '#000'}, 500, 'swing');
            $('.c-Navbar').stop(true, false).animate({'paddingTop':'0'}, 500, 'swing');
        }

    /*=要素のフロートイン=*/
        //ヘッダー
        $('.l-Header').show();

    /*=リストのハイライト=*/
        $(window).scroll(function(){
            for(let i = 1; i < 6; i++) {
                if($('main section:nth-of-type('+i+')').offset().top + 700 < $(window).scrollTop()) {
                    //current classのリセット
                    $('.c-nav__list li').removeClass('is-current');

                    //current classの付与
                    $('.c-nav__list li:nth-child('+i+')').addClass('is-current');
                } else if ($(window).scrollTop() < 750) {
                    $('.c-nav__list li').removeClass('is-current');
                }
            }
        });
/*Top*/
/*============================*/
    /*=要素のフロートイン=*/
        //ページタイトル
        const FadeIn_TopTitle = function() {
            $('.p-top__textbox').addClass('is-visible-slow');    
        }
        setTimeout(FadeIn_TopTitle, 2000);
    /*=白い鳥のアニメーション=*/
        //フェードイン
            const FadeIn_Bird = function(){
                $('.c-OpeningAnimation svg').addClass('is-visible');
            }    
            setTimeout(FadeIn_Bird, 1000);
        //スライドイン
        //横の位置の調整
            let disToptitleLeft = $('.c-TopTitle').offset().left + $('.c-TopTitle').width()/2 -60;
            $('.c-OpeningAnimation svg').delay(1000).animate({'left': disToptitleLeft,'top': '550', 'width':'100'},1000);
        //フェードアウト
            $(window).scroll(function(){
                if($(window).scrollTop() > 300){
                    $('.c-OpeningAnimation svg').removeClass('is-visible');
                    $('.c-OpeningAnimation svg').addClass('is-invisible');
                }
        //再表示
            });
            $(window).scroll(function(){
            if($(window).scrollTop() < 200){
                    $('.c-OpeningAnimation svg').removeClass('is-invisible');
                    $('.c-OpeningAnimation svg').addClass('is-visible');
                } 
            });
/*About*/
/*============================*/
    /*=要素のフロートイン=*/
    //テキストボックス
        $(window).scroll(function(){
            if($(window).scrollTop() + $(window).height() - 300 > $('.p-about__textbox').offset().top){
                $('.p-about__textbox').addClass('is-visible');    
            }
        });

    //イメージ
        $(window).scroll(function(){
            if($(window).scrollTop() + $(window).height() - 300 > $('.p-about__img').offset().top){
                $('.p-about__img').addClass('is-visible');    
            }
        });
/*Passion*/
/*============================*/
    /*=三連フロートイン=*/
        $(window).scroll(function(){
            if($(window).scrollTop() + $(window).height() - 300 > $('.p-passion__item.u-1').offset().top){
                $('.p-passion__item.u-1').addClass('is-visible');
                $('.p-passion-item__disc.u-1').addClass('is-rotate-pc');
                let item1 = function(){
                    $('.p-passion__item.u-2').addClass('is-visible');
                    $('.p-passion-item__disc.u-2').addClass('is-rotate-pc');    
                };
                let item2 = function(){
                    $('.p-passion__item.u-3').addClass('is-visible');
                    $('.p-passion-item__disc.u-3').addClass('is-rotate-pc');        
                };
                setTimeout(item1, 100);
                setTimeout(item2, 200);
            }
        });
/*Skill*/
/*============================*/

/*Resume*/
/*============================*/

/*Work*/
/*============================*/

/*Contact*/
/*============================*/

/*Header*/
/*============================*/

}}
// ブレイクポイントの瞬間に発火
mql.addEventListener('change',checkBreakPoint);

// 初回チェック
checkBreakPoint(mql);
////////////////////////////////

});