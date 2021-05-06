function animate2(obj, target, callback) {
    clearInterval(obj.timer); // 清除定时器，防止点击太快，启动多个定时器
    obj.timer = setInterval(function() {
        var step = (target - obj.offsetTop) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetTop == target) {
            clearInterval(obj.timer);
            callback && callback();
        }
        obj.style.top = obj.offsetTop + step + 'px';
    }, 15)
}