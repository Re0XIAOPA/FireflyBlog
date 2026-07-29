import type { FooterConfig } from "../types/footerConfig";

export const footerConfig: FooterConfig = {
	// 是否启用Footer自定义内容
	enable: true,
	// 工信部备案号配置
	icp: {
		icon: "/favicon/icp-icon.png",
		number: "湘ICP备2026030025号-1",
		url: "https://beian.miit.gov.cn/#/Integrated/index",
	},
	// 公安备案号配置，等备案下来后取消注释
	police: {
		icon: "/favicon/ps-icon.png",
		number: "湘公网安备43072402000247号",
		url: "https://beian.mps.gov.cn/#/query/webSearch?code=43072402000247",
	},
};
