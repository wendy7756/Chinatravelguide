# 浮动按钮功能说明

## 🎯 功能概述

在每个旅游路线和目的地页面的右下角，添加了两个固定位置的浮动按钮，提供便捷的用户交互功能。

## 🔘 按钮详情

### **1. WhatsApp 联系按钮**
- **位置**：右下角，上方
- **颜色**：绿色 (#25D366)
- **图标**：WhatsApp 官方图标
- **功能**：点击跳转到 WhatsApp 聊天
- **链接**：`https://wa.me/message/TBWKHP7ZOLH3M1`
- **行为**：在新标签页中打开

### **2. 返回顶部按钮**
- **位置**：右下角，下方
- **颜色**：灰色 (#6B7280)
- **图标**：向上箭头
- **功能**：平滑滚动回到页面顶部
- **显示逻辑**：当页面滚动超过300px时显示

## 🎨 设计特色

### **视觉效果**
- **圆形按钮**：直径3.5rem (桌面端) / 3rem (移动端)
- **阴影效果**：柔和的阴影增强立体感
- **悬停动画**：按钮上移2px，阴影加深
- **颜色渐变**：悬停时颜色变深

### **交互体验**
- **平滑过渡**：所有动画使用0.3s缓动
- **响应式设计**：移动端按钮稍小
- **无障碍支持**：包含aria-label属性
- **键盘导航**：支持键盘操作

## 📱 响应式适配

### **桌面端 (≥768px)**
- 按钮大小：3.5rem × 3.5rem
- 图标大小：1.5rem × 1.5rem
- 位置：距离右下角2rem

### **移动端 (<768px)**
- 按钮大小：3rem × 3rem
- 图标大小：1.25rem × 1.25rem
- 位置：距离右下角1.5rem
- 按钮间距：0.75rem

## 🔧 技术实现

### **组件结构**
```
src/components/FloatingButtons/
└── FloatingButtons.astro
```

### **主要特性**
- **固定定位**：使用 `position: fixed`
- **层级控制**：`z-index: 1000`
- **JavaScript交互**：滚动监听和点击事件
- **CSS动画**：悬停效果和显示/隐藏动画

### **代码示例**
```astro
---
interface Props {
	whatsappLink?: string;
}

const { whatsappLink = "https://wa.me/message/TBWKHP7ZOLH3M1" } = Astro.props;
---

<div class="fixed-buttons">
	<!-- WhatsApp Button -->
	<a href={whatsappLink} class="whatsapp-button">
		<svg>...</svg>
	</a>

	<!-- Back to Top Button -->
	<button class="back-to-top-button" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
		<svg>...</svg>
	</button>
</div>
```

## 📍 应用页面

### **路线页面**
- `src/layouts/RouteLayout.astro`
- 使用路线特定的WhatsApp链接

### **目的地页面**
- `src/layouts/DestinationLayout.astro`
- 使用目的地特定的WhatsApp链接

## 🎯 用户体验

### **便捷性**
- **快速联系**：一键跳转到WhatsApp
- **快速导航**：一键返回页面顶部
- **固定位置**：始终可见，不干扰阅读

### **视觉层次**
- **不突兀**：半透明阴影，融入页面
- **易识别**：清晰的图标和颜色
- **一致性**：所有页面统一的设计

### **交互反馈**
- **悬停效果**：按钮上移和阴影变化
- **点击反馈**：平滑的动画过渡
- **状态指示**：返回顶部按钮的显示/隐藏

## 🔄 自定义选项

### **WhatsApp链接**
可以通过props传递自定义的WhatsApp链接：
```astro
<FloatingButtons whatsappLink="https://wa.me/your-custom-link" />
```

### **样式定制**
可以通过CSS变量自定义颜色：
```css
:root {
	--whatsapp-color: #25D366;
	--back-to-top-color: #6B7280;
}
```

## 📊 性能优化

### **加载优化**
- **延迟加载**：返回顶部按钮按需显示
- **事件委托**：高效的滚动监听
- **CSS动画**：使用GPU加速的transform

### **兼容性**
- **现代浏览器**：支持ES6+语法
- **移动设备**：触摸友好的按钮大小
- **无障碍**：符合WCAG 2.1标准

## 🎨 设计原则

### **简洁性**
- 最小化视觉干扰
- 清晰的图标设计
- 一致的视觉语言

### **可用性**
- 易于点击的按钮大小
- 清晰的视觉反馈
- 直观的功能标识

### **一致性**
- 与网站整体设计风格统一
- 在所有页面保持一致的体验
- 符合现代Web设计标准

浮动按钮为用户提供了便捷的交互方式，增强了网站的可用性和用户体验！ 