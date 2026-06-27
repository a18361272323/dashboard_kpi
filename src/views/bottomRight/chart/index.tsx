import { defineComponent, reactive, onMounted, ref, onUnmounted } from 'vue';
import Draw from './draw'
import { fetchChart } from '../../../api/adapter'

export default defineComponent({
  components: { Draw },
  setup() {
    const drawTiming = ref(0)
    const cdata = reactive({
      year: new Date().getFullYear(),
      weekCategory: [] as string[],
      radarData: [] as number[][],
      radarDataAvg: [] as number[][],
      maxData: 12000,
      weekMaxData: [] as number[],
      weekLineData: [] as number[]
    })

    const genRandom = () => {
      cdata.weekCategory = []; cdata.weekLineData = []; cdata.radarData = []; cdata.radarDataAvg = []; cdata.weekMaxData = []
      const d = new Date()
      for (let i = 0; i < 7; i++) {
        cdata.weekCategory.unshift([d.getMonth()+1, d.getDate()-i].join('/'))
        const dist = Math.round(Math.random()*11000+500)
        cdata.weekMaxData.push(cdata.maxData); cdata.weekLineData.push(dist)
        const spd = +(Math.random()*5+3).toFixed(3), mx = +(spd+Math.random()*3).toFixed(2), hr = +(dist/1000/spd).toFixed(1)
        cdata.radarData.unshift([dist, spd, mx, hr])
        const da = Math.round(Math.random()*8000+4000), sa = +(Math.random()*4+4).toFixed(3), ma = +(sa+Math.random()*2).toFixed(2), ha = +(da/1000/sa).toFixed(1)
        cdata.radarDataAvg.unshift([da, sa, ma, ha])
      }
    }

    onMounted(async () => {
      try {
        const rows = await fetchChart('satisfaction')
        if (rows.length) {
          cdata.weekCategory = rows.map(r => r.item_name)
          cdata.weekLineData = rows.map(r => r.item_value)
          cdata.radarData = rows.map(r => {
            const j = r.item_json as any
            return [r.item_value, j?.speed||0, j?.dist||0, j?.hour||0]
          })
          cdata.weekMaxData = rows.map(() => cdata.maxData)
          return
        }
      } catch {}
      genRandom()
      drawTiming.value = setInterval(genRandom, 6000) as any
    })

    onUnmounted(() => { clearInterval(drawTiming.value) })

    return () => <div><Draw cdata={cdata} /></div>
  }
})
