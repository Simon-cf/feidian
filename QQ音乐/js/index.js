window.addEventListener('load', function() {
    // header部分
    // 1.客户端部分
    var header = document.querySelector('.header');

    var client_ol = header.querySelector('.client ol');
    client_ol.parentNode.addEventListener('mouseover', function() {
        client_ol.style.display = 'block';
    })
    client_ol.parentNode.addEventListener('mouseleave', function() {
        client_ol.style.display = 'none';
    });
    // 2.开通vip和充值部分
    var header_top_spans = document.querySelectorAll('.header-top span');
    for (var i = 0; i < header_top_spans.length; i++) {
        header_top_spans[i].parentNode.addEventListener('mouseover', function() {
            this.children[0].style.transform = 'rotate(180deg)';
            this.children[1].style.display = 'block';
        });
        header_top_spans[i].parentNode.addEventListener('mouseleave', function() {
            this.children[0].style.transform = 'rotate(0deg)';
            this.children[1].style.display = 'none';
        });
    }
    // 3.歌曲搜索部分
    var song_his = document.querySelector('.songs_his');
    var search_ipt = document.querySelector('.search input');
    search_ipt.addEventListener('click', function() {
        animate2(song_his, search_ipt.offsetHeight);
        song_his.style.display = 'block';

    });
    search_ipt.addEventListener('blur', function() {
        song_his.style.display = 'none';
        animate2(song_his, -search_ipt.offsetHeight);
    });

    // recon模块
    // 1.动态生成ol
    var recon_ol = document.querySelector('.recon ol');
    var recon_ul = document.querySelector('.recon-aplay ul');
    var recon_aplay = document.querySelector('.recon-aplay');
    var arrow_l = document.querySelector('.arrow_l');
    var arrow_r = document.querySelector('.arrow_r');
    var recon = document.querySelector('.recon');
    for (var i = 0; i < recon_ul.children.length / 5 - 1; i++) {
        var li = document.createElement('li');
        recon_ol.append(li);
    }
    recon_ol.children[0].className = 'li_Rcolor';
    // 2.点击小圆点切换轮播
    var move_step = recon_aplay.clientWidth;
    for (var i = 0; i < recon_ol.children.length; i++) {
        recon_ol.children[i].setAttribute('data-index', i);
        recon_ol.children[i].addEventListener('click', function() {
            for (var i = 0; i < recon_ol.children.length; i++) {
                recon_ol.children[i].className = '';
            }
            this.className = 'li_Rcolor';
            var index = this.dataset['index'];
            animate(recon_ul, -index * move_step, function() {
                // alert("你好");
            });
        })
    };
    // 3.箭头出现消失
    recon.addEventListener('mouseenter', function() {
        arrow_r.style.visibility = 'visible';
        arrow_l.style.visibility = 'visible';
        clearInterval(timer);
    })
    recon.addEventListener('mouseleave', function() {
        arrow_r.style.visibility = 'hidden';
        arrow_l.style.visibility = 'hidden';
        timer = setInterval(function() {
            arrow_r.click();
        }, 2000);
    });
    // 4.点击箭头实现轮播
    var num = 0; // 记录当前图片的索引号
    var circle = 0; // 记录当前小圆圈的索引号
    var flag = true; // 节流阀
    var len = recon_ol.children.length; // ul中图片的个数/5 - 1;
    arrow_r.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == len) {
                num = 0;
                recon_ul.style.left = 0;
            }
            num++;
            circle++;
            if (circle > 1) {
                circle = 0;
            }
            for (var i = 0; i < recon_ol.children.length; i++) {
                recon_ol.children[i].className = '';
            }
            recon_ol.children[circle].className = 'li_Rcolor';
            animate(recon_ul, -num * move_step, function() {
                flag = true;
            })
        }
    })
    arrow_l.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = len;
                recon_ul.style.left = -len * move_step + 'px';
            }
            num--;
            circle--;
            if (circle < 0) {
                circle = 1;
            }
            for (var i = 0; i < recon_ol.children.length; i++) {
                recon_ol.children[i].className = '';
            }
            recon_ol.children[circle].className = 'li_Rcolor';
            animate(recon_ul, -num * move_step, function() {
                flag = true;
            });
        }
    });
    var timer = setInterval(function() {
        arrow_r.click();
    }, 2000);

    // 新歌首发模块
    // 1.动态生成ol
    var new_song_ol = document.querySelector('.new-song ol');
    var new_song_ul = document.querySelector('.new-song .song-aplay ul');
    for (var i = 0; i < new_song_ul.children.length - 1; i++) {
        var li = document.createElement('li');
        new_song_ol.append(li);
    }
    new_song_ol.children[0].className = 'li_Rcolor';
    // 2. 点击ol中的li实现轮播
    var song_aplay = document.querySelector('.song-aplay');
    var move_step1 = song_aplay.clientWidth;
    for (var i = 0; i < new_song_ol.children.length; i++) {
        new_song_ol.children[i].setAttribute('data-index', i); // 设置自定义索引
        new_song_ol.children[i].addEventListener('click', function() {
            for (var i = 0; i < new_song_ol.children.length; i++) {
                new_song_ol.children[i].className = '';
            }
            var index = this.dataset['index'];
            this.className = 'li_Rcolor';
            num1 = index;
            circle1 = index;
            animate(new_song_ul, -index * move_step1);
        })
    };
    // 3. 显示与隐藏两个箭头
    var new_song = document.querySelector('.new-song');
    var song_arrow_l = document.querySelector('.song_arrow_l');
    var song_arrow_r = document.querySelector('.song_arrow_r');
    new_song.addEventListener('mouseenter', function() {
        song_arrow_l.style.visibility = 'visible';
        song_arrow_r.style.visibility = 'visible';
        clearInterval(timer1);
    })
    new_song.addEventListener('mouseleave', function() {
        song_arrow_l.style.visibility = 'hidden';
        song_arrow_r.style.visibility = 'hidden';
        timer1 = setInterval(function() {
            song_arrow_r.click();
        }, 2000);
    });
    // 4.点击按钮实现轮播
    var num1 = 0; // num1记录当前轮播索引号
    var circle1 = 0; // 记录当前小圆圈索引号
    var flag1 = true; // 节流阀
    var len1 = new_song_ul.children.length; // 轮播图片的个数+1
    song_arrow_r.addEventListener('click', function() {
        if (flag1) {
            flag1 = false;
            if (num1 == len1 - 1) {
                num1 = 0;
                new_song_ul.style.left = 0;
            }
            num1++;
            circle1++;
            if (circle1 > new_song_ol.children.length - 1) {
                circle1 = 0;
            }
            for (var i = 0; i < new_song_ol.children.length; i++) {
                new_song_ol.children[i].className = '';
            }
            new_song_ol.children[circle1].className = 'li_Rcolor';
            animate(new_song_ul, -num1 * move_step1, function() {
                flag1 = true;
            });
        }
    });
    song_arrow_l.addEventListener('click', function() {
        if (flag1) {
            flag1 = false;
            if (num1 == 0) {
                num1 = len1 - 1;
                new_song_ul.style.left = -(len1 - 1) * move_step1 + 'px';
            }
            num1--;
            circle1--;
            if (circle1 < 0) {
                circle1 = new_song_ol.children.length - 1;
            }
            for (var i = 0; i < new_song_ol.children.length; i++) {
                new_song_ol.children[i].className = '';
            }
            new_song_ol.children[circle1].className = 'li_Rcolor';
            animate(new_song_ul, -num1 * move_step1, function() {
                flag1 = true;
            });
        }
    })
    var timer1 = setInterval(function() {
        song_arrow_r.click();
    }, 2000);

    // footer部分
    var footer_top_icons = document.querySelectorAll('.footer-top ul .footer-icon');
    for (var i = 0; i < footer_top_icons.length; i++) {
        footer_top_icons[i].style.backgroundPosition = '-' + 92 * i + 'px 0';
    }
    for (var i = 0; i < footer_top_icons.length; i++) {
        footer_top_icons[i].parentNode.addEventListener('mouseenter', function() {
            this.children[0].style.backgroundPositionY = '-49px';
            this.children[1].style.color = '#31c27c';
        });
        footer_top_icons[i].parentNode.addEventListener('mouseleave', function() {
            this.children[0].style.backgroundPositionY = '0px';
            this.children[1].style.color = '#999';

        })
    }
})