/**
 * 课程信息
 */
interface CourseInfo {
	/**
	 * 课程标题
	 */
	name: string
	/**
	 * 课程地址
	 */
	url: string
	/**
	 * 课程所属平台 geekTime-极客时间 lagou-拉勾教育 kaikeba-开课吧 juejin-掘金 others-其他
	 */
	platform: 'geekTime' | 'lagou' | 'kaikeba' | 'juejin' | 'others'
	/**
	 * 标签
	 */
	tags: string[]
	/**
	 * 是否免费
	 */
	isFree: boolean
	/**
	 * 价格
	 */
	price: string | null
	/**
	 * 创建时间 YYYY-MM-DD HH:mm:ss
	 */
	createTime: string | null
	/**
	 * 过期时间 YYYY-MM-DD HH:mm:ss
	 */
	expiresTime: string | null
}
