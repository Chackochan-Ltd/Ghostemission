// Ghost Emissions Dashboard JavaScript

// Data from the provided JSON
const dashboardData = {
  methane_timeseries: [
    {"date": "2020-01-31", "concentration_ppb": 1908.6, "year": 2020, "month": 1},
    {"date": "2020-02-29", "concentration_ppb": 1881.3, "year": 2020, "month": 2},
    {"date": "2020-03-31", "concentration_ppb": 2068.4, "year": 2020, "month": 3},
    {"date": "2020-04-30", "concentration_ppb": 2089.7, "year": 2020, "month": 4},
    {"date": "2020-05-31", "concentration_ppb": 2067.8, "year": 2020, "month": 5},
    {"date": "2020-06-30", "concentration_ppb": 2476.9, "year": 2020, "month": 6},
    {"date": "2020-07-31", "concentration_ppb": 2469.2, "year": 2020, "month": 7},
    {"date": "2020-08-31", "concentration_ppb": 2485.6, "year": 2020, "month": 8},
    {"date": "2020-09-30", "concentration_ppb": 2388.7, "year": 2020, "month": 9},
    {"date": "2020-10-31", "concentration_ppb": 1900.5, "year": 2020, "month": 10},
    {"date": "2020-11-30", "concentration_ppb": 1874.6, "year": 2020, "month": 11},
    {"date": "2020-12-31", "concentration_ppb": 1823.1, "year": 2020, "month": 12},
    {"date": "2021-01-31", "concentration_ppb": 1885.2, "year": 2021, "month": 1},
    {"date": "2021-02-28", "concentration_ppb": 1896.8, "year": 2021, "month": 2},
    {"date": "2021-03-31", "concentration_ppb": 2077.9, "year": 2021, "month": 3},
    {"date": "2021-04-30", "concentration_ppb": 2027.4, "year": 2021, "month": 4},
    {"date": "2021-05-31", "concentration_ppb": 2031.8, "year": 2021, "month": 5},
    {"date": "2021-06-30", "concentration_ppb": 2438.9, "year": 2021, "month": 6},
    {"date": "2021-07-31", "concentration_ppb": 2556.7, "year": 2021, "month": 7},
    {"date": "2021-08-31", "concentration_ppb": 2516.3, "year": 2021, "month": 8},
    {"date": "2021-09-30", "concentration_ppb": 2438.4, "year": 2021, "month": 9},
    {"date": "2021-10-31", "concentration_ppb": 1957.8, "year": 2021, "month": 10},
    {"date": "2021-11-30", "concentration_ppb": 1912.7, "year": 2021, "month": 11},
    {"date": "2021-12-31", "concentration_ppb": 1922.1, "year": 2021, "month": 12},
    {"date": "2022-01-31", "concentration_ppb": 1941.6, "year": 2022, "month": 1},
    {"date": "2022-02-28", "concentration_ppb": 1907.4, "year": 2022, "month": 2},
    {"date": "2022-03-31", "concentration_ppb": 2104.8, "year": 2022, "month": 3},
    {"date": "2022-04-30", "concentration_ppb": 2111.2, "year": 2022, "month": 4},
    {"date": "2022-05-31", "concentration_ppb": 2112.9, "year": 2022, "month": 5},
    {"date": "2022-06-30", "concentration_ppb": 2510.8, "year": 2022, "month": 6},
    {"date": "2022-07-31", "concentration_ppb": 2532.1, "year": 2022, "month": 7},
    {"date": "2022-08-31", "concentration_ppb": 2568.4, "year": 2022, "month": 8},
    {"date": "2022-09-30", "concentration_ppb": 2473.2, "year": 2022, "month": 9},
    {"date": "2022-10-31", "concentration_ppb": 1957.7, "year": 2022, "month": 10},
    {"date": "2022-11-30", "concentration_ppb": 1893.9, "year": 2022, "month": 11},
    {"date": "2022-12-31", "concentration_ppb": 1881.8, "year": 2022, "month": 12},
    {"date": "2023-01-31", "concentration_ppb": 1982.1, "year": 2023, "month": 1},
    {"date": "2023-02-28", "concentration_ppb": 1971.5, "year": 2023, "month": 2},
    {"date": "2023-03-31", "concentration_ppb": 2133.4, "year": 2023, "month": 3},
    {"date": "2023-04-30", "concentration_ppb": 2116.7, "year": 2023, "month": 4},
    {"date": "2023-05-31", "concentration_ppb": 2123.8, "year": 2023, "month": 5},
    {"date": "2023-06-30", "concentration_ppb": 2609.7, "year": 2023, "month": 6},
    {"date": "2023-07-31", "concentration_ppb": 2570.0, "year": 2023, "month": 7},
    {"date": "2023-08-31", "concentration_ppb": 2506.8, "year": 2023, "month": 8},
    {"date": "2023-09-30", "concentration_ppb": 2522.1, "year": 2023, "month": 9},
    {"date": "2023-10-31", "concentration_ppb": 1995.9, "year": 2023, "month": 10},
    {"date": "2023-11-30", "concentration_ppb": 1997.7, "year": 2023, "month": 11},
    {"date": "2023-12-31", "concentration_ppb": 1952.8, "year": 2023, "month": 12},
    {"date": "2024-01-31", "concentration_ppb": 1999.0, "year": 2024, "month": 1},
    {"date": "2024-02-29", "concentration_ppb": 1981.6, "year": 2024, "month": 2},
    {"date": "2024-03-31", "concentration_ppb": 2168.1, "year": 2024, "month": 3},
    {"date": "2024-04-30", "concentration_ppb": 2180.4, "year": 2024, "month": 4},
    {"date": "2024-05-31", "concentration_ppb": 2170.1, "year": 2024, "month": 5},
    {"date": "2024-06-30", "concentration_ppb": 2570.2, "year": 2024, "month": 6},
    {"date": "2024-07-31", "concentration_ppb": 2598.3, "year": 2024, "month": 7},
    {"date": "2024-08-31", "concentration_ppb": 2554.1, "year": 2024, "month": 8},
    {"date": "2024-09-30", "concentration_ppb": 2570.4, "year": 2024, "month": 9},
    {"date": "2024-10-31", "concentration_ppb": 2009.8, "year": 2024, "month": 10},
    {"date": "2024-11-30", "concentration_ppb": 1991.3, "year": 2024, "month": 11},
    {"date": "2024-12-31", "concentration_ppb": 1966.6, "year": 2024, "month": 12},
    {"date": "2025-01-31", "concentration_ppb": 2060.1, "year": 2025, "month": 1},
    {"date": "2025-02-28", "concentration_ppb": 2019.1, "year": 2025, "month": 2},
    {"date": "2025-03-31", "concentration_ppb": 2180.1, "year": 2025, "month": 3},
    {"date": "2025-04-30", "concentration_ppb": 2220.8, "year": 2025, "month": 4},
    {"date": "2025-05-31", "concentration_ppb": 2217.4, "year": 2025, "month": 5},
    {"date": "2025-06-30", "concentration_ppb": 2595.8, "year": 2025, "month": 6},
    {"date": "2025-07-31", "concentration_ppb": 2620.4, "year": 2025, "month": 7},
    {"date": "2025-08-31", "concentration_ppb": 2499.0, "year": 2025, "month": 8}
  ],
  spatial_grid: [
    {"latitude": 18.355280000000002, "longitude": 73.45626, "methane_ppb": 1804.7, "grid_i": 0, "grid_j": 0},
    {"latitude": 18.355280000000002, "longitude": 73.45889473684211, "methane_ppb": 1890.5, "grid_i": 0, "grid_j": 1},
    {"latitude": 18.355280000000002, "longitude": 73.46152947368421, "methane_ppb": 1842.1, "grid_i": 0, "grid_j": 2},
    {"latitude": 18.355280000000002, "longitude": 73.4641642105263, "methane_ppb": 1871.9, "grid_i": 0, "grid_j": 3},
    {"latitude": 18.355280000000002, "longitude": 73.46679894736842, "methane_ppb": 1908.4, "grid_i": 0, "grid_j": 4},
    {"latitude": 18.355280000000002, "longitude": 73.46943368421053, "methane_ppb": 1904.3, "grid_i": 0, "grid_j": 5},
    {"latitude": 18.355280000000002, "longitude": 73.47206842105263, "methane_ppb": 1946.8, "grid_i": 0, "grid_j": 6},
    {"latitude": 18.355280000000002, "longitude": 73.47470315789474, "methane_ppb": 1963.2, "grid_i": 0, "grid_j": 7},
    {"latitude": 18.355280000000002, "longitude": 73.47733789473685, "methane_ppb": 2003.5, "grid_i": 0, "grid_j": 8},
    {"latitude": 18.355280000000002, "longitude": 73.47997263157895, "methane_ppb": 2036.4, "grid_i": 0, "grid_j": 9},
    {"latitude": 18.355280000000002, "longitude": 73.48260736842105, "methane_ppb": 2079.7, "grid_i": 0, "grid_j": 10},
    {"latitude": 18.355280000000002, "longitude": 73.48524210526316, "methane_ppb": 2107.1, "grid_i": 0, "grid_j": 11},
    {"latitude": 18.355280000000002, "longitude": 73.48787684210526, "methane_ppb": 2140.7, "grid_i": 0, "grid_j": 12},
    {"latitude": 18.355280000000002, "longitude": 73.49051157894737, "methane_ppb": 2170.0, "grid_i": 0, "grid_j": 13},
    {"latitude": 18.355280000000002, "longitude": 73.49314631578948, "methane_ppb": 2188.1, "grid_i": 0, "grid_j": 14},
    {"latitude": 18.355280000000002, "longitude": 73.49578105263158, "methane_ppb": 2217.6, "grid_i": 0, "grid_j": 15},
    {"latitude": 18.355280000000002, "longitude": 73.49841578947369, "methane_ppb": 2246.9, "grid_i": 0, "grid_j": 16},
    {"latitude": 18.355280000000002, "longitude": 73.50105052631579, "methane_ppb": 2275.8, "grid_i": 0, "grid_j": 17},
    {"latitude": 18.355280000000002, "longitude": 73.5036852631579, "methane_ppb": 2284.5, "grid_i": 0, "grid_j": 18},
    {"latitude": 18.355280000000002, "longitude": 73.50632, "methane_ppb": 2322.4, "grid_i": 0, "grid_j": 19}
  ],
  infrastructure_sites: [
    {"name": "Abandoned Hotel Complex", "lat": 18.415280560000003, "lon": 73.49126944, "type": "Commercial", "status": "Abandoned", "methane_level": "High"},
    {"name": "Incomplete Residential Phase 2", "lat": 18.385280560000003, "lon": 73.51626944, "type": "Residential", "status": "Incomplete", "methane_level": "Medium"},
    {"name": "Damaged Sewage Treatment Plant", "lat": 18.410280560000003, "lon": 73.52626944, "type": "Infrastructure", "status": "Damaged", "methane_level": "Very High"},
    {"name": "Abandoned Shopping Complex", "lat": 18.395280560000003, "lon": 73.49626944, "type": "Commercial", "status": "Abandoned", "methane_level": "Medium"},
    {"name": "Incomplete Road Network", "lat": 18.40528056, "lon": 73.52126944, "type": "Infrastructure", "status": "Incomplete", "methane_level": "Low"}
  ],
  emission_sources: [
    {"source": "Decomposing Organic Matter", "percentage": 35, "emission_rate_kg_hr": 0.08},
    {"source": "Faulty Sewage Systems", "percentage": 25, "emission_rate_kg_hr": 0.06},
    {"source": "Disturbed Soil", "percentage": 20, "emission_rate_kg_hr": 0.05},
    {"source": "Abandoned Infrastructure", "percentage": 15, "emission_rate_kg_hr": 0.03},
    {"source": "Natural Seepage", "percentage": 5, "emission_rate_kg_hr": 0.01}
  ],
  key_metrics: {
    "total_annual_emissions_mt_co2eq": 2.8,
    "equivalent_cars_removed": 600,
    "equivalent_households": 85,
    "location_name": "Lavasa Hill Station",
    "coordinates": {"lat": 18.40528056, "lon": 73.50626944},
    "monitoring_period": "2020-2025",
    "latest_concentration_ppb": 2499.0
  }
};

