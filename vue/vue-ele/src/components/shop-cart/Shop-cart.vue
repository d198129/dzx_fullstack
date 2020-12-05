<template>
  <div>
    <div class="shop-cart">
      <div class="content">
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logo" :class="{'highlight':totalCount>0}">
              <i class="icon-shopping_cart" :class="{'highlight':totalCount>0}"></i>
            </div>
            <div class="num" v-show="totalCount>0">{{totalCount}}</div>
          </div>
          <div class="price" :class="{'highlight':totalCount>0}">￥{{totalPrice}}</div>
          <div class="desc">另需配送费{{deliveryPrice}}￥</div>
        </div>
        <div class="content-right">
          <div class="pay" :class="payClass">
            {{paydesc}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    selectFoods: {
      type: Array,
      default () {
        return []
      }
    },
    deliveryPrice: {
      type: Number,
      default:0
    },
    minPrice:{
      type: Number,
      default:0
    }
  },
  computed: {
    totalCount () {
      let count = 0;
      Array.from(this.selectFoods).forEach((food)=>{
        count += food.count;
      })
      return count;
    },
    totalPrice () {
      let totalPrice = 0;
      Array.from(this.selectFoods).forEach((food)=>{
        totalPrice += food.count * food.price;
      })
      return totalPrice;
    },
    paydesc(){
      if(this.totalPrice === 0){
        return `${this.minPrice}元起送`
      }else if (this.totalPrice < this.minPrice){
        let diff = this.minPrice - this.totalPrice
        return `还差${diff}元起送`
      }else{
        return `去结算`
      }
      // let pri;
      // pri = this.minPrice - this.totalPrice;
      // return pri;
    },
    payClass() {
      if(this.totalPrice < this.minPrice){
        return `not-enough`
      }else{
        return `enough`
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl'
.shop-cart
  position: fixed;
  left 0
  bottom 0
  z-index 50
  width 100%
  height 48px
  .content
    display flex
    background $color-background
    color $color-light-grey
    &-left
      flex 1
      .logo-wrapper
        vertical-align middle
        display inline-block
        position relative
        top -10px
        margin 0 12px
        padding 6px
        width 56px
        height 56px
        border-radius 50%
        box-sizing border-box
        background #141d27
        .logo
          width 100%
          height 100%
          background $color-dark-grey
          border-radius 50%
          text-align center
          &.highlight
            background $color-blue
          .icon-shopping_cart
            line-height 44px
            font-size $fontsize-large-xxx
            color #80858a
            &.highlight
              color $color-white
        .num
          position: absolute;
          top 0
          right 0
          width 24px
          height 16px
          line-height 16px
          text-align center
          border-radius 50%
          font-size $fontsize-small-s
          font-weight bold
          color $color-white
          background $color-red
      .price
        vertical-align middle
        display inline-block
        line-height 24px
        padding-right 12px
        border-right 1px solid rgba(255,255,255,.1)
        font-size $fontsize-large
        font-weight 700
        &.highlight
          color $color-white
      .desc
        vertical-align middle
        display inline-block
        line-height 24px
        font-size $fontsize-small-s
    &-right
      flex 0 0 105px
      width 105px
      .pay
        height 48px
        line-height 48px
        text-align center
        font-size $fontsize-small
        font-weight 700
        &.not-enough
          background #2b333b
        &.enough
          background $color-green
          color $color-white
</style>