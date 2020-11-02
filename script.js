Vue.component('character', {
  data: function(){
    return{
      buttonText: this.name,
      whackName: false
    };
  },
  props: ["name", "cname", "flipped"],
  methods: {
    flipFunction: function(){
      if (this.whackName)
      {
        this.buttonText = this.name;
      } 
      else 
      {
        this.buttonText = this.cname;
      }
      this.whackName = !this.whackName;
      this.flipped = !this.flipped;
    }
  },
  template: `<button v-on:click="flipFunction" v-bind:class="{backgroundFlip: flipped}">{{buttonText}}</button>`
});

var coolform = new Vue({
  el: "#coolform",
  data: {
    name:"",
    email:"",
    nameYuh:false,
    emailYuh:false,
    
    list:[
            {name:"Protagonist", codename:"Joker", flipped:false},
            {name: "Anne", codename: "Panther", flipped:false},
             {name:"Ryuji", codename:"Skull", flipped:false}
         ]
  },
  
  watch: {
    name: function(){
      if (this.name.length >= 2) 
      {
        this.nameYuh = true;
      } 
      else 
      {
        this.nameYuh = false;
      }
    },
    
    email: function(){
      var valEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var result = valEmail.test(this.email);
      
      if (result) 
      {
        this.emailYuh = true;
      } 
      else 
      {
        this.emailYuh = false;
      }
    }
  },

  computed: {
    submit: function(){
      if (this.name.length < 1 && this.email.length < 1) 
      {
        return "";
      } 
      else if (this.nameYuh && this.emailYuh) 
      {
        return "Submission complete :D";
      } 
      else 
      {
        return "Name should be at least two characters and please format the email the right way (ex: name@email.com)";
      }
    }
  }
});