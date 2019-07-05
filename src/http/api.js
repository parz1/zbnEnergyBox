const host = "http://localhost:3000/";

export function request(url, method, data) {
  wx.showLoading({
    title: "加载中"
  });
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + url,
      method: method,
      data: data,
      headers: {
        "content-type": "application/json" // 默认转为json格式
      },
      success: function(res) {
        wx.hideLoading();
        resolve(res.data);
      },
      fail: function(error) {
        wx.hideLoading();
        reject(false);
      },
      complete: function() {
        wx.hideLoading();
      }
    });
  });
}

export function wtreq() {
  wx.showLoading({
    title: "加载中"
  });
  return new Promise((resolve, reject) => {
    wx.request({
      url:
        "https://api.caiyunapp.com/v2/TAkhjf8d1nlSlspN/121.6544,25.1552/realtime.json",
      method: 'GET',
      headers: {
        "content-type": "application/json" // 默认转为json格式
      },
      success: function(res) {
        wx.hideLoading();
        resolve(res.data);
      },
      fail: function(error) {
        wx.hideLoading();
        reject(false);
      },
      complete: function() {
        wx.hideLoading();
      }
    });
  });
}
