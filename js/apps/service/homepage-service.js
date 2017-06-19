require.config(requireConfig);
define(function(require, exports, module) {
    /**
     * 初始化页面
     * @return null
     */
    var dao = require('dao'),
        template = require('template'),
        autoMove = require('autoListMove'),
        setWidth = require('index');
    var initPage = {
        initScrollPicList: function() {
            dao.getScrollPicList().done(function(data) {
                if (data.flag) {
                    if (data.picData.length) {
                        var picTitle = [];
                        $('.inner').html(template('picDisplay', data.picData));
                        for (var i = 0, len = data.picData.length; i < len; i++) {
                            picTitle[i] = data.picData[i].imgTitle;
                        }
                        scrollPic(picTitle);
                    } else {
                        console.log("数据为空");
                    };
                } else {
                    console.log(data.msg);
                };
            }).fail();
        },
        initCompanyNum: function() {
            dao.getCountCompanyNum().done(function(data) {
                if (data.flag) {
                    if (data.count.length) {
                        $('.enterprise-query span').text(data.count);
                    } else {
                        console.log("数据为空");
                    }
                } else {
                    console.log(data.msg);
                }
            }).fail(function() {

            });
        },
        initPolicyNewsList: function() {
            dao.getPoliceNewsList().done(function(data) {
                if (data.flag) {
                    if (data.policyNews.length) {
                        var arrPic = [],
                            arrTitle = [];
                        $('.news-content').html(template('policyList', data.policyNews));
                        for (var i = 0, len = data.policyNews.length; i < len; i++) {
                            arrPic[i] = data.policyNews[i].imgUrl;
                            arrTitle[i] = data.policyNews[i].title;
                        }
                        autoChangePic(arrPic, arrTitle);
                    } else {
                        console.log("数据为空");
                    }
                } else {
                    console.log(data.msg);
                }
            }).fail(function() {
                console.log("政策新闻数据获取失败...");
            });
        },
        initLawList: function() {
            dao.getLawList().done(function(data) {
                if (data.flag) {
                    if (data.lawList.length) {
                        $('.law-ul').html(template('lawPanel', data.lawList));
                    } else {
                        console.log("数据为空");
                    }
                } else {
                    console.log(data.msg);
                }
            }).fail(function() {
                console.log("政策新闻数据获取失败...");
            });
        },
        initHandleAffairsByTopic: function() {
            dao.getHandleAffairsList().done(function(data) {
                if (data.flag) {
                    if (data.handleAffairs.length) {
                        $('.topic-panel').html(template('topicTempl', data.handleAffairs));
                    } else {
                        console.log("数据为空");
                    }
                } else {
                    console.log(data.msg);
                }
            }).fail(function() {
                console.log("政策新闻数据获取失败...");
            });
        },
        initHotAffairs: function() {
            dao.getHotAffairsList().done(function(data) {
                if (data.flag) {
                    if (data.hotAffairsList.length) {
                        $('.hot-affairs-list ul').html(template('hotAffairs', data.hotAffairsList));
                    } else {
                        console.log("数据为空");
                    }
                } else {
                    console.log(data.msg);
                }
            }).fail(function() {
                console.log("数据获取失败...");
            });
        },
        initFindPlaceList: function() {
            dao.getWantedPlaceList().done(function(data) {
                if (data.flag) {
                    if (data.placeList.length) {
                        $('#rentOutList').html(template('lookPlaceTempl', data.placeList));
                    } else {
                        console.log("数据为空");
                    }
                } else {
                    console.log(data.msg);
                }
            }).fail(function() {
                console.log("数据获取失败...");
            });
        },
        initLoanBankList: function() {
            dao.getLoanBankList().done(function(data) {
                if (data.flag) {
                    if (data.loanBankInfo.length) {
                        $('.bank-top ul').html(template('lookLoanTmpl', data.loanBankInfo));
                    } else {
                        console.log("数据为空");
                    }
                } else {
                    console.log(data.msg);
                }
            }).fail(function() {

            });
        },
        initQuickFindSlideList: function() {
            dao.getQuickFindSlideList().done(function(data) {
                if (data.flag) {
                    if (data.city.length) {
                        $('.select-place1').html(template('slideOne', data.city));
                    } else {
                        console.log("数据为空");
                    }

                    if (data.area.length) {
                        $('.select-place2').html(template('slideOne', data.area));
                    } else {
                        console.log("数据为空");
                    }

                    if (data.rentPrice.length) {
                        $('.select-place3').html(template('slideOne', data.rentPrice));
                    } else {
                        console.log("数据为空");
                    }

                    if (data.houseType.length) {
                        $('.select-place4').html(template('slideOne', data.houseType));
                    } else {
                        console.log("数据为空");
                    }
                } else {
                    console.log(data.msg);
                }
            }).fail(function() {

            });
        },
        initSelfFinancingSlideList: function() {
            dao.getSelfFinancingSlideList().done(function(data) {
                if (data.flag) {
                    if (data.wantedLoan.length) {
                        $('.select-loan1').html(template('LoanOneTmpl', data.wantedLoan));
                    } else {
                        console.log("数据为空");
                    }

                    if (data.loanDate.length) {
                        $('.select-loan2').html(template('LoanOneTmpl', data.loanDate));
                    } else {
                        console.log("数据为空");
                    }

                    if (data.promiseType.length) {
                        $('.select-loan3').html(template('LoanOneTmpl', data.promiseType));
                    } else {
                        console.log("数据为空");
                    }
                } else {
                    console.log(data.msg);
                }
            }).fail(function() {

            });
        },
        initLoanRecordList: function() {
            dao.getApplyRecordList().done(function(data) {
                if (data.flag) {
                    if (data.applyRecord.length) {
                        $('.apply-record-ul').html(template('applyRecordTmpl', data.applyRecord));
                        for (var i = 1, len = data.applyRecord.length; i <= len; i++) {
                            var selector = "#applyRecord" + i + " span",
                                some = $(selector).eq(3).children(),
                                all = $(selector).eq(3),
                                account = $(selector).eq(1).text();
                            setRecordWidth(some, all, account);
                        }
                    } else {
                        console.log("数据为空");
                    }
                } else {
                    console.log(data.msg);
                }
            }).fail(function() {

            });
        },
        init: function() {
            initPage.initScrollPicList();
            initPage.initCompanyNum();
            initPage.initPolicyNewsList();
            initPage.initLawList();
            initPage.initHandleAffairsByTopic();
            initPage.initHotAffairs();
            initPage.initFindPlaceList();
            initPage.initLoanBankList();
            initPage.initQuickFindSlideList();
            initPage.initSelfFinancingSlideList();
            initPage.initLoanRecordList();
        }
    };
    /**
     *添加事件处理
     */
    var evenetHandler = {
        policyNewsClick: function() {
            var $this = $(this);
            $('.news-list-content').removeClass('news-selected');
            $this.closest('li').next('div').addClass('news-selected');
        },
        joinUsMouseHover: function(event) {
            var toBig;
            if (event.type == "mouseenter") {
                toBig = setInterval(function() {
                    changeTo($('.btn-move'));
                }, 300);
            } else if (event.type == "mouseleave") {
                clearInterval(toBig);
            }

            function changeTo(selector) {
                // selector.animate({height:'70px',width:"210px"},150,function(){
                //     selector.animate({height:"48px",width:"183px"},150);
                // });
            };
        },
        handleAffairsNavClick: function(event) {
            var ev = event.target;
            $('.classify-nav-item').removeClass('item-selected');
            $(this).addClass('item-selected');
            if (ev == $('.classify-nav-item')[0]) {
                $('.affairs-classify-panel ul').removeClass('show');
                $('.topic-panel').addClass('show');
            }
            if (ev == $('.classify-nav-item')[1]) {
                $('.affairs-classify-panel ul').removeClass('show');
                $('.business-panel').addClass('show');
            }
            if (ev == $('.classify-nav-item')[2]) {
                $('.affairs-classify-panel ul').removeClass('show');
                $('.deparment-panel').addClass('show');
            }
        },
        findPlaceNavClick: function(event) {
            var ev = event.target;
            $('.place-nav-item').removeClass('item-selected');
            $(this).addClass('item-selected');
            if (ev == $('.place-nav-item')[0]) {
                $('.place-info-list').removeClass('show');
                $('#rentOutList').addClass('show');
            }
            if (ev == $('.place-nav-item')[1]) {
                $('.place-info-list').removeClass('show');
                $('#saleOutList').addClass('show');
            }
            if (ev == $('.place-nav-item')[2]) {
                $('.place-info-list').removeClass('show');
                $('#findRentList').addClass('show');
            }
            if (ev == $('.place-nav-item')[3]) {
                $('.place-info-list').removeClass('show');
                $('#findSaleList').addClass('show');
            }
        }

    };

    var addEvent = function() {
        $(document).on('click', '.policy-news-title', evenetHandler.policyNewsClick);
        $(document).on('mouseenter mouseleave', '.btn-join img', evenetHandler.joinUsMouseHover);
        $(document).on('click', '.classify-nav-item', evenetHandler.handleAffairsNavClick);
        $(document).on('click', '.place-nav-item', evenetHandler.findPlaceNavClick);
    };
    $(function() {
        initPage.init();
        addEvent();
    });
    /**
     *轮播图函数
     */
    function scrollPic(picTitle) {
        //头部轮播照片
        var index = 0,
            timer = setInterval(go, 2000);
        // 轮播图正常go
        function go() {
            index++;
            if (index == 4) {
                index = 0;
            }
            $('.pic-intro-left a').text(picTitle[index]);
            $('.inner').animate({
                left: -index * 617
            }, 500);
            $('.not-active').eq(index).addClass('active').siblings().removeClass('active');

        }
        //轮播图hover下停止滚动
        $('.pic-show').hover(function() {
            clearInterval(timer);
            $('.left-arrow').css('background-color', 'rgba(0,0,0,.6)');
            $('.right-arrow').css('background-color', 'rgba(0,0,0,.6)');
        }, function() {
            $('.left-arrow').css('background-color', 'rgba(0,0,0,.1)');
            $('.right-arrow').css('background-color', 'rgba(0,0,0,.1)');
            timer = setInterval(go, 2000);
        });
        //右侧箭头点击事件
        $('.right-arrow').on('click', function() {
            go();
        });
        //左侧箭头点击事件
        $('.left-arrow').on('click', function() {
            if (index == 0) {
                index = 2;
            } else {
                index = index - 1 - 1; //go会加1，这里减去go步长
            }
            go();
        });
        //轮播图小圆点事件
        $('.pic-intro-right span').hover(function() {
            index = $('.pic-intro-right span').index($(this)) - 1;
            go();
        }, function() {

        });
    };
    /**
     *政策新闻js效果
     */
    function autoChangePic(arrPic, arrTitle) {
        var index = 0,
            timer = setInterval(function() {
                changeTo(index);
            }, 2500);

        function changeTo(num) {
            $('.policy-news-img').attr('src', arrPic[num]);
            $('.news-info a').text(arrTitle[num]);
            if (num == arrPic.length) {
                index = 0;
            } else {
                index++;
            }
        }
        $(document).on('click', '.news-content li', function() {
            index = $('.news-content li').index($(this));
            changeTo(index);
            clearInterval(timer);
        });
        $('.policy-news-img').hover(function() {
            clearInterval(timer);
        }, function() {
            timer = setInterval(function() {
                changeTo(index);
            }, 2500);
        });
    };
    /**
     *动态设置贷款记录进度条
     */
    function setRecordWidth(someSelector, allSelector, account) {
        var allWidth = parseInt(allSelector.css("width")),
            percent = (parseInt(account) / 100) * 100;
        someSelector.css("width", String(percent) + "%");
    }


});