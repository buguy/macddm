$(function(){
//先創建一個Date實體
var time = new Date();

//獲取當前時間(取得的值為一個毫秒数值)
var theTime = time.getTime(); //1558492972644

var timeDetails = {
  year: time.getFullYear(),
  month: time.getMonth() + 1,
  date: time.getDate(),
  hour: time.getHours(),
  minute: time.getMinutes(),
  second: time.getSeconds(),
};

const ddm={
    data(){
        return{
            content: "Hellow World!!!",
            DDMSW: "v1.1.0.0008",
            PCModel1: 'M1 MacBook Pro (13", 2020)',
            OS1: "12.4",
            PCModel2: 'M1 MacBook Air (2020)',
            PC2: '',
            OS2: "11.3",
            Monitor1: true,
            FW1: "",
            input1: "",
            D1: "None",
            Monitor2: '',
            FW2: "hhhhh",
            input2: "",
            D2: "None",
            test: 'PC1 model: {{PCModel1}}&#13;&#10;',
            del_mo: "Add",
            del_pc: "Add",
            ddm: "[DDPM]",
            default_option: 0,
            changeOs1: 0,
            get_time: (time.getMonth() + 1)+"/"+time.getDate()
            
        }
    },
    methods:{
        add_Monitor(){
            if(this.Monitor2==true){
                this.del_mo=" Add"
            }else{
                this.del_mo=" Delete"
            }
        },
        add_PC(){
            if(this.PC2==true){
                this.del_pc=" Add"
            }else{
                this.del_pc=" Delete"
            }
        },
        select_OS1(para){
          this.OS1=para
        },
        select_OS2(para){
          this.OS2=para
        },
        change_os1(){
          console.log("change os1")
        }    
    }
}
const app=Vue.createApp(ddm)
app.component('os_select',{
    props:['pcm','SOS1'],
    data(){
        return{
            oss: [],
            selected_os: "",
            select_index: 0
        }
    },
    methods:{
      default_check(){
          if(this.pcm=="non-M1 Mac Pro 2019"){
            this.oss=['10.15.5','11.2.1','11.4','11.5','11.6','12.0.1','12.1','12.2']
            if(this.select_index===1){
              this.selected_os='11.2.1'
            }else if(this.select_index===2){
              this.selected_os='11.4'
            }else if(this.select_index===3){
              this.selected_os='11.5'
            }else if(this.select_index===4){
              this.selected_os='11.6'
            }else if(this.select_index===5){
              this.selected_os='12.0.1'
            }else if(this.select_index===6){
              this.selected_os='12.1'
            }else if(this.select_index===7){
              this.selected_os='12.2'
            }else{
              this.selected_os='10.15.5'
            }

  
          }else if(this.pcm=='non-M1 MacBook Pro(13" 2019)'){
            this.oss=['10.14','11.2.3']
            if(this.select_index===1){
              this.selected_os='11.2.3'
            }else{
              this.selected_os='10.14'
            }
            
          }else if(this.pcm=='M1 MacBook Pro (13", 2020)'){
            this.oss=['11.7.1','11.6.8','12.4','12.5',"13.0"]
            if(this.select_index===1){
              this.selected_os='11.6.8'
            }else if(this.select_index===2){
              this.selected_os='12.4'
            }else if(this.select_index===3){
              this.selected_os='12.5'
            }else if(this.select_index===4){
              this.selected_os='13.0'
            }else{
              this.selected_os='11.7.1'
            }

 
          }else if(this.pcm=="Mac Mini (M1, 2020)"){
            this.oss=['11.4','11.6','12.0.1','12.4','12.6']
            if(this.select_index===1){
              this.selected_os='11.6'
            }else if(this.select_index===2){
              this.selected_os='12.0.1'
            }else if(this.select_index===3){
              this.selected_os='12.4'
            }else if(this.select_index===4){
              this.selected_os='12.6'    
            }else{
              this.selected_os='11.4'
            }

          }else if(this.pcm=="M1 MacBook Air (2020)"){
            this.oss=['11.5.2','11.3','12.0.1']
            if(this.select_index===1){
              this.selected_os='11.3'
            }else if(this.select_index===2){
              this.selected_os='12.0.1'
            }else{
              this.selected_os='11.5.2'
            }

          }else if(this.pcm=='non-M1 MacBook Pro(13" 2020)'){
            this.oss=['10.15.6','11.3 Beta','11.6.3','12.3.1','12.5','13.0']
            if(this.select_index===1){
              this.selected_os='11.3 Beta'
            }else if(this.select_index===2){
              this.selected_os='11.6.3'
            }else if(this.select_index===3){
              this.selected_os='12.3.1'
            }else if(this.select_index===4){
              this.selected_os='12.5'
            }else if(this.select_index===5){
              this.selected_os='13.0'  
            }else{
              this.selected_os='10.15.6'
            }

          }else if(this.pcm=='non-M1 MacBook Air'){
            this.oss=['10.15.7','11.5.2','12.4','12.5','11.7']
            if(this.select_index===1){
              this.selected_os='11.5.2'
            }else if(this.select_index===2){
              this.selected_os='12.4'
            }else if(this.select_index===3){
              this.selected_os='12.5'
            }else if(this.select_index===4){
              this.selected_os='11.7'      
            }else{
              this.selected_os='10.15.7'
            }

          }else if(this.pcm=="non-M1 Mac Mini 2018"){
            this.oss=['10.15.7','11.2.3','11.6.4','12.0.1','13.0']
            if(this.select_index===1){
              this.selected_os='11.2.3'
            }else if(this.select_index===2){
              this.selected_os='11.6.4'
            }else if(this.select_index===2){
              this.selected_os='12.0.1'
            }else if(this.select_index===2){
              this.selected_os='13.0'    
            }else{
              this.selected_os='10.15.7'
            }

          }else if(this.pcm=='M1-Pro MacBook Pro (2020)'){
            this.oss=['12.6','13.0','12.0.1','12.3']
            if(this.select_index===1){
              this.selected_os='13.0'
            }else if(this.select_index===2){
              this.selected_os='12.0.1'
            }else if(this.select_index===3){
              this.selected_os='12.3'    
            }else{
              this.selected_os='12.6'
            }

          }else if(this.pcm=="M1 MacBook Air (2020, OS13)"){
            this.oss=['12.2.1','12.5','13.0','12.6']
            if(this.select_index===1){
              this.selected_os='12.5'
            }else if(this.select_index===2){
              this.selected_os='13.0'
            }else if(this.select_index===3){
              this.selected_os='12.6'    
            }else{
              this.selected_os='12.2.1'
            }
          }else if(this.pcm=='M2 MacBook Pro (13", 2022)'){
            this.oss=['12.5.1','13.0','13 Beta']
            if(this.select_index===1){
              this.selected_os='13.0'
            }else if(this.select_index===2){
              this.selected_os='13.0 Beta'
            }else{  
              this.selected_os='12.5.1'
            }
          }else if(this.pcm=="M1-Max Mac Studio"){
            this.oss=['12.3','12.5.1','13 Beta']
            if(this.select_index===1){
              this.selected_os='12.5.1'
            }else if(this.select_index===2){
              this.selected_os='13.0 Beta'
            }else{  
              this.selected_os='12.3'
            }
          }else if(this.pcm=='non-M1 MacBook Pro(13" 2017)'){
            this.oss=['10.14','10.15']
            if(this.select_index===1){
              this.selected_os='10.15'
            }else{  
              this.selected_os='10.14'
            }
          }else if(this.pcm=='non-M1 MacBook Pro(16" 2019)'){
            this.oss=['10.15.7','11.5.2']
            if(this.select_index===1){
              this.selected_os='11.5.2'
            }else{  
              this.selected_os='10.15.7'
            }
          }



          this.$emit('GetT',this.selected_os) 
      },

    },

    template:`<select name="" id="os" v-on="default_check()" v-model="select_index" >`+
    `<option v-for='(item,index) in oss' :value="index" >{{item}}</option>`+
  `</select>` 


})



app.mount('#app')

// Vue.createApp(Counter).mount('#counter')


})