<template>
  <div class="article-page">
    <nav class="my-nav van-hairline--bottom">
      <a
        @click="changeSorter('weight_desc')"
        :class="{ active: sorter === 'weight_desc' }"
        href="javascript:;"
        >推荐</a
      >
      <a
        @click="changeSorter('')"
        :class="{ active: sorter === '' }"
        href="javascript:;"
        >最新</a
      >
      <div class="logo"><img src="@/assets/logo.png" alt=""></div>
    </nav>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <ArticleItem v-for="item in list" :key="item.id" :item="item"></ArticleItem>
    </van-list>
  </div>
</template>

<script>
import { getArticles } from '@/api/article'

export default {
  name: 'article-page',
  data () {
    return {
      list: [],
      current: 1,
      sorter: 'weight_desc',
      loading: false,
      finished: false
    }
  },
  async created () {
    // const { data } = await getArticles({
    //   current: this.current,
    //   sorter: this.sorter
    // })
    // this.list = data.rows
  },
  methods: {
    async onLoad () {
      const { data } = await getArticles({
        current: this.current,
        sorter: this.sorter
      })
      this.list.push(...data.rows)
      this.loading = false
      this.current++

      if (this.current > data.pageTotal) {
        this.finished = true
      }
    },
    changeSorter (value) {
      this.sorter = value

      this.current = 1
      this.list = []
      this.finished = false

      this.loading = true
      this.onLoad()
    }
  }
}
</script>

<style lang="less" scoped>
.article-page {
  margin-bottom: 50px;
  margin-top: 44px;
  .my-nav {
    height: 44px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
    background: #fff;
    display: flex;
    align-items: center;
    > a {
      color: #999;
      font-size: 14px;
      line-height: 44px;
      margin-left: 20px;
      position: relative;
      transition: all 0.3s;
      &::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        width: 0;
        height: 2px;
        background: #222;
        transition: all 0.3s;
      }
      &.active {
        color: #222;
        &::after {
          width: 14px;
        }
      }
    }
    .logo {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      > img {
        width: 64px;
        height: 28px;
        display: block;
        margin-right: 10px;
      }
    }
  }
}
</style>
