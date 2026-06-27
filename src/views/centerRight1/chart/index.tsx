import { defineComponent, reactive, onMounted } from 'vue'
import Draw from './draw'
const MOCK = { indicatorData: [{ name: '指标1', max: 100 }, { name: '指标2', max: 100 }, { name: '指标3', max: 100 }, { name: '指标4', max: 100 }, { name: '指标5', max: 100 }, { name: '指标6', max: 100 }], dataBJ: [[80, 70, 90, 60, 85, 75]], dataGZ: [[70, 85, 65, 75, 80, 90]], dataSH: [[90, 60, 80, 70, 75, 85]] as number[][] }

export default defineComponent({
  components: { Draw },
  setup() {
    const cdata = reactive<any>({ indicatorData: [], dataBJ: [], dataGZ: [], dataSH: [] })
    onMounted(async () => {
      const { fetchChart } = await import('../../../api/adapter')
      const rows = await fetchChart('channel_radar')
      if (rows.length) {
        cdata.indicatorData = ['指标1', '指标2', '指标3', '指标4', '指标5', '指标6'].map((n, i) => ({ name: n, max: 100 }))
        const byCity: Record<string, number[]> = {}
        rows.forEach(r => { byCity[r.item_name] = r.item_json?.series || [] })
        cdata.dataBJ = [byCity['北京'] || []]
        cdata.dataGZ = [byCity['广州'] || []]
        cdata.dataSH = [byCity['上海'] || []]
      } else {
        Object.assign(cdata, MOCK)
      }
    })
    return () => <div><Draw cdata={cdata} /></div>
  }
})
