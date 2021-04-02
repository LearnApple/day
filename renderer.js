const myNotification = new Notification('测试', {
    body: '测试通知内容'
})

myNotification.onclick = () => {
    console.log('clicked')
}