var app = getApp()

function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function http(url, req_data, callBack) {

  req_data.channel = app.globalData.channel;
  req_data.nonce_str = app.globalData.nonce_str;
  req_data.sign = app.globalData.sign;

  wx.request({
    url: url,
    method: 'POST',
    data: req_data,
    header: {
      "content-type": "application/json"
    },
    success: function(res) {
      callBack(res);
    },
    fail: function(error) {
      console.log(error)
    }
  })
}


function ajax(url, req_data, callBack) {

  wx.request({
    url: url,
    method: 'POST',
    data: req_data,
    header: {
      "content-type": "application/json"
    },
    success: function(res) {
      callBack(res);
    },
    fail: function(error) {
      console.log(error)
    }
  })
}

module.exports = {
  http: http,
  ajax: ajax,
  formatTime: formatTime
}