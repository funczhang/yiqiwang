require.config(requireConfig);
define(function(require, exports, module) {
    /**
     * 初始化城市列表
     * 
     */
    var $ = require('jquery'),
        utils = require('common'),
        dao = require('dao'),
        template = require('template'),
        initLocationList = function() {
            dao.getLocationList().done(function(data) {
                if (data.flag) {
                    if (data.location.length) {
                        var html = template('cityTmpl', data.location);
                        $('.city-slide-option').html(html);

                    } else {
                        alert("数据为空");
                    }

                } else {
                    alert(data.msg);
                }
            }).fail(function() {});
        };
    /**
     * 事件处理eventhandler
     * 
     */
    var eventHandler = {
            switchMenu: function() {
                $this = $(this);
                $('.main-nav-item').removeClass('gradual');
                $this.addClass('gradual');
            },
            menuHover: function(event) {
                if (event.type == 'mouseenter') {
                    $(this).find('a,i').css('color', 'grey');
                } else if (event.type == 'mouseleave') {
                    $(this).find('a,i').css('color', 'white');
                }
            },
            toggleLocation: function(event) {
                var ev = event.target;
                if (ev == $('.city-option')[0] || ev == $('.triangle')[0]) {
                    $('.city-slide-option').show();
                    $('.slideLogo').removeClass('triangle');
                    $('.slideLogo').addClass('opposite-triangle');

                } else {
                    $('.slideLogo').removeClass('opposite-triangle');
                    $('.slideLogo').addClass('triangle');
                    $('.city-slide-option').hide();
                }
            },
            slideHide: function(event) {
                $("#mainIframe").contents().find(".pull-down-option").hide();
            },
            selectLocation: function() {
                var $this = $(this);
                text = $this.text();
                $('.city-option').text(text);
            }

        }
        /**
         * 添加事件addEvent
         * 
         */
    var addEvent = function() {
        $(document).on('click', '.main-nav-item', eventHandler.switchMenu);
        $(document).on('mouseenter mouseleave', '.main-nav-item', eventHandler.menuHover);
        $(document).on('click', '.city-slide-option li', eventHandler.selectLocation);
        $(document).on('click', eventHandler.toggleLocation);
        $(document).on('click', eventHandler.slideHide);
    };
    $(function() {
        initLocationList();
        addEvent();
    });
});