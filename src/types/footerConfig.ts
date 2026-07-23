export type FooterConfig = {
	enable: boolean; // 是否启用Footer自定义内容
	icp?: {
		icon: string; // 工信部图标路径，例如 "/favicon/icp-icon.png"
		number: string; // 备案号，例如 "湘ICP备2026030025号-1"
		url?: string; // 查询链接，默认 "https://beian.miit.gov.cn/"
	};
	police?: {
		icon: string; // 公安图标路径，例如 "/favicon/ps-icon.png"
		number: string; // 公安备案号
		url?: string; // 查询链接，默认 "https://www.beian.gov.cn/"
	};
};
