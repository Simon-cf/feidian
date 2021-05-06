function animate(obj, target, callback) {
    clearInterval(obj.timer); // 确保同一时刻只有一个定时器
    // 为了节约内存，不必每次来一个元素就创建一个定时器
    obj.timer = setInterval(function() {
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            callback && callback();
        } else {
            var step = (target - obj.offsetLeft) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            obj.style.left = obj.offsetLeft + step + 'px';
        }
    }, 15)
}