// Global variables
let timeSeriesChart;
let sourcesChart;
let currentYear = 2024;
let showingInfrastructure = false;
let tooltip;

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
    initializeComponents();
    setupEventListeners();
    renderMethaneMap();
    createTimeSeriesChart();
    createSourcesChart();
    populateInfrastructureGrid();
    animateMetrics();
});

function initializeComponents() {
    tooltip = document.getElementById('tooltip');
    
    // Update current emission value in hero
    const emissionValue = document.getElementById('current-emission');
    if (emissionValue) {
        emissionValue.textContent = `${dashboardData.key_metrics.latest_concentration_ppb.toLocaleString()} ppb`;
    }
}

function setupEventListeners() {
    // Year slider
    const yearSlider = document.getElementById('year-slider');
    const selectedYearSpan = document.getElementById('selected-year');
    
    yearSlider.addEventListener('input', function(e) {
        currentYear = parseInt(e.target.value);
        selectedYearSpan.textContent = currentYear;
        renderMethaneMap();
    });
    
    // View toggle buttons
    const heatmapBtn = document.getElementById('heatmap-btn');
    const infrastructureBtn = document.getElementById('infrastructure-btn');
    const infrastructureInfo = document.getElementById('infrastructure-info');
    
    heatmapBtn.addEventListener('click', function() {
        showingInfrastructure = false;
        heatmapBtn.classList.add('active');
        infrastructureBtn.classList.remove('active');
        infrastructureInfo.style.display = 'none';
        renderMethaneMap();
    });
    
    infrastructureBtn.addEventListener('click', function() {
        showingInfrastructure = true;
        infrastructureBtn.classList.add('active');
        heatmapBtn.classList.remove('active');
        infrastructureInfo.style.display = 'block';
        renderMethaneMap();
    });
    
    // Ghost Emissions Interactive controls
    document.getElementById('co2-btn').addEventListener('click', function() {
        this.classList.add('active');
        document.getElementById('ch4-btn').classList.remove('active');
        // Update heatmap for CO2 here
    });
    document.getElementById('ch4-btn').addEventListener('click', function() {
        this.classList.add('active');
        document.getElementById('co2-btn').classList.remove('active');
        // Update heatmap for CH4 here
    });
    document.getElementById('region-select').addEventListener('change', function() {
        // Update heatmap for selected region here
    });
    document.getElementById('time-start').addEventListener('change', function() {
        // Update heatmap for selected time range
    });
    document.getElementById('time-end').addEventListener('change', function() {
        // Update heatmap for selected time range
    });
}

