<template>
    <div class="errPage-container">
        <el-button icon="el-icon-arrow-left" class="pan-back-btn" @click="back">
            返回
        </el-button>
        <el-row>
            <el-col :span="12">
                <h1 class="text-jumbo text-ginormous">
                    糟糕! 503
                </h1>
                <h2>妖兽啦，服务器宕机啦！</h2>
                <h2>请立刻联系客服，重启服务器</h2>
                <h2>谢谢您嘞</h2>

                <ul class="list-unstyled">
                    <li>或者你可以去:</li>
                    <li class="link-type">
                        <router-link to="/">
                            回首页
                        </router-link>
                    </li>
                    <li><a href="#" @click.prevent="dialogVisible=true">点我看图</a></li>
                </ul>
            </el-col>
            <el-col :span="12">
                <img :src="errGif" width="313" height="428" alt="Girl has dropped her ice cream.">
            </el-col>
        </el-row>
        <el-dialog :visible.sync="dialogVisible" title="随便看">
            <img :src="ewizardClap" class="pan-img" alt="随便看看">
        </el-dialog>
    </div>
</template>

<script>
    import errGif from '@/assets/images/401/401.gif'
    export default {
        name: "error_503",
        data() {
            return {
                errGif: errGif + '?' + +new Date(),
                ewizardClap: 'https://wpimg.wallstcn.com/007ef517-bafd-4066-aae4-6883632d9646',
                dialogVisible: false
            }
        },
        methods: {
            back() {
                if (this.$route.query.noGoBack) {
                    this.$router.push({ path: '/' })
                } else {
                    this.$router.go(-1)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .errPage-container {
        width: 800px;
        max-width: 100%;
        margin: 100px auto;
        height: 100%;
        .pan-back-btn {
            background: #008489;
            color: #fff;
            border: none!important;
        }
        .pan-gif {
            margin: 0 auto;
            display: block;
        }
        .pan-img {
            display: block;
            margin: 0 auto;
            width: 100%;
        }
        .text-jumbo {
            font-size: 60px;
            font-weight: 700;
            color: #484848;
        }
        .list-unstyled {
            font-size: 14px;
            li {
                padding-bottom: 5px;
            }
            a {
                color: #008489;
                text-decoration: none;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
</style>
