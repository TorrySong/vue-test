
Vue.filter('Myfilter',function(val){

	return val+'333666';
})

new Vue({
	el:'#app',
	data:{
		message:'Hello sb vue!',
		hint:[
		{key:'aaa'},
		{key:'bbb'},
		{key:'ccc'},
			],
		isSh:false,
	}
});

var app2 = new Vue({
	el:'#app2',
	data:{
		once:'ddddzzz!',
		textMess:'this is v-text!',
		htmlMess:'<h3>this is Html Mess</h3>',
		idTest:'div11111',
		disableAttr:false,
		title:'加载时间为：'+new Date(),
		number:1,
		ok:true,
		message:'a b c',
		id:'id1',
		seen:false,
		url:'https://www.baidu.com',
		dosomething:function(){
			alert(222);
		},
		onSubmit:function(){
			alert('submit~~');
		}

	},
	filters:{
		MyFilter2:function(val,val2,val3){
			console.log(val2,val3);
			return val+'-我是过滤器2'+'-'+val2+'-'+val3;
			// return val+"-我是过滤器2"+'-'+val2+'='+val3;
		}
	},

	
});

var app3 = new Vue({
	el:'#app3',
	data:{
		message:'my is vue test!',
		firstName:'Foo',
		lastName:'Bar'
		// fullName:'Foo Bar'
	},
	computed:{
		reverseMessage:function(){
			return this.message.split(' ').reverse().join(' ');
		},
		now:function(){
			return Date.now();
		},
		fullName:{
			get:function(){
				console.log('get');
			return this.firstName+' '+this.lastName;
			},
			set: function(newVal){
				console.log('set:'+newVal);
				if(newVal.indexOf(' ')>0){
					this.firstName = newVal.split(' ')[0];
					this.lastName = newVal.split(' ')[1];
				}else{
					this.firstName = newVal.substr(0,newVal.length/2);
					this.lastName = newVal.substr(newVal.length/2);;
				}
				
			}
		}
	},
	methods:{
		reverseMessage2:function(){
			return this.message.split(' ').reverse().join(' ');
		},
		now2:function(){
			return Date.now();
		}
	},
	watch:{
		// firstName:function(val){
		// 	this.fullName = val +' '+this.lastName;
		// },
		// lastName:function(val){
		// 	this.fullName = this.firstName+' '+val;
		// }

	}

});

Vue.component('my-component',{
	template:'<p class="a b">Hello</p>'
});

var app4 = new Vue({
	el:'#app4',
	data:{
		// classObjecta:{
		// 	// 'active':true,
		// 	// 'text':true,

		// },
		activeKey:true,
		textKey:'text',
		colorVal:'blue',
		fontSize:'13px'

	},
	computed:{
		classObject:function(){
			return this.classObjecta;
		}
	},
	methods:{

	},
	watch:{

	}
});