function getColorForConcentration(concentration) {
    if (concentration < 1900) return '#1e40af'; // Low - blue
    if (concentration < 2200) return '#3b82f6'; // Medium - lighter blue
    if (concentration < 2500) return '#fbbf24'; // High - yellow
    return '#f97316'; // Very High - orange
}

function renderMethaneMap() {
    const canvas = document.getElementById('methane-map');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    
    // Clear canvas
    ctx.fillStyle = '#0f1d24';
    ctx.fillRect(0, 0, rect.width, rect.height);
    
    // Draw base terrain
    drawBaseTerrain(ctx, rect.width, rect.height);
    
    // Draw heatmap
    if (!showingInfrastructure) {
        drawHeatmap(ctx, rect.width, rect.height);
    } else {
        drawInfrastructureOverlay(ctx, rect.width, rect.height);
    }
    
    // Add interactivity
    addMapInteractivity(canvas, rect.width, rect.height);
}

function drawBaseTerrain(ctx, width, height) {
    // Create a gradient background to simulate terrain
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#1a4a47');
    gradient.addColorStop(0.3, '#0f2d2a');
    gradient.addColorStop(0.7, '#1a3d3a');
    gradient.addColorStop(1, '#0a1a18');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    // Add some texture with random shapes for terrain features
    ctx.fillStyle = 'rgba(46, 175, 125, 0.1)';
    for (let i = 0; i < 20; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const radius = Math.random() * 30 + 10;
        
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
    }
}

