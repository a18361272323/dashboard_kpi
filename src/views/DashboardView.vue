<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import * as echarts from 'echarts'
import { getMockKpiData, getMockChartData, getMockMapData, getMockEvents, type KpiItem } from '../api/lowcode'
const currentTime = ref(new Date().toLocaleTimeString())
const timer = setInterval(() => { currentTime.value = new Date().toLocaleTimeString() }, 1000)
onUnmounted(() => clearInterval(timer))

// KPI 数据
const kpiData = ref<KpiItem[]>(getMockKpiData())

// 格式化数值
function formatNum(n: number): string {
  if (n >= 1000000) return (n / 10000).toFixed(1) + '万'
  if (n >= 10000) return (n / 10000).toFixed(1) + '万'
  return n.toLocaleString()
}

// 图表数据
const chartData = ref(getMockChartData())
const mapData = ref(getMockMapData())
const events = ref(getMockEvents())

// 图表 DOM refs
const lineChartRef = ref<HTMLElement>()
const barChartRef = ref<HTMLElement>()
const pieChartRef = ref<HTMLElement>()
const radarChartRef = ref<HTMLElement>()
const gaugeChartRef = ref<HTMLElement>()
const mapChartRef = ref<HTMLElement>()

let chartInstances: echarts.ECharts[] = []

function initChart(dom: HTMLElement | undefined, option: echarts.EChartsOption) {
  if (!dom) return
  const chart = echarts.init(dom)
  chart.setOption(option)
  chartInstances.push(chart)
  return chart
}

// 折线图配置
const lineOption = computed<echarts.EChartsOption>(() => {
  const months = chartData.value.filter(d => d.chartKey === 'line_trend')
  const categories = [...new Set(months.map(d => d.category))]
  const series = [...new Set(months.map(d => d.series))]
  return {
    tooltip: { trigger: 'axis', backgroundColor: 'rgba(6,30,65,0.9)', borderColor: '#00d4ff' },
    legend: { data: series, textStyle: { color: '#a0c8f0' }, bottom: 0 },
    grid: { left: 50, right: 20, top: 20, bottom: 40 },
    xAxis: { type: 'category', data: categories, axisLine: { lineStyle: { color: '#1a3a6a' } }, axisLabel: { color: '#a0c8f0' } },
    yAxis: { type: 'value', splitLine: { lineStyle: { color: 'rgba(0,180,255,0.1)' } }, axisLabel: { color: '#a0c8f0' } },
    series: series.map((s, i) => ({
      name: s, type: 'line', smooth: true,
      data: months.filter(d => d.series === s).map(d => d.chartValue),
      symbol: 'circle', symbolSize: 6,
      lineStyle: { width: 3, color: ['#00d4ff', '#00ff88'][i] },
      areaStyle: { color: new echarts.graphic.LinearGradient(0,0,0,1, [{offset:0,color:['rgba(0,212,255,0.3)','rgba(0,255,136,0.3)'][i]},{offset:1,color:'transparent'}]) },
      itemStyle: { color: ['#00d4ff', '#00ff88'][i] }
    }))
  }
})

// 柱状图配置
const barOption = computed<echarts.EChartsOption>(() => {
  const data = chartData.value.filter(d => d.chartKey === 'bar_category')
  return {
    tooltip: { trigger: 'axis', backgroundColor: 'rgba(6,30,65,0.9)', borderColor: '#00d4ff' },
    grid: { left: 50, right: 20, top: 10, bottom: 30 },
    xAxis: { type: 'category', data: data.map(d => d.category), axisLine: { lineStyle: { color: '#1a3a6a' } }, axisLabel: { color: '#a0c8f0' } },
    yAxis: { type: 'value', splitLine: { lineStyle: { color: 'rgba(0,180,255,0.1)' } }, axisLabel: { color: '#a0c8f0' } },
    series: [{
      type: 'bar', data: data.map(d => ({ value: d.chartValue, itemStyle: { color: d.color } })),
      barWidth: '40%',
      itemStyle: { borderRadius: [4,4,0,0] }
    }]
  }
})

