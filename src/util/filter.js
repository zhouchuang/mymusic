export default{
   
    timeformat: function (value) {
      var date = new Date(value),
        Y = date.getFullYear(),
        m = date.getMonth() + 1,
        d = date.getDate(),
        H = date.getHours(),
        i = date.getMinutes(),
        s = date.getSeconds();
      if (m < 10) {
        m = '0' + m;
      }
      if (d < 10) {
        d = '0' + d;
      }
      if (H < 10) {
        H = '0' + H;
      }
      if (i < 10) {
        i = '0' + i;
      }
      if (s < 10) {
        s = '0' + s;
      }
      var t = Y + '-' + m + '-' + d +' '+ H + ':'+ i + ":" + s;
      return t;
    },
    dateformat:function(value){
        var date = new Date(value),
        Y = date.getFullYear(),
        m = date.getMonth() + 1,
        d = date.getDate(),
        H = date.getHours(),
        i = date.getMinutes(),
        s = date.getSeconds();
      if (m < 10) {
        m = '0' + m;
      }
      if (d < 10) {
        d = '0' + d;
      }
      var t = Y + '-' + m + '-' + d ;
      return t;
    },
    MillisecondToDate: function MillisecondToDate(msd) {
      var time = parseFloat(msd) / 1000;
      var min = Math.floor(time / 60);
      var sec = Math.ceil(time % 60);
  
      min = min < 10 ? '0' + min : min;
      sec = sec < 10 ? '0' + sec : sec;
  
      return min + ':' + sec;
    }
  }
  