function drawHeatmap(ctx, width, height) {
    const gridSize = 20;
    const yearData = getYearAverageConcentration(currentYear);
    
    // Create a more detailed grid from the spatial data
    const extendedGrid = generateExtendedGrid(yearData);
    
    extendedGrid.forEach(point => {
        const x = ((point.longitude - 73.45626) / (73.50632 - 73.45626)) * width;
        const y = height - ((point.latitude - 18.355280000000002) / (18.415280560000003 - 18.355280000000002)) * height;
        
        const color = getColorForConcentration(point.methane_ppb);
        const alpha = Math.min((point.methane_ppb - 1800) / 800, 0.8);
        
        ctx.fillStyle = color + Math.floor(alpha * 255).toString(16).padStart(2, '0');
        ctx.beginPath();
        ctx.arc(x, y, gridSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Add glow effect for high concentrations
        if (point.methane_ppb > 2300) {
            ctx.shadowBlur = 20;
            ctx.shadowColor = color;
            ctx.fillStyle = color + '40';
            ctx.beginPath();
            ctx.arc(x, y, gridSize * 1.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
        }
    });
}

function drawInfrastructureOverlay(ctx, width, height) {
    // Draw lighter heatmap as background
    ctx.globalAlpha = 0.3;
    drawHeatmap(ctx, width, height);
    ctx.globalAlpha = 1;
    
    // Draw infrastructure sites
    dashboardData.infrastructure_sites.forEach(site => {
        const x = ((site.lon - 73.45626) / (73.50632 - 73.45626)) * width;
        const y = height - ((site.lat - 18.355280000000002) / (18.415280560000003 - 18.355280000000002)) * height;
        
        // Get color based on methane level
        let color;
        switch (site.methane_level.toLowerCase()) {
            case 'low': color = '#2EAF7D'; break;
            case 'medium': color = '#fbbf24'; break;
            case 'high': color = '#f97316'; break;
            case 'very high': color = '#ef4444'; break;
            default: color = '#3FD0C9';
        }
        
        // Draw infrastructure marker
        ctx.fillStyle = color;
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        
        // Draw different shapes for different types
        if (site.type === 'Commercial') {
            ctx.fillRect(x - 8, y - 8, 16, 16);
            ctx.strokeRect(x - 8, y - 8, 16, 16);
        } else if (site.type === 'Residential') {
            ctx.beginPath();
            ctx.arc(x, y, 8, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        } else if (site.type === 'Infrastructure') {
            ctx.beginPath();
            ctx.moveTo(x, y - 10);
            ctx.lineTo(x + 8, y + 5);
            ctx.lineTo(x - 8, y + 5);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }
        
        // Add pulsing effect for very high emissions
        if (site.methane_level === 'Very High') {
            const time = Date.now() / 1000;
            const pulse = (Math.sin(time * 3) + 1) / 2;
            ctx.globalAlpha = pulse * 0.5 + 0.3;
            ctx.fillStyle = color + '80';
            ctx.beginPath();
            ctx.arc(x, y, 15 + pulse * 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1;
        }
    });
}

function generateExtendedGrid(baseConcentration) {
    const grid = [];
    const basePoints = dashboardData.spatial_grid;
    
    // Use existing spatial grid points
    basePoints.forEach(point => {
        grid.push({
            latitude: point.latitude,
            longitude: point.longitude,
            methane_ppb: point.methane_ppb * (baseConcentration / 2000) // Scale by year average
        });
    });
    
    // Generate additional interpolated points for smoother visualization
    for (let i = 0; i < basePoints.length - 1; i++) {
        const p1 = basePoints[i];
        const p2 = basePoints[i + 1];
        
        // Add interpolated points
        for (let j = 1; j < 3; j++) {
            const factor = j / 3;
            grid.push({
                latitude: p1.latitude + (p2.latitude - p1.latitude) * factor,
                longitude: p1.longitude + (p2.longitude - p1.longitude) * factor,
                methane_ppb: (p1.methane_ppb + p2.methane_ppb) / 2 * (baseConcentration / 2000)
            });
        }
    }
    
    return grid;
}

function getYearAverageConcentration(year) {
    const yearData = dashboardData.methane_timeseries.filter(d => d.year === year);
    if (yearData.length === 0) return 2000;
    
    const sum = yearData.reduce((acc, d) => acc + d.concentration_ppb, 0);
    return sum / yearData.length;
}

function addMapInteractivity(canvas, width, height) {
    canvas.addEventListener('mousemove', function(e) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Check if hovering over infrastructure site
        if (showingInfrastructure) {
            const hoveredSite = findHoveredInfrastructure(x, y, width, height);
            if (hoveredSite) {
                showTooltip(e.clientX, e.clientY, `
                    <strong>${hoveredSite.name}</strong><br>
                    Type: ${hoveredSite.type}<br>
                    Status: ${hoveredSite.status}<br>
                    Emission Level: ${hoveredSite.methane_level}
                `);
            } else {
                hideTooltip();
            }
        } else {
            // Show concentration tooltip for heatmap
            const concentration = getConcentrationAtPoint(x, y, width, height);
            if (concentration) {
                showTooltip(e.clientX, e.clientY, `
                    <strong>Methane Concentration</strong><br>
                    ${concentration.toFixed(1)} ppb<br>
                    Year: ${currentYear}
                `);
            } else {
                hideTooltip();
            }
        }
    });
    
    canvas.addEventListener('mouseleave', hideTooltip);
}

function findHoveredInfrastructure(x, y, width, height) {
    for (const site of dashboardData.infrastructure_sites) {
        const siteX = ((site.lon - 73.45626) / (73.50632 - 73.45626)) * width;
        const siteY = height - ((site.lat - 18.355280000000002) / (18.415280560000003 - 18.355280000000002)) * height;
        
        const distance = Math.sqrt((x - siteX) ** 2 + (y - siteY) ** 2);
        if (distance < 15) {
            return site;
        }
    }
    return null;
}

function getConcentrationAtPoint(x, y, width, height) {
    // Simple interpolation based on position
    const normalizedX = x / width;
    const normalizedY = y / height;
    
    // Use year average as base and add some spatial variation
    const baseConcentration = getYearAverageConcentration(currentYear);
    const spatialVariation = (normalizedX + normalizedY) * 200 - 100;
    
    return baseConcentration + spatialVariation;
}

function showTooltip(x, y, content) {
    tooltip.innerHTML = content;
    tooltip.style.left = (x + 10) + 'px';
    tooltip.style.top = (y - 10) + 'px';
    tooltip.classList.add('show');
}

function hideTooltip() {
    tooltip.classList.remove('show');
}

function createTimeSeriesChart() {
    const ctx = document.getElementById('timeseries-chart');
    
    const labels = dashboardData.methane_timeseries.map(d => {
        const date = new Date(d.date);
        return date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
    });
    
    const data = dashboardData.methane_timeseries.map(d => d.concentration_ppb);
    
    // Create background colors for seasonal highlighting
    const backgroundColors = dashboardData.methane_timeseries.map(d => {
        if (d.month >= 6 && d.month <= 9) {
            return 'rgba(251, 191, 36, 0.1)'; // Monsoon season
        }
        return 'rgba(63, 208, 201, 0.1)';
    });
    
    timeSeriesChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Methane Concentration (ppb)',
                data: data,
                borderColor: '#3FD0C9',
                backgroundColor: 'rgba(63, 208, 201, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.3,
                pointBackgroundColor: data.map((value, index) => {
                    const month = dashboardData.methane_timeseries[index].month;
                    return (month >= 6 && month <= 9) ? '#fbbf24' : '#3FD0C9';
                }),
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#e2f4f1'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(15, 29, 36, 0.9)',
                    titleColor: '#3FD0C9',
                    bodyColor: '#e2f4f1',
                    borderColor: '#3FD0C9',
                    borderWidth: 1,
                    callbacks: {
                        afterBody: function(context) {
                            const index = context[0].dataIndex;
                            const month = dashboardData.methane_timeseries[index].month;
                            if (month >= 6 && month <= 9) {
                                return 'Monsoon Season - High microbial activity';
                            }
                            return '';
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(63, 208, 201, 0.1)'
                    },
                    ticks: {
                        color: '#94a3b8'
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(63, 208, 201, 0.1)'
                    },
                    ticks: {
                        color: '#94a3b8',
                        callback: function(value) {
                            return value + ' ppb';
                        }
                    }
                }
            }
        }
    });
}

