(function (window) {
const todos = [
	{
		id: 1,
		title: "eatingg",
		done: true
	},
	{
		id: 2,
		title: "running",
		done: false
	},
	{
		id: 3,
		title: "smiling",
		done: true
	},
	{
		id: 4,
		title: "palying",
		done: true
	}
]
var todoapp = new Vue({
	el: "#todoapp",
	data: {
		todos,
		inputText: '',
		currentEdit: null,
		backTitle: ''
	},
	methods: {
		addData () {
			// 回车添加给数组中添加数据
			// 判断文本是否为空
			if(this.inputText.trim().length===0){
				return
			}
			// 将新添加的id设置为数组最后一个元素的id+1
			const todos = this.todos
			const id = todos[todos.length-1].id+1
			this.todos.push(
				{
					id,
					title: this.inputText,
					done: false
				}
				)
			// 清空文本框
			this.inputText = ''
		},
		removeTodo (index) {
			// 实现删除功能  就是将数据从数组中删除
			this.todos.splice(index,1)
		},
		editTodo (item) {
			// 判断是否值是否相同
			// 双击的时候让两个值相同，true，添加editing类名
			this.currentEdit = item
			// 改变edit中默认的数据
			// 缓存编辑的时候的item的title
			this.backTitle = item.title
		},
		saveTodo (item,index) {
			// 1 如果为空则删除
			if(item.title.trim().length===0){
				this.todos.splice(index,1)
			}
			// 2 不为空就保存 并取消edit的样式
			// 因为是双向的，数据会跟着改变，所以会自动保存
			this.currentEdit = null
		},
		cancelEdit (item) {
			// 保持一开始的tite
				item.title = this.backTitle
				// 去掉编辑的样式
				this.currentEdit = null
		}
	}
})



})();
