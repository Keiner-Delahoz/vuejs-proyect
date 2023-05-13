<script setup lang="ts">
import { ref } from 'vue'
import LoadingSkeleton from '../components/shared/LoadingSkeleton.vue'
import MedicalOrderModal from '../components/medical-orders/MedicalOrderModal.vue'
import CustomTable from '../components/shared/CustomTable.vue'
import Welcome from '../components/common/Welcome.vue'
// import { useOrder } from '../composable/useOrder'
// import { useMedicine } from '../composable/useMedicine'
import type { MedicalOrder } from '@/types/medical-orders'
import type { Medicine } from '@/types/medicines'
import type { BaseColumn } from '@/types/shared'

// const { getOrders, createOrder } = useOrder()
// const { getMedicines } = useMedicine()

let isLoading = ref(false)
let isModalOpen = ref(false)
let medicines = ref<Medicine[]>([])
const rows = ref<MedicalOrder[]>([])
const columns = ref<BaseColumn[]>([
  {
    label: 'Nombre',
    field: 'name'
  },
  {
    label: 'Apellido',
    field: 'lastName'
  },
  {
    label: 'Identificación',
    field: 'idNumber'
  },
  {
    label: 'EPS',
    field: 'eps'
  },
  {
    label: 'Medicinas',
    field: 'medicines'
  },
  {
    label: 'Comentarios',
    field: 'comments'
  },
  {
    label: 'Encargado',
    field: 'doctorSignature'
  }
])
const range = ref({ start: null, end: null })

const getRecords = async () => {
  isLoading.value = true
//   const response = await getOrders()
//   medicines.value = await getMedicines()
//   rows.value = response
  isLoading.value = false
}

const handleAddOrder = async (order: string) => {
  try {
   //  await createOrder(JSON.parse(order) as MedicalOrder)
    isModalOpen.value = false
    getRecords()
  } catch (error) {
    console.log(error)
  }
}

getRecords()
</script>

<template>
  <div class="columns is-multiline">
    <div class="column is-12 mt-5 mb-6">
      <Welcome message="Bienvenid@ David P. Avila" />
    </div>

    <div class="column is-5">
      <VDatePicker v-model="range" is-range :masks="{ input: 'DD/MM/YYYY' }">
        <template #default="{ inputValue, inputEvents }">
          <div class="field has-addons">
            <div class="control">
              <input class="input" :value="inputValue.start" v-on="inputEvents.start" />
            </div>
            <div class="control">
              <button class="button is-primary">
                <span class="icon"> <i class="fa fa-arrow-right"></i> </span>
              </button>
            </div>
            <div class="control">
              <input class="input" :value="inputValue.end" v-on="inputEvents.end" />
            </div>
            <div class="control">
              <button class="button is-primary">
                <span class="icon mr-2"> <i class="fa fa-search"></i> </span> Consultar
              </button>
            </div>
          </div>
        </template>
      </VDatePicker>
    </div>
    <div class="column is-7 has-text-right">
      <button class="button is-primary" @click="isModalOpen = true">
        <span class="icon mr-1"> <i class="fa fa-plus"></i> </span> Agregar
      </button>
    </div>

    <div class="column is-12">
      <LoadingSkeleton v-if="isLoading" />
      <CustomTable v-else :cols="columns" :rows="rows" :has-medicines="true" />
    </div>

    <MedicalOrderModal
      :is-open="isModalOpen"
      :medicines="medicines"
      @hide="isModalOpen = !isModalOpen"
      @save="handleAddOrder"
    />
  </div>
</template>