function createSourcesChart() {
    const ctx = document.getElementById('sources-chart');
    
    const data = dashboardData.emission_sources.map(s => s.percentage);
    const labels = dashboardData.emission_sources.map(s => s.source);
    const colors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'];
    
    sourcesChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors,
                borderColor: '#0f1d24',
                borderWidth: 3,
                hoverBorderWidth: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false // We'll use custom legend
                },
                tooltip: {
                    backgroundColor: 'rgba(15, 29, 36, 0.9)',
                    titleColor: '#3FD0C9',
                    bodyColor: '#e2f4f1',
                    borderColor: '#3FD0C9',
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            const source = dashboardData.emission_sources[context.dataIndex];
                            return [
                                `${context.label}: ${context.parsed}%`,
                                `Rate: ${source.emission_rate_kg_hr} kg/hr`
                            ];
                        }
                    }
                }
            },
            cutout: '60%',
            elements: {
                arc: {
                    borderRadius: 4
                }
            }
        }
    });
}

function populateInfrastructureGrid() {
    const grid = document.getElementById('infrastructure-grid');
    
    dashboardData.infrastructure_sites.forEach(site => {
        const item = document.createElement('div');
        item.className = 'infrastructure-item';
        
        item.innerHTML = `
            <h5>${site.name}</h5>
            <p><strong>Type:</strong> ${site.type}</p>
            <p><strong>Status:</strong> ${site.status}</p>
            <span class="emission-level ${site.methane_level.toLowerCase().replace(' ', '-')}">${site.methane_level} Emissions</span>
        `;
        
        grid.appendChild(item);
    });
}

