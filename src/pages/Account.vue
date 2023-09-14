<template>
  <div class="block1">
    <el-form
    label-position="left"
    label-width="100px"
    :model="formLabelAlign"
    size="small"
    style="max-width: 460px;
    margin-right: auto;">
    <h3 style="text-align: center;">添加管理员</h3>
    <el-form-item label="账户名">
      <el-input v-model="formLabelAlign.name" />
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="formLabelAlign.region" />
    </el-form-item>
    <el-form-item label="确认密码">
      <el-input v-model="formLabelAlign.type" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">Submit</el-button>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
<el-table :data="filterTableData" max-height="400px" size="small" height=320>
    <el-table-column label="头像" prop="avatar">
          <template #default="scope">
            <div style="display: flex;align-items: center;">
              <el-avatar style="margin-top: 10px;" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
            </div>
          </template>
        </el-table-column>
    <el-table-column label="Name" prop="name" />
    <el-table-column align="right">
      <template #header>
        <el-input v-model="search" size="small" placeholder="Type to search" />
      </template>
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div style="margin-top: 20px">
    <el-button @click="exitAccount">退出登陆</el-button>
    <el-button @click="changePassword">更改密码</el-button>
  </div>
</div>
  <div class="block2">
    <h2 style="margin-left: 30px;">
    下午好！
  </h2>
  <h2 style="margin-left: 30px;">
    上午好！
  </h2></div>
</template>

<script setup>
import { reactive,computed, ref} from 'vue'

const formLabelAlign = reactive({
  name: '',
  region: '',
  type: '',
})


// 第二段
const search = ref('')
const filterTableData = computed(() =>
  tableData.filter(
    (data) =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase())
  )
)
const handleEdit = (index, row) => {
  console.log(index, row)
}
const handleDelete = (index, row) => {
  console.log(index, row)
}
const exitAccount = ()=>{}
const changePassword = ()=>{}

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'John',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Morgan',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Jessy',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Jessy',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Jessy',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
<style scoped>
  .block1{
    width: 50%;
    height: 550px;
    background-color: antiquewhite;
    float: left;
  }
  .block2{
    background-size: 100% 100%;
    background-image: url('../assets/img/lib.jpg');
    margin:  0 0 0 0;
    top: 0;
    right: 0;
    width: 50%;
    height: 550px;
    float: left;
}</style>


