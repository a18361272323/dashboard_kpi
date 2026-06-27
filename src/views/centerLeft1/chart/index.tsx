import { defineComponent, onUnmounted, reactive, onMounted } from 'vue'
import Draw from './draw'

// Mock data fallback when API is unavailable
const MOCK_DATA = {
  xData: ['数据1', '数据2', '数据3', '数据4', '数据5', '数据6'],
  seriesData: [
    { value: 10, name: '数据1' },
    { value: 5, name: '数据2' },
    { value: 15, name: '数据3' },
    { value: 25, name: '数据4' },
    { value: 20, name: '数据5' },
    { value: 35, name: '数据6' },
  ],
}

export default defineComponent({
  components: { Draw },
  setup() {
    const cdata = reactive<{ xData: string[]; seriesData: { value: number; name: string }[] }>({
      xData: [],
      seriesData: [],
    })
    const loading = reactive({ value: true })

    const loadData = async () => {
      try {
        // Fetch from low-code model (same-origin iframe)
        const res = await fetch(
          `/xcodegw/app/eee42da8-4947-457b-a49d-04291079cfea/tag/dev/model/MOUJn1fQ9M/method/FUF08ktjo2/run`,
          { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'include', body: JSON.stringify({ chart_id: 'task_pie', current: 1, pageSize: 100 }) }
        )
        const json = await res.json()
        if (json.returnCode === 'SUC0000' && json.body?.list?.length) {
          const list = json.body.list
          cdata.seriesData = list.map(item => ({ value: item.item_value, name: item.item_name }))
          cdata.xData = list.map(item => item.item_name)
        } else {
          // Fallback to mock
          Object.assign(cdata, MOCK_DATA)
        }
      } catch {
        Object.assign(cdata, MOCK_DATA)
      } finally {
        loading.value = false
      }
    }

    onMounted(() => { loadData() })

    onUnmounted(() => {})

    return () => <div><Draw cdata={cdata} /></div>
  },
})