function animateMetrics() {
    const metricValues = document.querySelectorAll('.metric-value');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateValue(entry.target);
            }
        });
    }, observerOptions);
    
    metricValues.forEach(value => {
        observer.observe(value.closest('.metric-card'));
    });
}

function animateValue(element) {
    const finalValue = element.textContent.replace(/[^\d.]/g, '');
    const isFloat = finalValue.includes('.');
    const numericValue = parseFloat(finalValue);
    
    let currentValue = 0;
    const increment = numericValue / 60; // 60 frames for 1 second animation
    const suffix = element.textContent.replace(/[\d.]/g, '').trim();
    
    const animate = () => {
        currentValue += increment;
        
        if (currentValue < numericValue) {
            const displayValue = isFloat ? currentValue.toFixed(1) : Math.floor(currentValue);
            element.textContent = displayValue + (suffix ? ' ' + suffix : '');
            requestAnimationFrame(animate);
        } else {
            element.textContent = (isFloat ? numericValue.toFixed(1) : numericValue) + (suffix ? ' ' + suffix : '');
        }
    };
    
    requestAnimationFrame(animate);
}

// Smooth scrolling for better UX
document.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    const speed = 0.5;
    
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * speed}px)`;
    }
});

// Update methane map periodically to show animation
setInterval(() => {
    if (!showingInfrastructure) {
        renderMethaneMap();
    }
}, 5000);
