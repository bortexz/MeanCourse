angular.module('qrApp', []).directive('qr', qrDirective);

function qrDirective() {
  return {
    restrict: 'E',
    template: '<div id="qrCode"></div>',
    link: function(scope, elem,  attrs) {
      console.log(attrs);
      $('#qrCode').qrcode({
        text: attrs.link,
        width: parseInt(attrs.size),
        height: parseInt(attrs.size)
      })
    }
  }
}