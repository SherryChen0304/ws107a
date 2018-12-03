/* 模板字符串 */
var reply = { _id: '110610529', user: 'SherryChen', msg: 'dearsherrychen@gmail.com', date: '20181123' }
var postId = 'gj950011'
var user = 'sherry'

var replyHtml = function (user, poseId, reply) {
    var replyOp = (reply.user === user) ? `<i class="fa fa-times" title="delete" onclick="SMS.deleteReply('${postId}','${reply._id}')"></i>` : ``

    return `
<div id="reply${reply._id}" class="reply">
  <div contenteditable="true" class="replyMsg" onkeyup="SMS.replyEditKeyup('${postId}', '${reply._id}', this.innerText)">${reply.msg}</div>
  <div style="float:right">
    <i class="fa fa-user" title="Author"></i>
    <a href="/view/${user}">${reply.user}</a>
    <i class="fa fa-clock-o" title="${reply.date}"></i>
  </div>
</div>
`
}

console.log(replyHtml(user, postId, reply))