// 饼图配置
const pieOption = computed<echarts.EChartsOption>(() => {
  const data = chartData.value.filter(d => d.chartKey === 'pie_source')
  return {
    tooltip: { trigger: 'item', backgroundColor: 'rgba(6,30,65,0.9)', borderColor: '#00d4ff' },
    legend: { orient: 'vertical', right: 10, top: 'center', textStyle: { color: '#a0c8f0' }, itemWidth: 10, itemHeight: 10 },
    series: [{
      type: 'pie', radius: ['40%', '65%'], center: ['35%', '50%'],
      avoidLabelOverlap: true,
      label: { show: false },
      emphasis: { label: { show: true, fontSize: 14, fontWeight: 'bold', color: '#fff' } },
      data: data.map(d => ({ name: d.category, value: d.chartValue, itemStyle: { color: d.color } }))
    }]
  }
})

// 雷达图配置
const radarOption = {
  tooltip: { backgroundColor: 'rgba(6,30,65,0.9)', borderColor: '#00d4ff' },
  radar: { indicator: [
    { name: '产品质量', max: 100 }, { name: '服务质量', max: 100 },
    { name: '用户满意度', max: 100 }, { name: '响应速度', max: 100 },
    { name: '创新能力', max: 100 }, { name: '市场覆盖率', max: 100 }
  ], shape: 'circle', splitArea: { areaStyle: { color: ['rgba(0,180,255,0.05)','rgba(0,180,255,0.1)'] } },
  axisLine: { lineStyle: { color: 'rgba(0,180,255,0.3)' } },
  name: { textStyle: { color: '#a0c8f0' } } } as any,
  series: [{ type: 'radar', data: [{ value: [92, 88, 95, 78, 85, 70], areaStyle: { color: 'rgba(0,212,255,0.2)' }, lineStyle: { color: '#00d4ff', width: 2 }, itemStyle: { color: '#00d4ff' } }] }]
}

// 仪表盘配置
const gaugeOption = { series: [{ type: 'gauge', center: ['50%', '55%'], radius: '80%', startAngle: 220, endAngle: -40, min: 0, max: 100, splitNumber: 5, progress: { show: true, width: 12, itemStyle: { color: { type: 'linear', x: 0, y: 0, x2: 1, y2: 0, colorStops: [{ offset: 0, color: '#00d4ff' }, { offset: 1, color: '#00ff88' }] } } }, axisLine: { lineStyle: { width: 12, color: [[1, 'rgba(0,180,255,0.15)']] } }, axisTick: { show: false }, splitLine: { length: 8, lineStyle: { width: 2, color: 'rgba(0,180,255,0.3)' } }, axisLabel: { distance: 20, color: '#a0c8f0', fontSize: 10 }, detail: { formatter: '{value}%', color: '#fff', fontSize: 18, fontFamily: 'Orbitron', offsetCenter: [0, '40%'] }, data: [{ value: 68.5 }] }] }

// 地图（使用柱状图代替）
// 已直接在 onMounted 中初始化

// 初始化所有图表
onMounted(() => {
  // 注册中国地图
  echarts.registerMap('china', { type: 'FeatureCollection', features: [] }) // 简化，实际需要 geoJSON
  // 用散点图代替
  initChart(mapChartRef.value, {
    tooltip: { trigger: 'item', backgroundColor: 'rgba(6,30,65,0.9)', borderColor: '#00d4ff' },
    grid: { left: 20, right: 20, top: 10, bottom: 30 },
    xAxis: { type: 'category', data: mapData.value.map(d => d.region), axisLabel: { color: '#a0c8f0', rotate: 45, interval: 0, fontSize: 10 }, axisLine: { lineStyle: { color: '#1a3a6a' } } },
    yAxis: { type: 'value', splitLine: { lineStyle: { color: 'rgba(0,180,255,0.1)' } }, axisLabel: { color: '#a0c8f0' } },
    series: [{
      type: 'bar', data: mapData.value.map(d => ({ value: d.value, itemStyle: { color: new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:'#00d4ff'},{offset:1,color:'#0066cc'}]) } })),
      barWidth: '50%', itemStyle: { borderRadius: [4,4,0,0] }
    }]
  })
  
  initChart(lineChartRef.value, lineOption.value)
  initChart(barChartRef.value, barOption.value)
  initChart(pieChartRef.value, pieOption.value)
  initChart(radarChartRef.value, radarOption as any)
  initChart(gaugeChartRef.value, gaugeOption as any)
  
  // 自适应
  const ro = new ResizeObserver(() => {
    chartInstances.forEach(c => c.resize())
  })
  ro.observe(document.querySelector('.charts-grid')!)
})
</script>

