import type { FooterConfig } from "../types/footerConfig";

export const footerConfig: FooterConfig = {
	// 是否启用Footer自定义内容
	enable: true,
	// 工信部备案号配置
	icp: {
		icon: "/favicon/icp-icon.png",
		number: "湘ICP备2026030025号-1",
		url: "https://beian.miit.gov.cn/",
	},
	// 公安备案号配置，等备案下来后取消注释
	// police: {
	// 	icon: "/favicon/ps-icon.png",
	// 	number: "湘公网安备：XXXXXXXXXX",
	// 	url: "https://www.beian.gov.cn/",
	// },
};
