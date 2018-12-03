var obj = {
    on: function (f) {
        f()
        return this;
    }
}

f1 = function () { console.log('f1') }
f2 = function () { console.log('f2') }

obj.on(f1).on(f2)