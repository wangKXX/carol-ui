<template>
  <el-button v-bind="props" @click="onClick">{{ props.content }}</el-button>
</template>

<script lang="ts" setup name="wt-button">
import { wtButtonProps } from './types'
import { dispatchEvent } from '@wt-ui/utils'

const props = defineProps(wtButtonProps)

const onClick = () => {
  dispatchEvent('onClick', props.events || [], props.router)
}
</script>
