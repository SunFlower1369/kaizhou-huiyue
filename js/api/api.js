// import axios from '../../js/axios/axios'

window.onload = () => {
    new Vue({
        el: '#index',
        data() {
            return {
                list: [1, 2, 3, 4],
                loading: false,
                selected: "1",
                tabbar: "首页",
                allLoaded1: false,
                swiper: [{
                    id: 1,
                    img: "https://img1.baidu.com/it/u=3279884260,3623454484&fm=26&fmt=auto&gp=0.jpg"
                }, {
                    id: 2,
                    img: "https://img1.baidu.com/it/u=3279884260,3623454484&fm=26&fmt=auto&gp=0.jpg"
                }, {
                    id: 3,
                    img: "https://img1.baidu.com/it/u=3279884260,3623454484&fm=26&fmt=auto&gp=0.jpg"
                }, {
                    id: 4,
                    img: "https://img1.baidu.com/it/u=3279884260,3623454484&fm=26&fmt=auto&gp=0.jpg"
                }],
                actives: [],
                buttonImg: [{
                    name: "家具建材",
                    img: "../images/shop.png"
                }, {
                    name: "餐饮美食",
                    img: "../images/shop.png"
                }, {
                    name: "休闲娱乐",
                    img: "../images/shop.png"
                }, {
                    name: "购物天地",
                    img: "../images/shop.png"
                }, {
                    name: "生活服务",
                    img: "../images/shop.png"
                }, {
                    name: "汽车服务",
                    img: "../images/shop.png"
                }, {
                    name: "母婴专区",
                    img: "../images/shop.png"
                }, {
                    name: "教育培训",
                    img: "../images/shop.png"
                }, {
                    name: "房产相关",
                    img: "../images/shop.png"
                }, {
                    name: "婚庆摄影",
                    img: "../images/shop.png"
                }, ],
            }
        },
        methods: {
            lookDetail(id) {
                console.log(id)
                window.location.href = "./index/detail.html";
            },
            loadBottom1() {
                //未定义ID 
                // var maxId = 1
                // this.actives.push(
                //     axios.post('https://kztch.tiantianapp.cn/huiyue/wxapp.php?t=0&do=tc_msg_action&op=msg_list&page=' + (maxId++) + '&pagesize=10&m_type=0').then(res => {
                //         //console.log(res.data.data)
                //         this.actives = res.data.data
                //         //console.log(maxId)
                //     }).catch(err => {
                //         console.log(err)
                //        // this.$message.error('获取文章失败，请稍后再试！,错误信息：' + err)
                //     })
                //     )
                // this.$refs.loadmore1.onBottomLoaded();
            },
            takePhone() {
                console.log(this.actives.phone)
            }
        },
        created() {
            axios.post('https://kztch.tiantianapp.cn/huiyue/wxapp.php?t=0&do=tc_msg_action&op=msg_list&page=1&pagesize=10&m_type=0').then(res => {
                //console.log(res.data.data)
                this.actives = res.data.data
                console.log(this.actives)
            }).catch(err => {
                console.log(err)
                this.$message.error('获取文章失败，请稍后再试！,错误信息：' + err)
            })
        },
    })

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 5,
        slidesPerColumn: 2,
        spaceBetween: 5,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    });
}