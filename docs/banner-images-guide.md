# Banner图片上传指南

## 📸 概述

每个旅游攻略页面都有一个Banner区域，显示3张相关的旅游图片。本指南将说明如何为每个路线或目的地添加自定义Banner图片。

## 🖼️ 图片要求

### **尺寸规格**
- **桌面端**：384×288px（4:3比例）
- **移动端**：320×240px（4:3比例）
- **格式**：JPG、PNG、WebP
- **文件大小**：建议每张图片不超过500KB

### **图片内容建议**
- 选择路线中最具代表性的景点图片
- 确保图片清晰、色彩丰富
- 避免文字过多的图片
- 保持与路线主题一致

## 📁 文件结构

```
src/data/
├── routes/
│   ├── couple-1/
│   │   ├── index.md
│   │   ├── r1-shanghai.jpg      # Banner图片1
│   │   ├── r1-beijing.jpg       # Banner图片2
│   │   └── r1-shaolin.jpg       # Banner图片3
│   └── couple-2/
│       ├── index.md
│       └── [banner-images].jpg
└── destinations/
    ├── xinjiang/
    │   ├── index.md
    │   └── [banner-images].jpg
    └── tibet/
        ├── index.md
        └── [banner-images].jpg
```

## 🔧 配置方法

### **重要说明**
⚠️ **图片路径必须使用绝对路径**：在Astro中，Banner图片必须放在 `public/images/` 目录下，并使用以 `/images/` 开头的绝对路径。

### **方法1：在Markdown文件中配置**

在路线或目的地的 `index.md` 文件的frontmatter中添加 `bannerImages` 字段：

```yaml
---
title: "路线标题"
description: "路线描述"
heroImage: ./hero-image.jpg
# ... 其他字段 ...

# Banner图片配置（可选）
bannerImages: [
  "/images/routes/couple-1/banner-1.jpg",
  "/images/routes/couple-1/banner-2.jpg", 
  "/images/routes/couple-1/banner-3.jpg"
]
---
```

### **方法2：使用默认图片**

如果不配置 `bannerImages` 字段，系统会自动使用默认的占位图片。

## 📝 示例配置

### **路线示例（couple-1）**

```yaml
---
title: IShowSpeed's China Route
description: A fun, youthful route that merges memes, markets, and must-sees.
heroImage: ./r1-ispeedshow.jpg
# ... 其他字段 ...

# Banner图片 - 使用路线中的景点图片
bannerImages: [
  "/images/routes/couple-1/r1-shanghai.jpg",    # 上海外滩
  "/images/routes/couple-1/r1-beijing.jpg",     # 北京故宫
  "/images/routes/couple-1/r1-shaolin.jpg"      # 少林寺
]
---
```

### **目的地示例（xinjiang）**

```yaml
---
title: Xinjiang Adventure
description: Explore the vast landscapes of Xinjiang
heroImage: ./xinjiang-hero.jpg
# ... 其他字段 ...

# Banner图片 - 使用目的地特色图片
bannerImages: [
  "/images/destinations/xinjiang/xinjiang-banner-1.jpg",  # 天山
  "/images/destinations/xinjiang/xinjiang-banner-2.jpg",  # 喀什古城
  "/images/destinations/xinjiang/xinjiang-banner-3.jpg"   # 吐鲁番
]
---
```

## 🎯 最佳实践

### **图片选择**
1. **代表性**：选择最能代表该路线/目的地的图片
2. **多样性**：3张图片应该展示不同的景点或特色
3. **质量**：确保图片清晰、构图良好
4. **一致性**：保持图片风格和色调的一致性

### **命名规范**
- 使用描述性的文件名
- 包含路线/目的地标识
- 例如：`r1-shanghai.jpg`、`xinjiang-tianshan.jpg`

### **文件管理**
- 将Banner图片放在对应的路线/目的地文件夹中
- 使用相对路径引用图片
- 保持文件结构清晰

## 🔄 更新流程

1. **准备图片**：按照尺寸要求准备3张图片
2. **上传文件**：将图片文件放入对应的文件夹
3. **修改配置**：在 `index.md` 中添加 `bannerImages` 字段
4. **测试验证**：检查页面显示效果
5. **优化调整**：根据需要调整图片或配置

## ❓ 常见问题

### **Q: 可以只配置1-2张图片吗？**
A: 建议配置3张图片以获得最佳效果。如果只配置1-2张，系统会重复显示这些图片。

### **Q: 图片显示不完整怎么办？**
A: 确保图片尺寸符合4:3比例，系统会自动裁剪以适应显示区域。

### **Q: 如何更换现有图片？**
A: 替换图片文件，然后更新 `bannerImages` 配置中的文件名。

### **Q: 移动端和桌面端显示效果不同？**
A: 系统会自动适配不同屏幕尺寸，保持4:3比例。

## 📞 技术支持

如果在配置过程中遇到问题，请检查：
1. 图片文件是否存在
2. 文件路径是否正确
3. 图片格式是否支持
4. YAML语法是否正确 