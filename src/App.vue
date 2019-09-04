<template>
  <div>
    <el-menu
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :default-active="activeIndex"
      router
      style="min-height:100vh;width:230px;float:left"
    >
      <NavMenu :navMenus="menuData"></NavMenu>
    </el-menu>
    <router-view style="margin-left:250px"></router-view>

  </div>
</template>

<script>
import NavMenu from "./components/NavMenu.vue";
export default {
  components: {
    NavMenu: NavMenu
  },
  methods:{
    editTable: function(){
      alert("OK---!!!");
    },
  },
  data() {
    return {
      activeIndex: 'layoutTest',
      menuData: [
        {
          //一级
          entity: {
            id: 0,
            name: "layoutTest",
            icon: "el-icon-message",
            alias: "layoutTest"
          },
          childs: [
            {
              entity: {
                id: 0-1,
                name: "line",
                icon: "el-icon-picture",
                alias: "折线图"
              },
              childs: [
                {
                  entity: {
                    id: 0-1-1,
                    name: "oneSetLine",
                    icon: "el-icon-picture",
                    alias: "一组测点 - 折线图"
                    }
                },
                {
                  entity: {
                    id: 0-1-2,
                    name: "twoSetLine",
                    icon: "el-icon-picture",
                    alias: "两组测点 - 折线图"
                    }
                },
                {
                  entity: {
                  id: 0-1-3,
                  name: "threeSetLine",
                  icon: "el-icon-picture",
                  alias: "三组测点 - 折线图"
                  }
                },
                {
                  entity: {
                    id: 0-1-3,
                    name: "dynamicSetLine",
                    icon: "el-icon-picture",
                    alias: "动态配置折线图"
                  }
                }

              ]
            },

            {
              entity: {
                id: 0-2,
                name: "pie",
                icon: "el-icon-picture",
                alias: "饼图"
                },
                childs: [
                  {
                    entity: {
                      id: 0-2-1,
                      name: "oneSetPie",
                      icon: "el-icon-picture",
                      alias: "一组测点 - 饼图"
                      }
                  },
                  {
                    entity: {
                      id: 0-2-2,
                      name: "dynamicSetPie",
                      icon: "el-icon-picture",
                      alias: "动态配置饼图"
                    }
                  },


                ]
            },

            {
              entity: {
                id: 0-4,
                name: "scatter",
                icon: "el-icon-picture",
                alias: "散点图"
                },
                childs: [
                {
                  entity: {
                    id: 0-4-1,
                    name: "oneSetScatter",
                    icon: "el-icon-picture",
                    alias: "一组测点 - 散点图"
                  }
                },
                {
                  entity: {
                    id: 0-4-2,
                    name: "twoSetScatter",
                    icon: "el-icon-picture",
                    alias: "两组测点 - 散点图"
                    }
                },
                {
                  entity: {
                    id: 0-4-3,
                    name: "threeSetScatter",
                    icon: "el-icon-picture",
                    alias: "三组测点 - 散点图"
                    }
                  },
                  {
                    entity: {
                      id: 0-4-4,
                      name: "dynamicSetScatter",
                      icon: "el-icon-picture",
                      alias: "动态配置散点图"
                    }
                  }
                ]
              },

            {
              entity: {
                id: 0-3,
                name: "bar",
                icon: "el-icon-picture",
                alias: "柱形图"
                },
                childs: [
                {
                  entity: {
                    id: 0-3-1,
                    name: "oneSetBar",
                    icon: "el-icon-picture",
                    alias: "一组测点 - 柱形图"
                  }
                },
                {
                  entity: {
                    id: 0-3-2,
                    name: "twoSetBar",
                    icon: "el-icon-picture",
                    alias: "两组测点 - 柱形图"
                    }
                },
                {
                  entity: {
                    id: 0-3-3,
                    name: "threeSetBar",
                    icon: "el-icon-picture",
                    alias: "三组测点 - 柱形图"
                    }
                  },
                  {
                    entity: {
                      id: 0-3-4,
                      name: "dynamicSetBar",
                      icon: "el-icon-picture",
                      alias: "动态配置柱形图"
                    }
                  }
              ]
            },

          ]
        },
        {
          //一级
          entity: {
            id: 7,
            name: "dynamicHandsontable",
            icon: "el-icon-news",
            alias: "动态配置Handsontable"
          },
        },
      ],
    };
  },
};
</script>

<style>
</style>
