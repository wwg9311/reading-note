// 侧边栏配置项
module.exports = [
  { title: "开始", path: "/introduce/" },
  {
    title: "投资理财",
    children: [
      ["/investment/rich-dad/", "富爸爸穷爸爸"],
      ["/investment/xiaoxing-cwsw/", "肖星的财务思维课"]
    ],
  },
];