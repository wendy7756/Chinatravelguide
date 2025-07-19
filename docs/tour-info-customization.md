# 旅游信息自定义指南

每个旅游路线和目的地页面都可以独立配置以下旅游信息字段：

## 可配置字段

### 基本信息
- `subtitle`: 副标题（用于吸引游客的英文描述，如："Journey to the Roof of the World - Where spirituality meets breathtaking landscapes"）
- `tourType`: 旅游类型（如："Private tour, any part of the itinerary can be customized"）
- `guideDriver`: 导游和司机信息（如："Bilingual guide, experienced driver with an air-conditioned vehicle"）
- `duration`: 行程时长（如："10 days, 9 nights"、"7 days, 6 nights"等）
- `hotel`: 酒店标准（如："5-star hotels throughout the trip"、"4-star hotels throughout the trip"等）

### 景点和价格
- `attractions`: 主要景点列表（用逗号分隔）
- `price`: 价格（如："$100"、"$2,500"等）
- `whatsappNumber`: WhatsApp联系号码（如："447410419832"）
- `whatsappBusinessLink`: WhatsApp Business链接（如："https://wa.me/message/TBWKHP7ZOLH3M1"）

## 当前配置示例

### 目的地页面

#### 西藏 (Tibet)
- 价格: $2,500
- 时长: 10 days, 9 nights
- 景点: Potala Palace, Mount Everest Base Camp, Namtso Lake等

#### 新疆 (Xinjiang)
- 价格: $1,800
- 时长: 7 days, 6 nights
- 景点: Heavenly Lake of Tianshan, Kanas Lake, Taklamakan Desert等

#### 内蒙古 (Nei Mongol)
- 价格: $1,200
- 时长: 5 days, 4 nights
- 景点: Hulunbuir Grasslands, Xiangshawan Desert, Naadam Festival等

### 路线页面

#### IShowSpeed's China Route
- 价格: $3,200
- 时长: 15 days, 14 nights
- 景点: Shanghai Bund, Beijing Forbidden City, Shaolin Temple等

#### Jiangsu's 13 Cities
- 价格: $2,800
- 时长: 12 days, 11 nights
- 景点: Nanjing Sun Yat-sen Mausoleum, Suzhou Classical Gardens等

#### Silk Road Route
- 价格: $4,500
- 时长: 18 days, 17 nights
- 景点: Xi'an Terracotta Warriors, Zhangye Danxia, Mogao Caves等

## 如何修改

1. 找到对应的内容文件：
   - 目的地: `src/data/destinations/[目的地名称]/index.md`
   - 路线: `src/data/routes/[路线名称]/index.md`

2. 在frontmatter中修改相应的字段值

3. 保存文件后，页面会自动更新显示新的信息

## 配置示例

```yaml
---
title: Your Tour Title
description: Your tour description
heroImage: ./your-image.jpg
order: 1
# Tour Information
subtitle: "Your compelling subtitle here - Make it attractive and descriptive"
tourType: "Private tour, any part of the itinerary can be customized"
guideDriver: "Bilingual guide, experienced driver with an air-conditioned vehicle"
duration: "10 days, 9 nights"
hotel: "5-star hotels throughout the trip"
attractions: "景点1, 景点2, 景点3"
price: "$100"
whatsappNumber: "447410419832"
whatsappBusinessLink: "https://wa.me/message/TBWKHP7ZOLH3M1"
---
```

## 功能特点

- ✅ 每个页面独立配置
- ✅ 实时更新显示
- ✅ 响应式设计
- ✅ WhatsApp一键联系
- ✅ 美观的信息展示卡片

## 注意事项

- 所有字段都是可选的，如果不设置会使用默认值
- 价格建议使用美元符号（$）开头
- WhatsApp号码不需要包含国家代码前缀（如+44）
- 景点名称建议用英文，用逗号分隔
- WhatsApp Business链接优先于普通WhatsApp号码，如果两者都设置，会使用Business链接 