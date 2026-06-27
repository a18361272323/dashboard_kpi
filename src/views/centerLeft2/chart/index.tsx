import { defineComponent, reactive, onMounted } from 'vue'
import Draw from './draw'

const MOCK = [
  { name: '福州市', value: 10 }, { name: '厦门市', value: 9 },
  { name: '漳州市', value: 8 }, { name: '泉州市', value: 7 },
  { name: '三明市', value: 6 }, { name: '莆田市', value: 5 },
  { name: '南平市', value: 4 }, { name: '龙岩市', value: 3 },
  { name: '宁德市', value: 2 }
]

export default defineComponent({
  components: { Draw },
  setup() {
    const cdata = reactive<{ name: string; value: number }[]>([])
    onMounted(async () => {
      try {
        const res = await fetch(
          '/xcodegw/app/eee42da8-4947-457b-a49d-04291079cfea/tag/dev/model/MOUJn1fQ9M/method/FUF08ktjo2/run',
          { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'include',
            body: JSON.stringify({ chart_id: 'fujian_map', current: 1, pageSize: 50 }) }
        )
        const j = await res.json()
        if (j.returnCode === 'SUC0000' && j.body?.list?.length) {
          cdata.push(...j.body.list.map((it: any) => ({ name: it.item_name, value: it.item_value })))
          return
        }
      } catch {}
      cdata.push(...MOCK)
    })
    return () => <div><Draw cdata={cdata} /></div>
  }
})
