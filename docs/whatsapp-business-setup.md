# WhatsApp Business 链接设置指南

要让WhatsApp显示头像而不是号码，你需要设置WhatsApp Business链接。

## 方法1：使用WhatsApp Business链接（推荐）

### 步骤1：创建WhatsApp Business账户
1. 下载WhatsApp Business应用
2. 使用你的手机号码注册
3. 设置你的业务资料（头像、名称、描述等）

### 步骤2：获取Business链接
1. 在WhatsApp Business中，进入设置
2. 找到"Business Profile"或"业务资料"
3. 复制你的Business链接（格式类似：`https://wa.me/447410419832?text=Hello`）

### 步骤3：在内容文件中使用
在你的markdown文件中添加：

```yaml
---
title: Your Tour Title
description: Your tour description
heroImage: ./your-image.jpg
order: 1
# Tour Information
tourType: "Private tour, any part of the itinerary can be customized"
guideDriver: "Bilingual guide, experienced driver with an air-conditioned vehicle"
duration: "10天9晚"
hotel: "全程5钻酒店"
attractions: "景点1, 景点2, 景点3"
price: "$2,500"
whatsappNumber: "447410419832"
whatsappBusinessLink: "https://wa.me/447410419832?text=Hello%20from%20your%20website"
---
```

## 方法2：使用预定义消息

你可以在链接中添加预定义的消息，让用户点击后直接显示预设文本：

```yaml
whatsappBusinessLink: "https://wa.me/447410419832?text=Hi%20I%20want%20to%20inquire%20about%20the%20tour"
```

URL编码的消息示例：
- "Hi I want to inquire about the tour" → `Hi%20I%20want%20to%20inquire%20about%20the%20tour`
- "Hello from your website" → `Hello%20from%20your%20website`

## 方法3：使用WhatsApp Business API（高级）

如果你有开发者账户，可以使用WhatsApp Business API创建更高级的链接。

## 当前配置示例

### 西藏页面
```yaml
whatsappBusinessLink: "https://wa.me/447410419832?text=Hi%20I%20want%20to%20inquire%20about%20the%20Tibet%20tour"
```

### 新疆页面
```yaml
whatsappBusinessLink: "https://wa.me/447410419832?text=Hi%20I%20want%20to%20inquire%20about%20the%20Xinjiang%20tour"
```

## 注意事项

1. **Business链接优先级**：如果设置了`whatsappBusinessLink`，系统会优先使用它
2. **回退机制**：如果没有设置Business链接，系统会自动使用普通的WhatsApp链接
3. **消息编码**：确保在URL中正确编码中文字符
4. **测试**：设置后请测试链接是否正常工作

## 效果对比

- **普通链接**：显示号码，没有头像
- **Business链接**：显示头像、名称和预设消息 