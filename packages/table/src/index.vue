<template>
  <div class="w-table">
    <el-form :inline="false" :model="formInline" class="form-inline" :label-position="'top'">
      <el-row :gutter="10" align="middle" justify="center">
        <template v-for="(column, index) in searchColumns">
          <el-col
            :span="6"
            :key="`inline-from-${index}`"
            v-if="index < searchColumnNum - 1 || isOpen"
          >
            <el-form-item :label="column.label" v-if="column?.type === 'date'">
              <el-date-picker v-model="formInline[column.prop]" placeholder="请选择" clearable />
            </el-form-item>
            <el-form-item
              :label="column.label"
              v-else-if="column.valueEnmu && column?.type === 'select'"
            >
              <el-select v-model="formInline[column.prop]" placeholder="请选择" clearable>
                <el-option
                  v-for="item in column.valueEnmu"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item :label="column.label" v-else>
              <el-input v-model="formInline[column.prop]" placeholder="请输入" clearable />
            </el-form-item>
          </el-col>
        </template>
        <el-col :span="6" :offset="offset">
          <el-form-item class="action-item">
            <el-button @click="onRest">重置</el-button>
            <el-button type="primary" @click="onSubmit">查询</el-button>
            <el-button
              @click="isOpen = !isOpen"
              v-if="searchColumns.length > searchColumnNum - 1"
              :icon="isOpen ? ArrowUp : ArrowDown"
              type="text"
              >{{ isOpen ? '收起' : '展开' }}</el-button
            >
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-table :data="tableData" v-bind="props">
      <el-table-column
        :label="column.label"
        v-for="(column, index) in props.columns"
        :key="`${index}`"
        :prop="column.prop"
      ></el-table-column>
    </el-table>
    <div class="w-teble-pagination">
      <el-pagination
        v-model:current-page="fetchParams.currentPage"
        v-model:page-size="fetchParams.pageSize"
        :page-sizes="[100, 200, 300, 400]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, reactive, computed } from 'vue'
import { ArrowDown, ArrowUp } from '@element-plus/icons-vue'
interface ITable {
  columns: {
    prop: string
    label: string
    hideInSearch?: boolean
    type?: string
    valueEnmu?: {
      value: string
      label: string
    }[]
  }[]
  action: string
  method: string
  preview: boolean
}
interface IParams {
  currentPage: number
  pageSize: number
}
const props = withDefaults(defineProps<ITable>(), {
  columns: () => []
})
const { action, method } = props
const formInline = reactive<any>({})
const isOpen = ref<boolean>(!props.preview)
const tableData = ref([])
const fetchParams = ref<IParams>({
  currentPage: 1,
  pageSize: 100
})
const searchColumnNum = ref<number>(4)
const onSubmit = () => {
  Object.assign(fetchParams.value, {
    currentPage: 1,
    ...formInline
  })
}
const onRest = () => {
  fetchParams.value = {
    currentPage: 1,
    pageSize: 100
  }
}
const formatGetParams = (action: string | URL, params: IParams) => {
  if (!action) return
  action = new URL(action)
  const payload = new URLSearchParams(action.search.slice(1))
  Object.entries(params).forEach(([k, v]) => {
    payload.append(k, v)
  })
}
const searchColumns = computed(() => {
  return props.columns.filter(({ hideInSearch }) => !hideInSearch)
})

const offset = computed(() => {
  return !isOpen.value && searchColumns.value.length > searchColumnNum.value - 1
    ? 0
    : (searchColumnNum.value - 1 - (searchColumns.value.length % searchColumnNum.value)) * 6
})

const fetchRequest = async (params: IParams) => {
  const payload = { method, mode: 'cors', credentials: 'include' }
  method === 'POST' && Object.assign(payload, { body: params })
  method === 'GET' && formatGetParams(action, params)
  const res = await fetch(action, { method, mode: 'cors', credentials: 'include' })
  console.log(res)
}

const total = ref(0)
watch(
  fetchParams,
  (value) => {
    fetchRequest(value)
  },
  { immediate: true }
)
</script>

<style lang="less" scoped>
.w-teble-pagination {
  text-align: right;
  padding: 8px 0;
  display: flex;
  justify-content: flex-end;
}
:deep(.el-table) {
  th.el-table__cell {
    background-color: var(--el-menu-border-color);
  }
}
:deep(.el-form-item) {
  width: 100%;
  .el-form-item__content {
    width: 100%;
    .el-select {
      width: 100%;
    }
  }
  &.action-item {
    margin-bottom: 0;
    .el-form-item__content {
      justify-content: flex-end;
    }
  }
  .el-input {
    width: 100%;
  }
}
</style>
