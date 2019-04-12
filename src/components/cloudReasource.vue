<template>
  <div class="cloudReasource">
    <div class="search">
      <ul>
        <li>
          <span>{{accountInfo.label}}</span>
          <select v-model="accountInfo.selectValue">
            <option
              v-bind:key="item.id"
              :value="item.id"
              v-for="item in accountInfo.selectData"
            >{{item.text}}</option>
          </select>
        </li>
        <li>
          <span>{{regionInfo.label}}</span>
          <select v-model="regionInfo.selectValue">
            <option
              v-bind:key="item.id"
              :value="item.id"
              v-for="item in regionInfo.selectData"
            >{{item.text}}</option>
          </select>
        </li>
        <li>
          <span>{{resourceType.label}}</span>
          <select v-model="resourceType.selectValue">
            <option
              v-bind:key="item.id"
              :value="item.id"
              v-for="item in resourceType.selectData"
            >{{item.text}}</option>
          </select>
        </li>
        <li>
          <button @click="searchButton">{{searchLabel}}</button>
        </li>
      </ul>
    </div>
    <div class="content">
      <table border="1px" bordercolor="#CCC" cellspacing="0px" cellpadding="10px">
        <thead>
          <tr>
            <th v-bind:key="column.id" v-for="column in gridData.columnList">{{column.text}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-bind:key="item.id" v-for="item in gridData.bodyData">
            <td>{{item.name}}</td>
            <td>{{item.status}}</td>
            <td>{{item.idAddress}}</td>
            <td>{{item.charmodel}}</td>
            <td>
              <button @click="startReasource(item.id)">开机</button>
              <button @click="startReasource(item.id)">关机</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "CloudReasource",
  data() {
    return {
      accountInfo: {
        label: "账号",
        selectValue: 0,
        selectData: [
          {
            id: 0,
            text: "——请选择——"
          },
          {
            id: 1,
            text: "张三"
          },
          {
            id: 2,
            text: "李四"
          }
        ]
      },
      regionInfo: {
        label: "区域",
        selectValue: 0,
        selectData: [
          {
            id: 0,
            text: "——请选择——"
          },
          {
            id: 1,
            text: "华北一区"
          },
          {
            id: 2,
            text: "华东二区"
          }
        ]
      },
      resourceType: {
        label: "资源类型",
        selectValue: 0,
        selectData: [
          {
            id: 0,
            text: "——请选择——"
          },
          {
            id: 1,
            text: "云桌面"
          },
          {
            id: 2,
            text: "云服务器"
          }
        ]
      },
      searchLabel: "查找",
      gridData: {
        columnList: [
          {
            id: 1,
            text: "名称"
          },
          {
            id: 2,
            text: "状态"
          },
          {
            id: 3,
            text: "IP地址"
          },
          {
            id: 4,
            text: "计费模式"
          },
          {
            id: 5,
            text: "操作"
          }
        ],
        bodyData: []
      }
    };
  },
  created: function() {
    var mockData = [];
    for (var i = 1; i < 20; i++) {
      mockData.push({
        id: i,
        name: "test0" + i,
        status: "关机",
        idAddress: "127.100.15." + i,
        charmodel: "按需"
      });
    }
    return (this.gridData.bodyData = mockData);
  },
  methods: {
    searchButton: function() {
      var params = {
        account_id: this.accountInfo.selectValue,
        region_id: this.regionInfo.selectValue,
        resource_type_id: this.resourceType.selectValue
      };
      console.log(params);
    },
    startReasource: function(val) {
      console.log(val);
    }
  }
};
</script>

<style scoped>
.cloudReasource {
  margin: 0 30px;
}
.cloudReasource .search {
  height: 45px;
  line-height: 45px;
}
.cloudReasource .search ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  height: 28px;
}
.cloudReasource .search ul li {
  margin-right: 15px;
  height: 100%;
}
.cloudReasource .search ul li select {
  min-width: 100px;
  height: 100%;
}
.cloudReasource .search ul li button {
  outline: none;
  height: 100%;
}
.content table {
  width: 100%;
  margin: 15px 0;
}
.content table thead {
  background-color: #ccc;
}
.content table thead tr th {
  min-width: 200px;
  border-left: 1px solid #fff;
}
.content table thead tr th:first-child {
  border-left: none;
}
.content table tbody tr td {
  text-align: center;
}
</style>
