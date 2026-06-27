import { defineComponent, reactive, onMounted } from 'vue'
import Draw from './draw'
const MOCK = { category: ['市区', '县城1', '县城2', '县城3', '县城4', '县城5', '县城6', '县城7', '县城8', '县城9', '县城10', '县城11', '县城12', '县城13', '县城14', '县城15', '县城16', '县城17', '县城18'], lineData: [18092, 20728, 24045, 28348, 32808, 36097, 39867, 44715, 48444, 50415, 36097, 39867, 44715, 48444, 50415, 50061, 32677, 49521], barData: [4600, 5000, 5500, 6500, 7500, 8500, 9900, 12500, 14000, 21500, 23200, 24450, 25250, 33300, 4600, 5000, 5500, 6500] }

export default defineComponent({
  components: { Draw },
  setup() {
    const cdata = reactive<any>({ category: [], lineData: [], barData: [] })
    onMounted(async () => {
      const { fetchChart } = await import('../../../api/adapter')
      const rows = await fetchChart('district_stats')
      if (rows.length) {
        cdata.category = rows.map(r => r.item_name)
        cdata.barData = rows.map(r => r.item_value)
        cdata.lineData = rows.map(r => (r.item_json as any)?.lineVal || 0)
      } else {
        Object.assign(cdata, MOCK)
      }
    })
    return () => <div><Draw cdata={cdata} /></div>
  }
})
