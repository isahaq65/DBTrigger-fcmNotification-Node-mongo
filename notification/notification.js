
const issueNotification =  (data, token) => {
	const msg={
		notifcation:{
			title:"Noti",
			body:"This is a noti msg",
		},
		token:token 
	}
	messaging.getMessaging().send(msg).then((res)=>{
		console.log('notification')
	}).catch(err=>{
		console.log(err)
	})
	
}