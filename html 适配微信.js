// md生成的html 适配微信
function adaptForWechat(id) {
	adaptUlTagForWechat(id);
}

// 由于微信的 ul 标签不是挂在 li 标签内，而是挂在li标签后
// 直接粘到微信会出现 ul 标签混乱
// 【注意】ul标签后的元素不会移动，可能造成顺序改变
function adaptUlTagForWechat(id) {
	// 获取文章dom
	articleNode = document.getElementById(id);
	// 获取其所有 ul 标签子节点
	ulNodes = articleNode.getElementsByTagName("ul");
	for(i in ulNodes) {
		ulNode = ulNodes[i];
		if(ulNode.parentNode.nodeName=="LI") {
			moveAfterParent(ulNode)
		}
	}
}

// 将当前节点移动到父节点后
function moveAfterParent(current) {
	// 从父亲节点移除
	var parent = current.parentNode;
	parent.removeChild(current);

	// 添加到父亲节点后
	var parentNext = parent.nextSibling;
	var grandParent = parent.parentNode;
	grandParent.insertBefore(current, parentNext);
}
