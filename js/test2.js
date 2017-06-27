var app5 = new Vue({
	el:'#app5',
	data:{
		a:'asdfasdf',
		ok:true,
		type:'',
		loginType:'username',
		list:[{id:'aa',name:'aaN'},{id:'bb',name:'bbN'}],
		obj:{id:'111',name:'Lilei',age:20}
	},
	methods:{
		tran:function(){
			if(this.loginType=='username'){
				this.loginType='email'
			}else if(this.loginType=='email'){
				this.loginType='username';
			}
		}
	}
});