<template>
  <div class="dashboard">
    <!-- 顶部标题栏 -->
    <header class="dashboard-header">
      <div></div>
      <h1 class="dashboard-title">智能运营数据大屏</h1>
      <div class="dashboard-time">{{ currentTime }}</div>
    </header>

    <!-- KPI 指标卡 -->
    <section class="kpi-row">
      <div v-for="kpi in kpiData" :key="kpi.name" class="kpi-card"
        :data-color="{ '#00d4ff': 'cyan', '#00ff88': 'green', '#ff6600': 'orange', '#ff3366': 'red' }[kpi.color] || 'cyan'">
        <div class="kpi-header">
          <span class="kpi-label">{{ kpi.name }}</span>
          <span class="kpi-icon">{{ kpi.icon }}</span>
        </div>
        <div class="kpi-value" :style="{ color: kpi.color }">
          {{ formatNum(kpi.value) }}
          <span class="kpi-unit">{{ kpi.unit }}</span>
        </div>
        <div class="kpi-footer">
          <span :class="'kpi-trend-' + kpi.trend">
            {{ kpi.trend === 'up' ? '↑' : kpi.trend === 'down' ? '↓' : '→' }}
            {{ Math.abs(kpi.changePercent) }}%
          </span>
          <span>较上期</span>
        </div>
      </div>
    </section>

    <!-- 图表网格 -->
    <section class="charts-grid">
      <!-- 折线图 -->
      <div class="chart-panel" style="grid-row: 1 / 3;">
        <div class="chart-panel-title">销售趋势分析</div>
        <div ref="lineChartRef" class="chart-container"></div>
      </div>

      <!-- 柱状图 -->
      <div class="chart-panel">
        <div class="chart-panel-title">品类销售排行</div>
        <div ref="barChartRef" class="chart-container"></div>
      </div>

      <!-- 饼图 -->
      <div class="chart-panel">
        <div class="chart-panel-title">流量来源分布</div>
        <div ref="pieChartRef" class="chart-container"></div>
      </div>

      <!-- 雷达图 -->
      <div class="chart-panel">
        <div class="chart-panel-title">综合能力评估</div>
        <div ref="radarChartRef" class="chart-container"></div>
      </div>

      <!-- 仪表盘 -->
      <div class="chart-panel">
        <div class="chart-panel-title">目标完成率</div>
        <div ref="gaugeChartRef" class="chart-container"></div>
      </div>

      <!-- 区域分布 -->
      <div class="chart-panel">
        <div class="chart-panel-title">区域销售分布</div>
        <div ref="mapChartRef" class="chart-container"></div>
      </div>

      <!-- 事件滚动 -->
      <div class="chart-panel">
        <div class="chart-panel-title">实时事件流</div>
        <div class="event-ticker">
          <div class="event-ticker-track">
            <div v-for="(evt, i) in events" :key="i" class="event-item" :class="'event-level-' + evt.level">
              <span class="event-dot"></span>
              <span class="event-time">{{ evt.logTime }}</span>
              <span class="event-title">[{{ evt.type }}] {{ evt.title }}</span>
              <span class="event-content">{{ evt.content }}</span>
            </div>
            <!-- 重复一遍实现无缝滚动 -->
            <div v-for="(evt, i) in events" :key="'dup-' + i" class="event-item" :class="'event-level-' + evt.level">
              <span class="event-dot"></span>
              <span class="event-time">{{ evt.logTime }}</span>
              <span class="event-title">[{{ evt.type }}] {{ evt.title }}</span>
              <span class="event-content">{{ evt.content }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
